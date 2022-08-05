# 对象

## 基础

对象是包括属性与方法的数据类型，JS 中大部分类型都是对象如 `String/Number/Math/RegExp/Date` 等

**面向过程编程**

```js
let name = "张三";
let grade = [
    { lesson: "js", score: 80 },
    { lesson: "mysql", score: 90 }
];
function average(grade, name) {
    const total = grade.reduce((t, a) => t + a.score, 0);
    return name + ":" + total / grade.length + "分";
}
console.log(average(grade, name));//张三:85分
```

**面向对象编程**

使用对象编程的代码结构清晰，也减少了函数的参数传递，也不用担心函数名的覆盖

```js
let user = {
    name: "张三",
    grade: [
        { lesson: "js", score: 99 },
        { lesson: "mysql", score: 85 }
    ],
    average() {
        const total = this.grade.reduce((t, a) => t + a.score, 0);
        return this.name + ":" + total / this.grade.length + "分";
    }
};
console.log(user.average());//张三:92分
```

### OOP

- 对象是属性和方法的集合即封装
- 将复杂功能隐藏在内部，之开放给外部少量方法，更改对象内部的复杂逻辑不会对外部调用造成影响即抽象
- 基础是通过代码复用减少拥冗余代码
- 根据不同形态的对象产生不同结果即多态

### 基本声明

使用字面量形式声明对象是最简单的方式

```js
let obj = {
    name: '张三',
    get:function() {
        return this.name;
    }
}
console.log(obj.get()); //张三
```

属性与方法简写

```js
let name = "张三";
let obj = {
    name,
    get() {
        return this.name;
    }
};
console.log(obj.get()); //张三
```

其实字面量形式在系统内部也是使用构造函数 `new Object`创建的

```js
let obj = {};
let obj1 = new Object();
console.log(obj, obj1);//{} {}
console.log(obj.constructor);//Object() { [native code] }
console.log(obj1.constructor);//Object() { [native code] }
```

### 操作属性

**使用点语法获取**

```js
let user = {
    name: "张三"
};
console.log(user.name);//张三
```

**使用`[]` 获取**

```js
console.log(user["name"]);
```

**使用`.`操作属性更简洁，`[]`主要用于通过变量定义属性的场景**

```js
let user = {
    name: "张三"
};
let property = "name";
console.log(user[property]);//张三
```

**如果属性名不是合法变量名就必须使用扩号的形式了**

```js
let user = {};
user["my-age"] = 28;
console.log(user["my-age"]);//28
```

**对象和方法的属性可以动态的添加或删除**

```js
const obj = {
    name: "张三"
};
obj.age = "10";
obj.show = function() {
    return `${this.name}已经${this.age}岁了`;
};
console.log(obj.show());
console.log(obj);//{name: '张三', age: '10', show: ƒ}

delete obj.show;
delete obj.age;

console.log(obj);//{name: '张三'}
console.log(obj.age); //undefined
```

### 对象方法

```js
let lisi = {
    name: "李四",
    age: 22,
    grade: {
        math: 99,
        english: 67
    },
    //平均成绩
    avgGrade: function() {
        let total = 0;
        for (const key in this.grade) {
            total += this.grade[key];
        }
        return total / this.propertyCount("grade");
    },
    //获取属性数量
    propertyCount: function(property) {
        let count = 0;
        for (const key in this[property]) count++;
        return count;
    }
};
console.log(lisi.avgGrade());//83
```

> 一个学生需要手动创建一个对象，这显然不实际的，构造函数就可以解决这个问题

### 引用特性

对象和函数、数组一样是引用类型，即复制只会复制引用地址

```js
let obj1 = { name: "张三" };
let obj2 = obj1;
obj2.name = "李四";
console.log(obj1.name); //李四
```

对象做为函数参数使用时也不会产生完全赋值，内外共用一个对象

```js
let user = { age: 22 };
function func(user) {
    user.age += 10;
}
func(user);
console.log(user.age); //32
```

比较是对内存地址的比较所以使用 `==` 或 `===` 一样

```js
let ob1 = {};
let obj2 = ob1;
let obj3 = {};
console.log(ob1 === obj2); //true
console.log(ob1 === obj2); //true
console.log(ob1 === obj3); //false
```

###  this

**`this` 指当前对象的引用，始终建议在代码内部使用`this` 而不要使用对象名，不同对象的 this 只指向当前对象**

- 删除了`obj` 变量，但在函数体内还在使用`obj`变量造成错误
- 使用 `this` 后始终指向到引用地址，就不会有这个问题

```js
let obj = {
    name: "张三",
    show() {
        return obj.name;
    }
};
let func = obj;
obj = null;
console.log(func);//{name: '张三', show: ƒ}
console.log(func.show()); //Cannot read properties of null (reading 'name')
```

**改用`this` 后一切正常**

```js
let obj = {
    name: "张三",
    show() {
        return this.name;
    }
};
let func = obj;
obj = null;
console.log(func.show()); //张三
```

### 展开语法

使用`...`可以展示对象的结构

```js
let obj1 = { name: "张三", age: 18 };
let obj2 = { ...obj1, site: "北京" };
console.log(obj2);//{name: '张三', age: 18, site: '北京'}
```

## 对象转换

**对象直接参与计算时，系统会根据计算的场景在 `string/number/default` 间转换**

- 如果声明需要字符串类型，调用顺序为 `toString > valueOf`

- 如果场景需要数值类型，调用顺序为 `valueOf > toString`

- 声明不确定时使用 `default` ，大部分对象的 `default` 会当数值使用

```js
//下面的数值对象会在数学运算时转换为 number
let num = new Number(1);
console.log(num + 3); //4
```

如果参数字符串运长时会转换为 `string`

```js
let num = new Number(1);
console.log(num + "3"); //13
```

下面当不确定转换声明时使用 `default` ，大部分`default`转换使用 `number` 转换

```js
let num = new Number(1);
console.log(num == "1"); //true
console.log(num === "1"); //false
```

###  Symbol.toPrimitive

**内部自定义`Symbol.toPrimitive`方法用来处理所有的转换场景**

```js
let obj = {
    num: 1,
    [Symbol.toPrimitive]: function() {
        return this.num;
    }
};
console.log(obj + 3); //4
```

### valueOf/toString

**可以自定义`valueOf` 与 `toString` 方法用来转换，转换并不限制返回类型**

```js
let obj = {
    name: "李四",
    num: 1,
    valueOf: function() {
        console.log("valueOf");
        return this.num;
    },
    toString: function() {
        console.log("toString");
        return this.name;
    }
};
console.log(obj + 3); //4
console.log(`${obj}张三`); //李四张三
```

## 解构赋值

**解构是一种更简洁的赋值特性，可以理解为分解一个数据的结构**

- 建设使用 `var/let/const` 声明

### 基本使用

```js
//对象使用
let info = {name:'张三',age:'18'};
let {name:n,url:u} = info
console.log(n); // 张三

//如果属性名与变量相同可以省略属性定义
let {name,url} = {name:'张三',age:'18'};
console.log(name); // 张三
```

函数返回值直接解构到变量

```js
function func() {
    return {
        name: '张三',
        age: 18
    };
}
let {name: n,url: u} = func();
console.log(n);//张三
```

函数传参

```js
function func({ name, age }) {
    console.log(name, age); //张三 18
}
func({ name: "张三", age: 18 });
```

### 严格模式

非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明

```js
//严格模式下报错
({name,age} = {name:'张三',age:18});
console.log(name, age);//张三 18
```

还是建议使用`let`等赋值声明

```js
let { name, age } = { name: "张三", age: 18};
console.log(name, age);//张三 18
```

### 简洁定义

如果属性名与赋值的变量名相同可以更简洁

```js
let obj = { name: "张三",age: 18 };
let { name, age } = obj;
console.log(name); //张三
```

只赋值部分变量

```js
let [,age]=['张三',18];
console.log(age);//18
let {name}= {name:'张三',age:18};
console.log(name); //张三
```

可以直接使用变量赋值对象属性

```js
let name = "张三",age = 18;
//标准写法如下
let obj = { name:name, age:age };
console.log(obj);  //{name: '张三', age: 18}

//如果属性和值变量同名可以写成以下简写形式
let opt = { name, age };
console.log(opt); //{name: '张三', age: 18}
```

### 嵌套解构

```js
const obj = {
    name:'张三',
    lessons:{
        title:'JS'
    }
}
const {name,lessons:{title}}  = obj;
console.log(name,title); //张三 JS
```

### 默认值

为变量设置默认值

```js
let [name, age = '18'] = ['张三'];
console.log(age); //18
let {name,url,user='李四'}= {name:'张三',sex:'男'};
console.log(name,user);//李四
```

使用默认值特性可以方便的对参数预设

```js
function createElement(options) {
    let {
        width = '200px',
        height = '100px',
        backgroundColor = 'red'
    } = options;

    const h2 = document.createElement('h2');
    h2.style.width = width;
    h2.style.height = height;
    h2.style.backgroundColor = backgroundColor;
    document.body.appendChild(h2);
}
createElement({
    backgroundColor: 'green'
});
```

### 函数参数

```js
function func([a, b]) {
    console.log(a, b);
}
func(['张三',18]);
```

对象参数使用方法

```js
function func({name,age,user='王五'}) {
    console.log(name,age,user);
}
func({name:'张三','age':16}); //张三 16 王五
```

对象解构传参

```js
function user(name, { sex, age } = {}) {
    console.log(name, sex, age); //张三 男 18
}
user("张三", { sex: "男", age: 18 });
```

##  属性管理

### 添加属性

```js
let obj = {name: "张三"};
obj.age = 28
console.log(obj);//{name: '张三', age: 28}
```

### 删除属性

**使用`delete` 可以删除属性**

```js
let obj = {name: "张三"};
obj.age = 28
delete obj.name;
console.log(obj);//{age: 28}
```

### 检测属性

**`hasOwnProperty`检测对象自身是否包含指定的属性，不检测原型链上继承的属性**

```js
let obj = { name: '张三'};
console.log(obj.hasOwnProperty('name')); //true

//数组
let arr = ["张三"];
console.log(arr);
console.log(arr.hasOwnProperty("length")); //true
console.log(arr.hasOwnProperty("concat")); //false
console.log("concat" in arr); //true
```

**使用 `in` 可以在原型对象上检测**

**`setPrototypeOf`设置原型**

```js
let obj = {name: "张三"};
let obj1 = {
    age: 18
};
//设置hd为obj的新原型
Object.setPrototypeOf(obj, obj1);
console.log(obj);//{name: '张三'}
console.log("age" in obj); //true
console.log(obj.hasOwnProperty("sex")); //false
```

### getOwnPropertyNames

**使用 `Object.getOwnPropertyNames` 可以获取对象的属性名集合**

```js
let obj = { name: '张三', age: 18 }
const names = Object.getOwnPropertyNames(obj)
console.log(names)//(2)['name', 'age']
```

### assign

**使用`jQuery.extend` 等方法设置属性，现在可以使用 `Object.assign` 静态方法**

从一个或多个对象复制属性

```js
let obj = { a: 1, b: 2 };
obj = Object.assign(obj, { f: 1,a:2 }, { m: 9 });
console.log(obj); //{a: 2, b: 2, f: 1, m: 9}
```

### 计算属性

对象属性可以通过表达式计算定义，这在动态设置属性或执行属性方法时很好用

```js
let id = 0;
const user = {
    [`id-${id++}`]: id,
    [`id-${id++}`]: id,
    [`id-${id++}`]: id
};
console.log(user);//{id-0: 1, id-1: 2, id-2: 3}
```

### 传值操作

对象是引用类型赋值是传址操作

```js
let user = {
    name: '张三'
};
let obj = {
    stu: user
};
obj.stu.name = '李四';
console.log(user.name);//李四
```

## 遍历对象

使用系统提供的 API 可以方便获取对象属性与值

```js
const obj = {
    name: "张三",
    age: 18
};
console.log(Object.keys(obj)); //["name", "age"]
console.log(Object.values(obj)); //["张三", 18]
console.table(Object.entries(obj)); //[["name","张三"],["age",18]]
```

### for/in

```js
const obj = {
    name: "张三",
    age: 18
};
for (let key in obj) {
    console.log(key, obj[key]); //name 张三   age 18
}
```

### for/of

`for/of`用于遍历迭代对象，不能直接操作对象。但`Object`对象的`keys/`方法返回的是迭代对象

```js
const obj = {
    name: "张三",
    age: 18
};
for (const key of Object.keys(obj)) {
    console.log(key);//name age
}
```

获取所有对象属性

```js
const obj = {
    name: "张三",
    age: 18
};
for (const key of Object.values(obj)) {
    console.log(key); //张三 18
}
```

同时获取属性名与值

```js
const obj = {
    name: "张三",
    age: 18
};
for (const array of Object.entries(obj)) {
    console.log(array);//(2)['name', '张三']  ['age', 18]
}
```

使用扩展语法同时获取属性名与值

```js
const obj = {
    name: "张三",
    age: 18
};
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
    //name 张三
    //age 18
}
```

## 对象拷贝

对象赋值时复制的内存地址，所以一个对象的改变直接影响另一个

```js
let obj = {
    name: '张三',
    user: {
        name: '李四'
    }
}
let a = obj;
let b = obj;
a.name = '王五';
console.log(b.name); //王五
```

### 浅拷贝

**使用`for/in`执行对象拷贝**

```js
let obj = {name: "张三"};
let obj1 = {};
for (const key in obj) {
    obj1[key] = obj[key];
}

obj1.name = "李四";
console.log(obj1);//{name: '李四'}
console.log(obj);//{name: '张三'}
```

**`Object.assign` 函数可简单的实现浅拷贝，它是将两个对象的属性叠加后面对象属性会覆盖前面对象同名属性**

```js
let user = {
    name: '张三'
};
let obj = {
    stu: Object.assign({}, user)
};
obj.stu.name = '李四';
console.log(obj.stu.name);//李四
console.log(user.name);//张三
```

**使用展示语法也可以实现浅拷贝**

```js
let obj = {
    name: "张三"
};
let obj1 = { ...obj };
obj1.name = "李四";
console.log(obj1);//{name: '李四'}
console.log(obj);//{name: '张三'}
```

###  深拷贝

浅拷贝不会将深层的数据复制

```js
let obj = {
    name: '张三',
    user: {
        name: '李四'
    }
}
let a = obj;
let b = obj;
function copy(object) {
    let obj = {}
    for (const key in object) {
        obj[key] = object[key];
    }
    return obj;
}
let newObj = copy(obj);
newObj.name = '李四';
newObj.user.name = '王五';
console.log(newObj);
//name: "李四" user: {name: '王五'}
console.log(obj);
//name: "张三" user: {name: '王五'}
```

**是完全的复制一个对象，两个对象是完全独立的对象**

```js
let obj = {
    name: "张三",
    user: {
        name: "李四"
    },
    data: []
};
function copy(object) {
    let obj = object instanceof Array ? [] : {};
    for (const [k, v] of Object.entries(object)) {
        obj[k] = typeof v == "object" ? copy(v) : v;
    }
    return obj;
}
let newObj = copy(obj);
newObj.data.push("王五");
console.log(obj);
console.log(newObj);
```

## 构建函数

对象可以通过内置或自定义的构造函数创建

### 工厂函数

在函数中返回对象的函数称为工厂函数，工厂函数有以下优点

- 减少重复创建相同类型对象的代码
- 修改工厂函数的方法影响所有同类对象

使用字面量创建对象需要复制属性与方法结构

```js
const obj1 = {
    name: "张三",
    show() {
        console.log(this.name);
    }
};
const obj2 = {
    name: "李四",
    show() {
        console.log(this.name);
    }
};
```

使用工厂函数可以简化这个过程

```js
function stu(name) {
    return {
        name,
        show() {
            console.log(this.name);
        }
    };
}
const lisi = stu("李四");
lisi.show();
const zs = stu("张三");
zs.show();
```

### 构造函数

和工厂函数相似构造函数也用于创建对象，它的上下文为新的对象实例

- 构造函数名每个单词首字母大写即`Pascal` 命名规范
- `this`指当前创建的对象
- 不需要返回`this`系统会自动完成
- 需要使用`new`关键词生成对象

```js
function Student(name) {
    this.name = name;
    this.show = function() {
        console.log(this.name);
    };
    //不需要返回，系统会自动返回
    // return this;
}
const lisi = new Student("李四");
lisi.show();//李四
```

如果构造函数返回对象，实例化后的对象将是此对象

```js
function ArrayObject(...values) {
    const arr = new Array();
    arr.push.apply(arr, values);
    arr.string = function(sym = "|") {
        return this.join(sym);
    };
    return arr;
}
const array = new ArrayObject(1, 2, 3);
console.log(array);//[1, 2, 3, string: ƒ]
console.log(array.string("-"));//1-2-3
```

### 严格模式

在严格模式下方法中的`this`值为 undefined，这是为了防止无意的修改 window 对象

### 内置构造

```js
//JS 中大部分数据类型都是通过构造函数创建的
const num = new Number(99);
console.log(num.valueOf());//99

const string = new String("张三");
console.log(string.valueOf());//张三

const boolean = new Boolean(true);
console.log(boolean.valueOf());//true

const date = new Date();
console.log(date.valueOf() * 1);

const regexp = new RegExp("\\d+");
console.log(regexp.test(99));//true

let obj = new Object();
obj.name = "李四";
console.log(obj);//{name: '李四'}
```

字面量创建的对象，内部也是调用了`Object`构造函数

```js
const obj = {
    name: "张三"
};
console.log(obj.constructor); //ƒ Object() { [native code] }
//下面是使用构造函数创建对象
const obj1 = new Object();
obj1.title = "VUE";
console.log(obj1);
```

### 对象函数

```js
//在JS中函数也是一个对象
function func(name) {}
console.log(func.toString());
console.log(func.length);//1
```

函数是由系统内置的 `Function` 构造函数创建的

```js
function func(name) {}
console.log(func.constructor);
```

```js
const User = new Function(`name`,`
    this.name = name;
    this.show = function() {
    return this.name;	
};
`);
const lisi = new User("李四");
console.log(lisi.show());//李四
```

## 抽象特性

将复杂功能隐藏在内部，只开放给外部少量方法，更改对象内部的复杂逻辑不会对外部调用造成影响即抽象

## 属性特征

JS 中可以对属性的访问特性进行控制

### 查看特征

使用 `Object.getOwnPropertyDescriptor`查看对象属性的描述

```js
const user = {
  name: "张三",
  age: 18
};
let desc = Object.getOwnPropertyDescriptor(user, "name");
console.log(JSON.stringify(desc, null, 2));
/*{
  "value": "张三",
  "writable": true,
  "enumerable": true,
  "configurable": true
}*/
```

**属性包括以下四种特性**

| 特性         | 说明                                                    | 默认值    |
| ------------ | ------------------------------------------------------- | --------- |
| configurable | 能否使用 delete、能否需改属性特性、或能否修改访问器属性 | true      |
| enumerable   | 对象属性是否可通过 for-in 循环，或 Object.keys() 读取   | true      |
| writable     | 对象属性是否可修改                                      | true      |
| value        | 对象属性的默认值                                        | undefined |

### 设置特征

可使用`Object.defineProperty` 方法修改属性特性，通过下面的设置属性 name 将不能被遍历、删除、修改

```js
"use strict";
const user = {
    name: "张三"
};
Object.defineProperty(user, "name", {
    value: "李四",
    writable: false,
    enumerable: false,
    configurable: false
});

//测试
// 不允许修改
user.name = "张三"; //Error

// 不能遍历
console.log(Object.keys(user));

//不允许删除
delete user.name;
console.log(user);

//不允许配置
Object.defineProperty(user, "name", {
    value: "李四",
    writable: true,
    enumerable: false,
    configurable: false
});
```

使用 `Object.defineProperties` 可以一次设置多个属性

```js
"use strict";
let user = {};
Object.defineProperties(user, {
    name: { value: "张三", writable: false },
    age: { value: 18 }
});
console.log(user);
user.name = "李四"; //TypeError
```

### 禁止添加

**`Object.preventExtensions` 禁止向对象添加属性**

```js
"use strict"
const user = {
    name: "张三"
};
Object.preventExtensions(user);
user.age = 18; //Error
```

**`Object.isExtensible` 判断是否能向对象中添加属性**

```js
"use strict";
const user = {
    name: "张三"
};
Object.preventExtensions(user);
console.log(Object.isExtensible(user)); //false
```

### 封闭对象

**Object.seal()`方法封闭一个对象，阻止添加新属性并将所有现有属性标记为 `configurable: false**

**Object.isSealed` 如果对象是密封的则返回 `true`，属性都具有 `configurable: false**

```js
const user = {
    name: "张三",
    age: 18
};
Object.seal(user);
console.log(Object.isSealed(user));//true
delete user.name; //Error

const user = {
    name: "张三"
};
Object.seal(user);
console.log(Object.isSealed(user)); //true
```

### 冻结对象

**Object.freeze` 冻结对象后不允许添加、删除、修改属性，writable、configurable 都标记为`false**

```js
const user = {
    name: "张三"
};
Object.freeze(user);
user.name = "李四"; //Error
```

**`Object.isFrozen()`方法判断一个对象是否被冻结**

```js
const user = {
  name: "张三"
};
Object.freeze(user);
console.log(Object.isFrozen(user));//true
```

## 属性访问器

getter 方法用于获得属性值，setter 方法用于设置属性，这是 JS 提供的存取器特性即使用函数来管理属性

- 用于避免错误的赋值
- 需要动态监测值的改变
- 属性只能在访问器和普通属性任选其一，不能共同存在

### getter/setter

```js
let Lesson = {
    lists: [
        { name: "js", price: 100 },
        { name: "mysql", price: 212 },
        { name: "vue.js", price: 98 }
    ],
    get total() {
        return this.lists.reduce((t, b) => t + b.price, 0);
    }
};
console.log(Lesson.total); //410
Lesson.total = 30; //无效
console.log(Lesson.total); //410
```

下面是设置 token 储取的示例，将业务逻辑使用`getter/setter`处理更方便，也方便其他业务的复用

```js
let Request = {
    get token() {
        let con = localStorage.getItem('token');
        if (!con) {
            alert('请登录后获取token')
        } else {
            return con;
        }
    },
    set token(con) {
        localStorage.setItem('token', con);
    }
};
console.log(Request.token);
```

定义内部私有属性

```js
const user = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length <= 3) {
            throw new Error("用户名不能小于三位");
        }
        this._name = value;
    }
};
user.name = "张三";
console.log(user.name);
```

### 访问器描述符

使用 `defineProperty` 可以模拟定义私有属性，从而使用面向对象的抽象特性

```js
function User(name, age) {
    let data = { name, age };
    Object.defineProperties(this, {
        name: {
            get() {
                return data.name;
            },
            set(value) {
                if (value.trim() == "") throw new Error("无效的用户名");
                data.name = value;
            }
        },
        age: {
            get() {
                return data.name;
            },
            set(value) {
                if (value.trim() == "") throw new Error("无效的用户名");
                data.name = value;
            }
        }
    });
}
let func = new User("张三", 33);
console.log(func.name);
func.name = "李四";
console.log(func.name);
```

使用语法糖 `class`定义

```js
const DATA = Symbol();
class User {
    constructor(name, age) {
        this[DATA] = { name, age };
    }
    get name() {
        return this[DATA].name;
    }
    set name(value) {
        if (value.trim() == "") throw new Error("无效的用户名");
        this[DATA].name = value;
    }
    get age() {
        return this[DATA].name;
    }
    set age(value) {
        if (value.trim() == "") throw new Error("无效的用户名");
        this[DATA].name = value;
    }
}
let func = new User("张三", 33);
console.log(func.name);
func.name = "李四";
console.log(func.name);
console.log(func);
```

### 闭包访问器

- 访问器定义在函数中，并接收参数 v
- 在 get() 中通过闭包返回 v
- 在 set() 中修改了 v，这会影响 get()访问的闭包数据 v

```js
let data = {
    name: '张三',
}
for (const [key, value] of Object.entries(data)) {
    observer(data, key, value)
}

function observer(data, key, v) {
    Object.defineProperty(data, key, {
        get() {
            return v
        },
        set(newValue) {
            v = newValue
        },
    })
}
data.name = '李四'
console.dir(data.name) //李四
```

##  代理拦截Proxy

代理（拦截器）是对象的访问控制，`setter/getter` 是对单个对象属性的控制，而代理是对整个对象的控制。

- 读写属性时代码更简洁
- 对象的多个属性控制统一交给代理完成
- 严格模式下 `set` 必须返回布尔值

```js
const obj = { name: "张三" };
const proxy = new Proxy(obj, {
    get(obj, property) {
        return obj[property];
    },
    set(obj, property, value) {
        obj[property] = value;
        return true;
    }
});
proxy.age = 10;
console.log(obj);//{name: '张三', age: 10}
```

### 代理函数

如果代理以函数方式执行时，会执行代理中定义 `apply` 方法

- 参数说明：函数，上下文对象，参数

```js
function factorial(num) {
    return num == 1 ? 1 : num * factorial(num - 1);
}
let proxy = new Proxy(factorial, {
    apply(func, obj, args) {
        console.time("run");
        func.apply(obj, args);
        console.timeEnd("run");
    }
});
proxy.apply(this, [1, 2, 3]);
```

### 双向绑定

```js
function View() {
    //设置代理拦截
    let proxy = new Proxy(
        {},
        {
            get(obj, property) {},
            set(obj, property, value) {
                obj[property] = value;
                document
                    .querySelectorAll(
                    `[v-model="${property}"],[v-bind="${property}"]`
                )
                    .forEach(el => {
                    el.innerHTML = value;
                    el.value = value;
                });
            }
        }
    );
    //初始化绑定元素事件
    this.run = function() {
        const els = document.querySelectorAll("[v-model]");
        els.forEach(item => {
            item.addEventListener("keyup", function() {
                proxy[this.getAttribute("v-model")] = this.value;
            });
        });
    };
}
let view = new View().run();
```

### 表单验证

```js
class Validate {
    max(value, len) {
        return value.length <= len;
    }
    min(value, len) {
        return value.length >= len;
    }
    isNumber(value) {
        return /^\d+$/.test(value);
    }
}
//代理工厂
function makeProxy(target) {
    return new Proxy(target, {
        get(target, key) {
            return target[key];
        },
        set(target, key, el) {
            const rule = el.getAttribute("rule");
            const validate = new Validate();
            let state = rule.split(",").every(rule => {
                const info = rule.split(":");
                return validate[info[0]](el.value, info[1]);
            });
            el.classList[state ? "remove":"add"]("error");
            return true;
        }
    });
}
const nodes = makeProxy(document.querySelectorAll("[validate]"));
nodes.forEach((item, i) => {
    item.addEventListener("keyup", function() {
        nodes[i] = this;
    });
});
```

## JSON

- json 是一种轻量级的数据交换格式，易于人阅读和编写
- 使用`json` 数据格式是替换 `xml` 的最佳方式，主流语言都很好的支持`json` 格式。所以 `json` 也是前后台传输数据的主要格式
- json 标准中要求使用双引号包裹属性，虽然有些语言不强制，但使用双引号可避免多程序间传输发生错误语言错误的发生

### 序列化

**`JSON.stringify()`**

### 反序列化

**使用 `JSON.parse` 将字符串 `json` 解析成对象**

## Reflect

**Reflect** 是一个内置的对象，它提供拦截 JavaScript 操作的方法

- `Reflect`并非一个构造函数，所以不能通过 new 运算符对其进行调用