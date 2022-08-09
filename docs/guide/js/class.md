# 类

## 基础

为了和其他语言继承形态一致，JS提供了`class` 关键词用于模拟传统的`class` ，但底层实现机制依然是原型继承

**`class` 只是语法糖为了让类的声明与继承更加简洁清晰**

### 定义

可以使用类声明和赋值表达式定义类，推荐使用类声明来定义类

```js
//类声明
class User {}
console.log(new User());//User{}

let Article = class {};
console.log(new Article());
```

**类方法间不需要逗号**

```js
class User {
    show() {}
    get() {
        console.log("get method");
    }
}
const use = new User();
use.get();//get method
```

### 构造函数

使用 `constructor` 构造函数传递参数，下例中`show`为构造函数方法，`getName`为原型方法

- `constructor` 会在 new 时自动执行

```js
class User {
    constructor(name) {
        this.name = name;
        this.show = function() {};
    }
    getName() {
        return this.name;
    }
}
const use = new User("张三");
console.log(use.getName());
```

构造函数用于传递对象的初始参数，但不是必须定义的，如果不设置系统会设置如下类型

- 子构造器中调用完`super` 后才可以使用 `this`
- 至于 `super` 的概念会在后面讲到

```js
constructor(...args) {
    super(...args);
}
```

### 原理分析

```js
class User {}
console.log(typeof User); //function
```

**`constructor` 用于定义函数代码**

```js
class User {
  constructor(name) {
    this.name = name;
  }
  show() {}
}
console.dir(User);
console.log(User === User.prototype.constructor); //true

//下面是对比的普通函数
function Func(name) {
  this.name = name;
}
console.dir(Func);
console.log(Func === Func.prototype.constructor); //true
```

**在类中定义的方法也保存在函数原型中**

```js
class User {
    constructor(name) {
        this.name = name;
    }
    show() {}
}
console.log(Object.getOwnPropertyNames(User.prototype)); //['constructor', 'show']
```

```js
//定义的类与函数是一致的
class User {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}

function User(name) {
    this.name = name;
}
User.prototype.show = function() {
    console.log(this.name);
};
```

### 属性定义

在 `class` 中定义的属性为每个`new` 出的对象独立创建，下面定义了 `site` 与 `name` 两个对象属性

```js
class User {
    site = "name:";
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.site + ":" + this.name);
    }
}
let use = new User("张三");
use.show();//name::张三
```

### 函数差异

**`class` 是使用函数声明类的语法糖，但也有些区别**

**`class` 中定义的方法不能枚举**

```js
class User {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}
let use = new User("张三");
//不会枚举出show属性
for (const key in use) {
    console.log(key); //name
}

function Func(name) {
    this.name = name;
}
Func.prototype.show = function() {
    console.log(this.name);
};
let obj = new Func("李四");
for (const key in obj) {
    console.log(key);//name  show
}
```

###  严格模式

**`class` 默认使用`strict` 严格模式执行**

## 静态访问

### 静态属性

静态属性即为类设置属性，而不是为生成的对象设置

```js
function User() {}
User.age = 18;
console.dir(User);

const use = new User();
console.log(use.age); //undefiend
console.log(User.age); //18
```

**在 `class` 中为属性添加 `static` 关键字即声明为静态属性**

- 可以把为所有对象使用的值定义为静态属性

```js
class Request {
    static HOST = "姓名：";
    query(val) {
        return Request.HOST +val;
    }
}
let request = new Request();
console.log(request.query("张三"));//姓名：张三
```

### 静态方法

指通过类访问不能使用对象访问的方法，比如系统的`Math.round()`就是静态方法

- 一般来讲方法不需要对象属性参与计算就可以定义为静态方法

```js
function User() {
    this.show = function() {
        return "this is a object function";
    };
}
User.show = function() {
    return "static function";
};
const use = new User();
console.dir(use.show()); //this is a object function
console.dir(User.show()); //static function
```

**在 `class` 内声明的方法前使用 `static` 定义的方法即是静态方法**

```js
class User {
    constructor(name) {
        this.name = name;
    }
    static create(name) {
        return new User(name);
    }
}
const use = User.create("张三");
console.log(use);//User{name: '张三'}
```

使用静态方法在课程类中的使用

```js
const data = [
    { name: "js", price: 80 },
    { name: "mysql", price: 60 },
    { name: "vue.js", price: 95 }
];
class Lesson {
    constructor(data) {
        this.model = data;
    }
    get price() {
        return this.model.price;
    }
    get name() {
        return this.model.name;
    }
    //批量生成对象
    static createBatch(data) {
        return data.map(item => new Lesson(item));
    }
    //最贵的课程
    static MaxPrice(collection) {
        return collection.sort((a, b) => b.price - a.price)[0];
    }
}
const lessons = Lesson.createBatch(data);
console.log(lessons);
console.log(Lesson.MaxPrice(lessons).name);
```

##  访问器

使用访问器可以对对象的属性进行访问控制

### 语法介绍

- 使用访问器可以管控属性，有效的防止属性随意修改
- 访问器就是在函数前加上 `get/set`修饰，操作属性时不需要加函数的扩号，直接用函数名

```js
class User {
    constructor(name) {
        this.data = { name };
    }
    get name() {
        return this.data.name;
    }
    set name(value) {
        if (value.trim() === "") throw new Error("invalid params");
        this.data.name = value;
    }
}
let use = new User("张三");
use.name = "李四";
console.log(use.name);//李四
```

## 访问控制

### public

**`public` 指不受保护的属性，在类的内部与外部都可以访问到**

```js
class User {
    name = "张三";
    constructor(age) {
        this.age = age;
    }
}
let use = new User(18);
console.log(use.name, use.age);//张三 18
```

### protected

**protected是受保护的属性修释，不允许外部直接操作，但可以继承后在类内部访问，有以下几种方式定义**

#### 命名保护

**将属性定义为以 `_` 开始，来告诉使用者这是一个私有属性，请不要在外部使用**

- 外部修改私有属性时可以使用访问器 `setter` 操作
- 但这只是提示，就像吸烟时烟盒上的吸烟有害健康，但还是可以抽的

```js
class Article {
    _sex = "男";
    set host(url) {
        this._sex = url;
    }
    lists() {
        return `${this._sex}`;
    }
}
let article = new Article();
console.log(article.lists()); //男
article.host = "女";
console.log(article.lists()); //女
```

**继承时是可以使用的**

```js
class Common {
    _host = "男";
    set host(hose) {
        this._host = hose;
    }
}
class Article extends Common {
    lists() {
        return `${this._host}/article`;
    }
}
let article = new Article();
console.log(article.lists()); //男/article
article.host = "女";
console.log(article.lists()); //女/article
```

#### Symbol

使用 `Symbol`定义私有访问属性，即在外部通过查看对象结构无法获取的属性

```js
const protecteds = Symbol();
class Common {
    constructor() {
        this[protecteds] = {};
        this[protecteds].sex = "男";
    }
    set sex(sex) {
        this[protecteds].sex = sex;
    }
    get sex() {
        return this[protecteds].sex;
    }
}
class User extends Common {
    constructor(name) {
        super();
        this[protecteds].name = name;
    }
    get name() {
        return this[protecteds].name;
    }
}
let use = new User("张三");
use.sex = "女";
console.log(use.name);//张三
console.log(use[protecteds]);//{sex: '女', name: '张三'}
```

### private

**`private` 指私有属性，只在当前类可以访问到，并且不允许继承使用**

- 为属性或方法名前加 `#` 为声明为私有属性
- 私有属性只能在声明的类中使用

声明私有属性 `#host` 与私有方法 `check` 用于检测用户名

```js
class User {
    //private
    #host = "https://www.baidu.com/";
    constructor(name) {
        this.name = name ;
        this.#check(name);
    }
    set host(url) {
        if (!/^https?:/i.test(url)) {
            throw new Error("非常网址");
        }
        this.#host = url;
    }
    get host() {
        return this.#host;
    }
    #check = () => {
        if (this.name.length <= 5) {
            throw new Error("用户名长度不能小于五位");
        }
        return true;
    };
}
let use = new User("后盾人在线教程");
use.host = "http://www.baidu.com/";
console.log(use.host);//http://www.baidu.com/
```

### 属性保护

保护属性并使用访问器控制

```js
const protecteds = Symbol("protected");
class User {
    constructor(name) {
        this[protecteds] = { name };
    }
    get name() {
        return this[protecteds].name;
    }
    set name(value) {
        if (value.trim() == "") throw new Error("invalid params");
        this[protecteds].name = value;
    }
}
let use = new User("张三");
use.name = "李四";
console.log(use.name);//李四
console.log(Object.keys(use));//[]
```

## 详解继承

### 属性继承

```js
function User(name) {
    this.name = name;
}
function Admin(name) {
    User.call(this, name);
}
let admin = new Admin("张三");
console.log(admin);//Admin{name: '张三'}
```

这就解释了为什么在子类构造函数中要先执行`super`

```js
class User {
    constructor(name) {
        this.name = name;
    }
}
class Admin extends User {
    constructor(name) {
        console.log(name);//张三
        super(name);
    }
}
let admin = new Admin("张三");
console.log(admin);//Admin{name: '张三'}
```

### 继承原理

`class` 继承内部使用原型继承

<img :src="$withBase('/images/proto/04.png')" alt="foo">

```js
class User {
    show() {
        console.log("user.show");
    }
}
class Admin extends User {
    info() {
        this.show();
    }
}
let hd = new Admin();
console.dir(hd);
```

### 方法继承

原生的继承主要是操作原型链，实现起来比较麻烦，使用 `class` 就要简单的多了

- 继承时必须在子类构造函数中调用 super() 执行父类构造函数
- super.show() 执行父类方法

```js
class Person {
    constructor(name) {
        this.name = name;
    }
    show() {
        return `name: ${this.name}`;
    }
}
class User extends Person {
    constructor(name) {
        super(name);
    }
    run() {
        return super.show();
    }
}
const use = new User("张三");
console.dir(use.run());//name: 张三
```

**可以使用 `extends` 继承表达式返回的类**

```js
function controller() {
    return class {
        show() {
            console.log("user.show");
        }
    };
}
class Admin extends controller() {
    info() {
        this.show();
    }
}
let admin = new Admin();
console.dir(admin);//Admin
```

### super

表示从当前原型中执行方法

- super 一直指向当前对象

- 但`this`指向当前对象，结果并不是 `admin`的`name`值

```js
let user = {
    name: "user",
    show() {
        return this.name;
    }
};
let admin = {
    __proto__: user,
    name: "admin",
    show() {
        return this.__proto__.show();
    }
};
console.log(admin.show());//user
```

为了解决以上问题，需要调用父类方法时传递`this`

```js
let user = {
    name: "user",
    show() {
        return this.name;
    }
};
let admin = {
    __proto__: user,
    name: "admin",
    show() {
        return this.__proto__.show.call(this);
    }
};
console.log(admin.show());//admin
```

- 因为始终传递的是当前对象`this` ，造成从 `this` 原型循环调用

为了解决以上问题 `js` 提供了 `super` 关键字

- 使用 `super` 调用时，在所有继承中 `this` 始终为调用对象
- `super` 是用来查找当前对象的原型，而不像上面使用 `this` 查找原型造成死循环
- 也就是说把查询原型方法的事情交给了 `super`，`this` 只是单纯的调用对象在各个继承中使用

```js
let common = {
    show() {
        return this.name;
    }
};
let user = {
    __proto__: common,
    name: "user",
    show() {
        return super.show(this);
    }
};
let admin = {
    __proto__: user,
    name: "admin",
    get() {
        return super.show();
    }
};
console.log(admin.get());//admin
```

*`super` 只能在类或对象的方法中使用，而不能在函数中使用，下面将产生错误*

```js
let user = {
    name: "user",
    show() {
        return this.name;
    }
};
let admin = {
    __proto__: user,
    name: "admin",
    get: function() {
        return super.show();
    }
};
console.log(admin.get()); //Uncaught SyntaxError: 'super' keyword unexpected here
```

###  constructor

`super指调父类引用，在构造函数`constructor`中必须先调用`super()`

- `super()`指调用父类的构造函数
- 必须在`constructor`函数里的`this`调用前执行`super()`

```js
class User {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}
class Admin extends User {
    constructor(name) {
        super(name);
    }
}
let admin = new Admin("张三");
admin.show();//张三
```

**`constructor`中先调用`super`方法的原理**

```js
function Parent(name) {
    this.name = name
}
function User(...args) {
    Parent.apply(this,args)
}
User.constructor = Object.create(User.prototype);
User.prototype.constructor =User;
const use = new User("张三");
console.log(use.name);//张三
```

### 父类方法

使用`super`可以执行父类方法

- 不添加方法是直调用父类构造函数

```js
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Admin extends User {
    constructor(name) {
        super(name);
    }
}
const admin = new Admin("张三");
console.log(admin.getName());//张三
```

通过父类方法获取课程总价

```js
class Controller {
    sum() {
        return this.data.reduce((t, c) => t + c.price, 0);
    }
}
class Lesson extends Controller {
    constructor(lessons) {
        super();
        this.data = lessons;
    }
    info() {
        return {
            totalPrice: super.sum(),
            data: this.data
        };
    }
}
let data = [
    { name: "js", price: 100 },
    { name: "mysql", price: 212 },
    { name: "vue.js", price: 98 }
];
const lesson = new Lesson(data);
console.log(lesson.info());//{totalPrice: 410, data: Array(3)}
```

### 方法覆盖

**子类存在父类同名方法时使用子类方法**

```js
class User {
    constructor(name) {
        this.name = name;
    }
    say() {
        return this.name;
    }
}
class Admin extends User {
    constructor(name) {
        super(name);
    }
    say() {
        return "name：" + super.say();
    }
}
const admin = new Admin("张三");
console.log(admin.say());//name：张三
```

### 静态继承

**静态的属性和方法也是可以被继承使用的**

```js
function User() {}
User.name = "张三";
User.age = function() {
    return 18
};
function Admin() {}
Admin.__proto__ = User;
console.dir(Admin);
console.log(Admin.age());//18
```

使用 `class` 来演示静态继承

```js
class User {
    static age = 18;
    static name() {
        return "张三";
    }
}
class Admin extends User {}
console.dir(Admin);
```

### instanceof

使用 `instanceof` 用于检测，下面是在原型中的分析

```js
function User() {}
function Admin() {}
Admin.prototype = Object.create(User.prototype);
let admin = new Admin();
console.log(admin instanceof Admin); //true
console.log(admin instanceof User); //true

console.log(admin.__proto__ === Admin.prototype);//true
console.log(admin.__proto__.__proto__ === User.prototype);//true
```

下面是递归检测原型的代码，帮助你分析 `instanceof` 的原理

```js
function checkPrototype(obj, constructor) {
    if (!obj.__proto__) return false;
    if (obj.__proto__ == constructor.prototype) return true;
    return checkPrototype(obj.__proto__, constructor);
}
```

`class` 内部实现就是基于原型，所以使用`instanceof` 判断和上面原型是一样的

```js
class User {}
class Admin extends User {}
let admin = new Admin();
console.log(admin instanceof Admin);//true
console.log(admin instanceof User);//true
```

### isPrototypeOf

**使用 `isPrototypeOf` 判断一个对象是否在另一个对象的原型链中**

```js
const a = {};
const b = {
    __proto__: a
};
const c = {
    __proto__: b
};
console.log(a.isPrototypeOf(b)); //true
console.log(a.isPrototypeOf(c)); //true
```

使用 `class` 语法中使用

```js
class User {}
class Admin extends User {}
let admin = new Admin();
console.log(Admin.prototype);//User{constructor: ƒ}
console.log(Admin.prototype.isPrototypeOf(admin));//true
console.log(User.prototype.isPrototypeOf(admin));//true
```

### 继承内置类

使用原型扩展内置类

```js
function Arr(...args) {
    args.forEach(item => this.push(item));
    this.first = function() {
        return this[0];
    };
    this.max = function() {
        return this.data.sort((a, b) => b - a)[0];
    };
}
Arr.prototype = Object.create(Array.prototype);
let arr = new Arr(1, 2, 3);
console.log(arr.first());//1
```

使用 `class`扩展内置类

```js
class NewArr extends Array {
    constructor(...args) {
        super(...args);
    }
    first() {
        return this[0];
    }
    add(value) {
        this.push(value);
    }
    remove(value) {
        let pos = this.findIndex(curValue => {
            return curValue == value;
        });
        this.splice(pos, 1);
    }
}
let arr = new NewArr(5, 3, 2, 1);
console.log(arr.length); //4
console.log(arr.first()); //5

arr.add(4);
console.log(arr.join(",")); //5,3,2,1,4

arr.remove("3");
console.log(arr.join(",")); //5,2,1,4
```

### mixin

`JS`不能实现多继承，如果要使用多个类的方法时可以使用`mixin`混合模式来完成

- `mixin` 类是一个包含许多供其它类使用的方法的类
- `mixin` 类不用来继承做为其它类的父类

```js
const Tool = {
    max(key) {
        return this.data.sort((a, b) => b[key] - a[key])[0];
    }
};

class Lesson {
    constructor(lessons) {
        this.lessons = lessons;
    }
    get data() {
        return this.lessons;
    }
}
Object.assign(Lesson.prototype, Tool);
const data = [
    { name: "js", price: 100 },
    { name: "mysql", price: 212 },
    { name: "vue.js", price: 98 }
];
let lesson = new Lesson(data);
console.log(lesson.max("price"));//{name: 'mysql', price: 212}
```