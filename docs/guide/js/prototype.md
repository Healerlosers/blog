# 原型与继承

## 原型基础

### 原型对象

每个对象都有一个原型`prototype`对象，通过函数创建的对象也将拥有这个原型对象，原型是一个指向对象的指针

- 可以将原型理解为对象的父亲，对象从原型对象基础来的属性
- 原型就是对象除了是某个对象的父亲外没有什么特别之处
- 所有函数的原型默认是`Object`的实例，所以可以使用`toString/toValues/isPrototypeOf`等方法的原因
- 使用原型对象为多个对象共享属性或方法
- 如果对象本身不存在属性或方法将在原型上查找
- 使用原型可以解决，通过构建函数创建对象时复制多个函数造成的内存占用问题
- 原型包含`constructor`属性，指向构造函数
- 对象包含`__proto__`指向他的原型对象

```js
let x = {};
let y = {};
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); //true
```

**创建一个极简对象（纯数据字典对象）没有原型（原型为 null)**

```js
let obj = { name: "张三" };
console.log(obj.hasOwnProperty("name"));//true
let obj1 = Object.create(null, {
    name: {
        value: "李四"
    }
});
console.log(obj1.hasOwnProperty("name")); //Error
//Object.keys是静态方法，不是原型方法所以是可以使用的
console.log(Object.keys(obj1));
```

**函数拥有多个原型，`prototype`用于实例对象使用，`__proto__`用于函数对象使用**

```js
function User() {}
User.__proto__.view = function() {
    console.log("User function view method");
};
User.view();

User.prototype.show = function() {
    console.log("张三");
};
let use = new User();
use.show();
console.log(User.prototype === use.__proto__);//true
```

```js
let obj = new Object();
obj.name = "张三";
Object.prototype.show = function() {
    console.log("my name is zhangsan");
};
obj.show();

function User() {}
let use = new User();
console.log(use);
use.show();
User.show();
```

**构造函数创建对象的原型体现**

- 构造函数拥有原型
- 创建对象时构造函数把原型赋予对象



```js
function User() {}
let use = new User();
console.log(use.__proto__ === User.prototype);//true
```

**使用数组会产生多级继承即原型链**

**Object==>Array==>a**

```js
let arr = [];
console.log(arr);
console.log(arr.__proto__ === Array.prototype);//true
let str = "";
console.log(str.__proto__ === String.prototype);//true
```

**使用`setPrototypeOf` 与 `getPrototypeOf` 获取与设置原型**

```js
let obj = {};
let parent = { name: "parent" };
Object.setPrototypeOf(obj, parent);
console.log(obj);
console.log(Object.getPrototypeOf(obj));//{name: 'parent'}
```

**使用自定义构造函数创建的对象的原型体现**

**Object==>User元对象==>use对象**

```js
function User() {}
let use = new User();
console.log(use);
```

**constructor 存在于 prototype 原型中，用于指向构建函数的引用**

```js
function use() {
    this.show = function() {
        return "use method";
    };
}
const obj = new use(); //true
console.log(obj instanceof use);//true
const obj2 = new obj.constructor();
console.dir(obj2.show()); //use method
```

**使用对象的 `constructor` 创建对象**

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}

function createByObject(obj, ...args) {
    const constructor = Object.getPrototypeOf(obj).constructor;
    return new constructor(...args);
}

let use = new User("张三");
let obj = createByObject(use, "张三", 18);
console.log(obj);//User{name: '张三', age: 18}
```

### 原型链

**通过引用类型的原型，继承另一个引用类型的属性与方法，这就是实现继承的步骤**

<img :src="$withBase('/images/proto/02.png')" alt="原型">

**使用`Object.setPrototypeOf` 可设置对象的原型**

**`Object.getPrototypeOf` 用于获取一个对象的原型**

继承关系为 obj>obj1>obj3。

```js
let obj1 = {
  name: "张三"
};
let obj2 = {
  age: 18
};
let obj3 = {
  sex: "男"
};
//让obj1继承obj2，即设置obj的原型为obj1
Object.setPrototypeOf(obj1, obj2);
Object.setPrototypeOf(obj2, obj3);
console.log(obj1.age);//18
console.log(Object.getPrototypeOf(obj2) === obj3); //true
```

### 原型检测

**instanceof 检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上**

```js
function A() {}
function B() {}
function C() {}

const c = new C();
B.prototype = c;
const b = new B();
A.prototype = b;
const a = new A();

console.dir(a instanceof A); //true
console.dir(a instanceof B); //true
console.dir(a instanceof C); //true
console.dir(b instanceof C); //true
console.dir(c instanceof B); //false
```

**使用`isPrototypeOf`检测一个对象是否是另一个对象的原型链中**

```js
const a = {};
const b = {};
const c = {};

Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);

console.log(b.isPrototypeOf(a)); //true
console.log(c.isPrototypeOf(a)); //true
console.log(c.isPrototypeOf(b)); //true
```

**使用`in` 检测原型链上是否存在属性，使用 `hasOwnProperty` 只检测当前对象**

```js
let a = { age: 18 };
let b = { name: "张三" };
Object.setPrototypeOf(a, b);

console.log("name" in a); //true
console.log(a.hasOwnProperty("name"));//false
console.log(a.hasOwnProperty("age"));//true
```

**使用 `for/in` 遍历时同时会遍历原型上的属性**

```js
let obj = { name: "张三" };
let obj1 = Object.create(obj, {
    age: {
        value: 18,
        enumerable: true
    }
});
for (const key in obj1) {
    console.log(key);  //age name
}
```

**`hasOwnProperty` 方法判断对象是否存在属性，而不会查找原型。所以如果只想遍历对象属性使用以下代码**

```js
let obj = { name: "张三" };
let obj1 = Object.create(obj, {
    age: {
        value: 18,
        enumerable: true
    }
});

for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
        console.log(key);//age
    }
}
```

### 借用原型

**使用 `call` 或 `apply` 可以借用其他原型方法完成功能**

**apply 用数组传参，call需要分别传参**

```js
let obj = {
    data: [1, 2, 3, 4, 5]
};
Object.setPrototypeOf(obj, {
    max: function() {
        return this.data.sort((a, b) => b - a)[0];
    }
});

console.log(obj.max());

let obj1 = {
    lessons: { js: 100, php: 78, node: 78, linux: 125 },
    get data() {
        return Object.values(this.lessons);
    }
};
console.log(obj.__proto__.max.apply(obj1));//125

//优化
let obj = {
    data: [1, 2, 3, 4, 5]
};
console.log(Math.max.apply(null, Object.values(obj.data)));

let obj1 = {
    lessons: { js: 100, php: 78, node: 78, linux: 125 }
};
console.log(Math.max.apply(obj1, Object.values(obj1.lessons)));
```

DOM操作

```js
let btns = document.querySelectorAll("button");
btns = Array.prototype.filter.call(btns, item => {
    return item.hasAttribute("class");
});
```

###  this

**`this` 不受原型继承影响，`this` 指向调用属性时使用的对象**

```js
let obj = {
    name: "张三"
};
let obj1 = {
    name: "李四",
    show() {
        return this.name;
    }
};
obj.__proto__ = obj1;
console.log(obj.show()); //张三
```

## 原型总结

### prototype

函数也是对象也有原型，函数有 `prototype` 属性指向他的原型

为构造函数设置的原型指，当使用构造函数创建对象时把这个原型赋予给这个对象

```js
function User(name) {
    this.name = name;
}
User.prototype = {
    show() {
        return this.name;
    }
};
let use = new User("张三");
console.log(use.show());//张三
```

**函数默认`prototype` 指包含一个属性 `constructor` 的对象，`constructor` 指向当前构造函数**

```js
function User(name) {
    this.name = name;
}
let use = new User("张三");
console.log(use);
console.log(User.prototype.constructor === User); //true
console.log(use.__proto__ === User.prototype); //true

let li = new use.constructor("李四");
console.log(li.__proto__ === use.__proto__); //true
```

**原型中保存引用类型会造成对象共享属性，所以一般只会在原型中定义方法**

```js
function User() {}
User.prototype = {
    lessons: ["JS", "VUE"]
};
const use = new User();
const use1 = new User();

use.lessons.push("CSS");

console.log(use.lessons); //["JS", "VUE", "CSS"]
console.log(use1.lessons); //["JS", "VUE", "CSS"]
```

**为 Object 原型对象添加方法，将影响所有函数**

了解了原型后可以为系统对象添加方法，比如为字符串添加了一截断函数

*不能将系统对象的原型直接赋值*

```js
String.prototype.truncate = function (len = 5) {
    return this.length <= len ? this : this.substr(0, len) + '...';
}
console.log('学习笔记，在线学习'.truncate(4)); //学习笔记...
```

### Object.create

**使用`Object.create`创建一个新对象时使用现有对象做为新对象的原型对象**

使用`Object.create` 设置对象原型

```js
let user = {
    show() {
        return this.name;
    }
};

let use = Object.create(user);
use.name = "张三";
console.log(use.show());//张三
```

设置使用第二个参数设置新对象的属性

```js
let user = {
    show() {
        return this.name;
    }
};
let obj = Object.create(user, {
    name: {
        value: "张三"
    }
});
console.log(obj);//{name: '张三'}
console.log(obj.show());//张三
```

### __proto__

在实例化对象上存在`__proto__`记录了原型，所以可以通过对象访问到原型的属性或方法

- `__proto__`不是对象属性，理解为`prototype`的`getter/setter`实现，他是一个`非标准定义`
- `__proto__`内部使用`getter/setter`控制值，所以只允许对象或null
- 建议使用`Object.setPrototypeOf`与`Object.getPrototypeOf`替代`__proto__`

修改对象的 `__proto__` 是不会成功的，因为`_proto__` 内部使用`getter/setter` 控制值，所以只允许对象或 null

```js
let obj = {};
obj.__proto__ = "张三";
console.log(obj);//{}
```

*下面定义的`__proto__` 就会成功，因为这是一个极简对象，没有原型对象所以不会影响`__proto__`赋值*

```js
let obj = Object.create(null);
obj.__proto__ = "张三";
console.log(obj); //{__proto__: "张三"}
```

通过改变对象的 `__proto__` 原型对象来实现继承，继承可以实现多层

```js
let obj = {
    name: "张三"
};
let obj1 = {
    show() {
        return this.name;
    }
};
let obj2 = {
    handle() {
        return `name: ${this.name}`;
    }
};
obj1.__proto__ = obj2;
obj.__proto__ = obj1;
console.log(obj.show());//张三
console.log(obj.handle());//name:张三
console.log(obj);//{name: '张三'}
```

构造函数中的 `__proto__` 使用

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.show = function () {
    return `姓名:${this.name}，年龄:${this.age}`;
};
let use = new User('张三', 18);
let use1 = new User('李四', 20);
console.log(use.__proto__ === User.prototype); //true
console.log(use1.__proto__ === User.prototype); //true
```

**可以使用 `__proto__` 或 `Object.setPrototypeOf` 设置对象的原型，使用`Object.getProttoeypOf` 获取对象原型**

```js
function Person() {
    this.getName = function() {
        return this.name;
    };
}
function User(name, age) {
    this.name = name;
    this.age = age;
}
let use = new User("张三", 18);
Object.setPrototypeOf(use, new Person());
console.log(use);
console.log(use.getName()); //张三
```

**对象设置属性，只是修改对象属性并不会修改原型属性，使用`hasOwnProperty` 判断对象本身是否含有属性并不会检测原型**

```js
function User() {}
const use = new User();
const use1 = new User();

use.name = "张三";
console.log(use.name);//张三
console.log(use.hasOwnProperty("name"));//true

//修改原型属性后
use.__proto__.name = "李四";
console.log(use1.name);//李四

//删除对象属性后
delete use.name;
console.log(use.hasOwnProperty("name"));//false
console.log(use.name);//李四
```

**使用 `in` 会检测原型与对象，而 `hasOwnProperty` 只检测对象，所以结合后可判断属性是否在原型中**

```js
function User() {}
User.prototype.name = "张三";
const use = new User();
//in会在原型中检测
console.log("name" in use);//true
//hasOwnProperty 检测对象属性
console.log(use.hasOwnProperty("name"));//false
```

### 使用建议

1. `prototype`构造函数的原型属性
2. `Object.create`创建对象时指定原型
3. `__proto__`声明自定义的非标准属性设置原型，解决之前通过`Object.create`定义原型，而没提供获取方法
4. `Object.setPrototypeOf`设置对象原型
5. 使用`prototype`更改构造函数，使用`Object.setPrototypeOf`与`Object.getPrototypeOf`获取或设置原型

## 构造函数

### 原型属性

构造函数是被`new`时把构造函数的原型（prototype）赋值给新对象，如果对象中存在属性将时用对象属性，不在原型上查找方法

- 构造函数只会产生一个原型对象

```js
function Func() {
    this.show = function() {
        return "show in object";
    };
}
Func.prototype.show = function() {
    return "show in prototype";
};
const obj = new Func();
console.log(obj.show());//show in object
```

对象的原型引用构造函数的原型对象，是在创建对象时确定的，当构造函数原型对象改变时会影响后面的实例对象

```js
function Func() {}
Func.prototype.name = "张三";
const obj1 = new Func();
console.log(obj1.name); //张三

Func.prototype = {
    name: "李四"
};
const obj2 = new Func();
console.dir(obj2.name); //李四
```

### constructor

构造函数的原型中包含属性`constructor`指向该构造函数

```js
function User(name) {
    this.name = name;
}
let use = new User("张三");
let use1 = new use.constructor("李四");
console.log(use1);//User{name: '李四'}
```

以下代码直接设置了构造函数的原型将造成 `constructor` 丢失

```js
function User(name) {
    this.name = name;
}
User.prototype.show = {
    show: function() {}
};

let use1 = new User("张三");
let use2 = new use1.constructor("李四");
console.log(use2); //String {"李四"}
```

正确的做法是要保证原型中的 `constructor`指向构造函数

```js
function User(name) {
    this.name = name;
}
User.prototype = {
    constructor: User,
    show: function() {}
};

let use1 = new User("张三");
let use2 = new use1.constructor("李四");
console.log(use2);//User{name: '李四'}
```

### 使用优化

使用构造函数会产生函数复制造成内存占用，及函数不能共享的问题

```js
function User(name) {
    this.name = name;
    this.get = function() {
        return this.name;
    };
}
let use1 = new User("张三");
let use2 = new User("李四");
console.log(use1.get === use2.get); //false
```

通过原型定义方法不会产生函数复制

```js
function User(name) {
    this.name = name;
}
User.prototype.get = function() {
    return "name:" + this.name;
};
let use1 = new User("张三");

let use2 = new User("李四");

console.log(use1.get === use2.get); //true
//通过修改原型方法会影响所有对象调用，因为方法是共用的
use1.__proto__.get = function() {
    return "姓名：" + this.name;
};
console.log(use1.get());
console.log(use2.get());
```

使用原型为多个实例共享属性

```js
function User(name, age) {
    this.name = name;
    this.age = age;
    this.show = () => {
        return `你的${this.site}:${this.name}，年龄:${this.age}`;
    }
}
User.prototype.site = '姓名';
let use1 = new User('张三', 18);
let use2 = new User('李四', 20);

console.log(use1.show()); //你的姓名:张三，年龄:18
console.log(use2.show()); //你的姓名:李四，年龄:20
```

将方法定义在原型上为对象共享，解决通过构造函数创建对象函数复制的内存占用问题

```js
function User(name) {
    this.name = name;
}
User.prototype.get = function () {
    return '姓名：' + this.name;
}
let use = new User('小明');

let use1 = new User('王五');
console.log(use.get === use1.get); //true
//通过修改原型方法会影响所有对象调用，因为方法是共用的
use.__proto__.get = function () {
    return 'name:' + this.name;
}
console.log(use.get());
console.log(use.get());
console.log(use1.get());
```

使用`Object.assign`一次设置原型方法来复用

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}
Object.assign(User.prototype, {
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    }
});
let use = new User('张三', 18);
let use1 = new User('李四', 20);
console.log(use.getName()); //张三
console.log(use.__proto__)
```

### 体验继承

为 Stu 更改了原型为User 的实例对象，lisi是通过构造函数Stu创建的实例对象

```js
function User() {}
User.prototype.getName = function() {
    return this.name;
};

function Use(name) {
    this.name = name;
}
Use.prototype = new User();
const use = new Use("张三");
console.log(use.__proto__);//User{}
console.log(use.getName());//张三
```

##  继承与多态

当对象中没使用的属性时，JS 会从原型上获取这就是继承在 JavaScript 中的实现

### 继承实现

使用`Object.create` 创建对象，做为`Admin、Member`的原型对象来实现继承

<img :src="$withBase('/images/proto/03.png')" alt="原型">

```js
function User() {}
User.prototype.getUserName = function() {};

function Admin() {}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function() {};

function Member() {}
Member.prototype = Object.create(User.prototype);
Member.prototype.email = function() {};

console.log(new Admin());
console.log(new Member());
```

*不能使用以下方式操作，因为这样会改变 User 的原型方法，这不是继承，这是改变原型*

```js
function User() {}
User.prototype.getUserName = function() {};

function Admin() {}
Admin.prototype = User.prototype;
Admin.prototype.role = function() {};
```

###  构造函数

有多种方式通过构造函数创建对象

```js
function Admin() {}
console.log(Admin === Admin.prototype.constructor); //true

let admin = new Admin.prototype.constructor();
console.log(admin);

let obj = new Admin();
console.log(obj);
```

**因为有时根据得到的对象获取构造函数，然后再创建新对象所以需要保证构造函数存在，但如果直接设置了 `Admin.prototype` 属性会造成`constructor`丢失，所以需要再次设置`constructor`值**

```js
function User() {}
function Admin() {}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function() {};

let admin = new Admin();
console.log(admin.constructor); //constructor丢失，返回User构造函数

Admin.prototype.constructor = Admin;

let obj = new Admin();
console.log(obj.constructor); //正确返回Admin构造函数  

//现在可以通过对象获取构造函数来创建新对象了
console.log(new obj.constructor());//Admin{}
```

**使用`Object.defineProperty`定义来禁止遍历 constructor 属性**

```js
function User() {}
function Admin(name) {
    this.name = name;
}

Admin.prototype = Object.create(User.prototype);

Object.defineProperty(Admin.prototype, "constructor", {
    value: Admin,
    enumerable: false //禁止遍历
});

let admin = new Admin("后盾人");
for (const key in admin) {
    console.log(key);//name
}
```

完全重写构建函数原型

```js
function User() {}
const use = new User();
User.prototype = {
    show() {
        return "prototype show";
    }
};

const use1 = new User();
console.log(use1.show());//prototype show
console.log(use.show()); // use.show is not a function
```

### 方法重写

下而展示的是子类需要重写父类方法的技巧

```js
function Person() {}
Person.prototype.getName = function() {
    console.log("parent method");
};

function User(name) {}
User.prototype = Object.create(Person.prototype);
User.prototype.constructor = User;

User.prototype.getName = function() {
    //调用父级同名方法
    Person.prototype.getName.call(this);
    console.log("child method");
};
let use = new User();
use.getName();
```

##  深挖继承

继承是为了复用代码，继承的本质是将原型指向到另一个对象

### 构造函数

用父类构造函数完成对象的属性初始化，但像下面这样使用是不会成功的。因为此时 `this` 指向了 window，无法为当前对象声明属性

```js
function User(name) {
  this.name = name;
  console.log(this);// User{name: '张三'}
}
User.prototype.getUserName = function() {
  return this.name;
};

function Admin(name) {
  new User(name);
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function() {};

let obj = new Admin("张三");
console.log(obj.getUserName()); //undefined
```

**解决上面的问题是使用 `call/apply` 为每个生成的对象设置属性**

```js
function User(name) {
  this.name = name;
  console.log(this); // Admin
}
User.prototype.getUserName = function() {
  return this.name;
};

function Admin(name) {
  User.call(this, name);
}
Admin.prototype = Object.create(User.prototype);

let use = new Admin("张三");
console.log(use.getUserName()); //张三
```

### 原型工厂

原型工厂是将继承的过程封装，使用继承业务简单化

```js
function extend(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
}

function Access() {}
function User() {}
function Admin() {}
function Member() {}

extend(User, Access); //User继承Access
extend(Admin, User); //Admin继承User
extend(Member, Access); //Member继承Access

Access.prototype.rules = function() {};
User.prototype.getName = function() {};

console.log(new Admin()); // 继承关系: Admin>User>Access>Object
console.log(new Member()); //继承关系：Member>Access>Object
```

### 对象工厂

在原型继承基础上，将对象的生成使用函数完成，并在函数内部为对象添加属性或方法

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.show = function() {
    console.log(this.name, this.age);
};

function Admin(name, age) {
    let instance = Object.create(User.prototype);
    User.call(instance, name, age);
    instance.role=function(){
        console.log('admin.role');
    }
    return instance;
}
let admin = Admin("张三", 19);
admin.show();//张三 19

function member(name, age) {
    let instance = Object.create(User.prototype);
    User.call(instance, name, age);
    return instance;
}
let use = member("李四", 28);
use.show();//李四 28
```

###  Mixin 模式

`jS`不能实现多继承，如果要使用多个类的方法剋使用`mixin`混合模式来完成

- `mixin`类是一个包含许多供其它类使用的类
- `mixin`类不用来继承做为其他类的父类

示例中 `Admin`需要使用 `Request.prototype` 与 `Credit` 的功能，因为`JS` 是单继承，我们不得不将无关的类连接在一下，显然下面的代码实现并不佳

```js
function extend(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
}
function Credit() {}
function Request() {}
function User(name, age) {
    this.name = name;
    this.age = age;
}
extend(Request, Credit);
extend(User, Request);
Credit.prototype.total = function() {
    console.log("统计积分");
};
Request.prototype.ajax = function() {
    console.log("请求后台");
};
User.prototype.show = function() {
    console.log(this.name, this.age);
};
function Admin(...args) {
    User.apply(this, args);
}
extend(Admin, User);
let admin = new Admin("张三", 18);
admin.show();//张三 18
admin.total(); //统计积分
admin.ajax(); //请求后台
```

**下面分拆功能使用 Mixin 实现多继承，使用代码结构更清晰。只让 `Admin` 继承 `User` 原型**

```js
function extend(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
}
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.show = function() {
    console.log(this.name, this.age);
};
const Credit = {
    total() {
        console.log("统计积分");
    }
};
const Request = {
    ajax() {
        console.log("请求后台");
    }
};

function Admin(...args) {
    User.apply(this, args);
}
extend(Admin, User);
Object.assign(Admin.prototype, Request, Credit);
let admin = new Admin("张三", 18);
admin.show();//张三 18
admin.total(); //统计积分
admin.ajax(); //请求后台
```

`mixin` 类也可以继承其他类，比如下面的 `Create` 类获取积分要请求后台，就需要继承 `Request` 来完成。

- `super` 是在 `mixin` 类的原型中查找，而不是在 `User` 原型中

```js
function extend(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
}
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.show = function() {
    console.log(this.name, this.age);
};
const Request = {
    ajax() {
        return "请求后台";
    }
};
const Credit = {
    __proto__: Request,
    total() {
        console.log(super.ajax() + ",统计积分");
    }
};

function Admin(...args) {
    User.apply(this, args);
}
extend(Admin, User);
Object.assign(Admin.prototype, Request, Credit);
let admin = new Admin("张三", 18);
admin.show();//张三 18
admin.total(); //统计积分
admin.ajax(); //请求后台
```