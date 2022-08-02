# 基础

## 声明变量

### 命名规则

JS 中的变量是弱类型可以保存所有类型的数据，即变量没有类型而值有类型。变量名以字母、$、_ 开始，后跟字母、数字、_

```js
let name = "name";
let $ = "js"
```

js关键字不能用来做变量名，比如`true/if/while/class`等

```js
let class = 'name';//Unexpected token 'class'
```

### 变量声明

使用`,` 可以同时声明多个变量

```js
let n = 2,f = 3;
console.log(f);//3
```

### 弱类型

在JS中变量类型由所引用的值决定

```js
var str = "name";
console.log(typeof str);//string
str = 99;
console.log(typeof str);//number
str = {}
console.log(typeof str);//object
```

### 变量提升

解析器会先解析代码，然后把声明的变量的声明提升到最前，这就叫做变量提升

使用 `var` 声明代码会被提升到前面

```js
console.log(a); //undefined
var a = 1;
console.log(a);  //1
//以上代码解析器执行过程如下
var a;
console.log(a); //1
a = 1;
console.log(a); //1
```

下面是 `if(false)` 中定义的 var 也会发生变量提升，注释掉`if` 结果会不同

```js
var web = "张三";
function func() {
    if (false) {
        var web = "李四";
    }
    console.log(web);//undefined
}
func();
```

使用 `var` 定义的代码，声明会被提升到前面，赋值还在原位置

```js
console.log(str);//undefined
var str = '张三';
//以上代码解析器执行过程如下
var str;
console.log(str); //李四
str = '李四';
```

### TDZ

:::tip

TDZ 又称暂时性死区，指变量在作用域内已经存在，但必须在`let/const`声明后才可以使用

TDZ 可以让程序保持先声明后使用的习惯，让程序更稳定。

- 变量要先声明后使用
- 建议使用 let/const 而少使用 var

:::

使用`let/const` 声明的变量在声明前存在临时性死区（TDZ）使用会发生错误

```js
console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
let x = 1;
```

在`run`函数作用域中产生 TDZ，不允许变量在未声明前使用

```js
str = "张三";
function run() {
    console.log(str);//Cannot access 'str' before initialization
    let str = "李四";
}
run();
```

下面代码 b 没有声明赋值不允许直接使用

```js
function func(a = b, b = 3) {}
func(); //Cannot access 'b' before initialization
```

因为 a 已经赋值，所以 b 可以使用 a 变量，下面代码访问正常

```js
function func(a = 2, b = a) {}
func();
```

## 块作用域

### 共同点

`var/let/const`共同点是全局作用域中定义的变量，可以在函数中使用

```js
var str = '张三';
function show() {
    return str;
}
console.log(show());//张三
```

函数中声明的变量，只能在函数及其子函数中使用

```js
function func() {
    var str = "张三";
    function show() {
        console.log(str);
    }
    show(); //张三
    console.log(str); //张三
}
func();
console.log(str); // web is not defined
```

函数中声明的变量就像声明了私有领地，外部无法访问

```js
var str = "张三";
function func() {
    var str = "李四";
    console.log(str); //李四
}
func();
console.log(str); //张三
```

###  var

使用 `var` 声明的变量存在于最近的函数或全局作用域中，没有块级作用域的机制

```js
//没有块作用域很容易污染全局，下面函数中的变量污染了全局环境
function run() {
    str = "zhangsan";
}
run();
console.log(str); //zhangsan

//没有块作用作用域时 var 也会污染全局
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);//0-10
```

使用`let`有块作用域时则不会

```js
let i = 100;
for (let i = 0; i < 6; i++) {
  console.log(i);
}
console.log(i);
```

`var` 全局声明的变量也存在于 `window`对象中

```js
var str = "张三";
console.log(window.str); //张三
```

以往没有块任用时使用立即执行函数模拟块作用域

```js
(function() {
    var $ = this.$ = {};
    $.str = "张三";
}.bind(window)());
console.log($.str);//张三

//有了块作用域后实现就变得简单多了
{
    let $ = (window.$ = {});
    $.str = "张三";
}
console.log($.str);//张三
```

### let

与 `var` 声明的区别是 `let/const` 拥有块作用域，下面代码演示了块外部是无法访问到`let`声明的变量。

- 建议将`let`在代码块前声明
- 用逗号分隔定义多个

`let`存在块作用域特性，变量只在块域中有效

```js
if (true) {
    let str = '张三',url = '李四';
    console.log(str); //张三
}
console.log(str); //str is not defined
```

块内部是可以访问到上层作用域的变量

```js
if (true) {
    let user = "张三";
    (function() {
        if (true) {
            console.log(`这是块内访问：${user}`);//这是块内访问：张三
        }
    })();
}
console.log(user);//user is not defined
```

每一层都是独立作用域，里层作用域可以声明外层作用域同名变量，但不会改变外层变量

```js
function run() {
    str = "张三";
    if (true) {
        let str = "李四";
        console.log(str); //四
    }
    console.log(str); //张三
}
run();
```

### const

使用 `const` 用来声明常量，这与其他语言差别不大，比如可以用来声明后台接口的 URI 地址

- 常量名建议全部大写
- 只能声明一次变量
- 声明时必须同时赋值
- 不允许再次全新赋值
- 可以修改引用类型变量的值
- 拥有块、函数、全局作用域

常量不允许全新赋值举例

```js
try {
    const URL = "https://www.baidu.com/";
    URL = "baidu"; //产生错误
} catch (error) {
    throw new Error(error);//Assignment to constant variable.
}
```

改变常量的引用类型值

```js
const INFO = {
    url: 'https://www.baidu.com/',
    port: '8080'
};
INFO.port = '4433';
console.log(INFO);
```

### 重复定义

- 使用 var 可能造成不小心定义了同名变量
- 使用`let` 可以避免上面的问题，因为 let 声明后的变量不允许在同一作用域中重新声明

```js
let web = '张三';
let web = '李四'; //Identifier 'web' has already been declared

//不同作用域可以重新声明
let str = '张三';
if (true) {
    let str = '李四'; //Identifier 'web' has already been declared
}

//但可以改变值这是与 const 不同点
let price = 90;
price = 88;
console.log(`商品价格是:${price}`);
```

`let` 全局声明的变量不存在于 `window`对象中，这与`var`声明不同

```js
let hd = "张三";
console.log(window.hd); //undefined
```

### Object.freeze

冻结变量后，变量也不可以修改了，使用严格模式会报出错误

```js
"use strict"
const INFO = {
    name: '张三',
};
Object.freeze(INFO);
INFO.name = '李四'; 
console.log(INFO);//Cannot assign to read only property 'name' of object '#<Object>'
```

### 传值与传址

基本数据类型指数值、字符串等简单数据类型，引用类型指对象数据类型

基本类型复制是值的复制，互相不受影响

```js
let a = 100;
let b = a;
a = 200;
console.log(b);
```

对于引用类型来讲，变量保存的是引用对象的指针。变量间赋值时其实赋值是变量的指针，这样多个变量就引用的是同一个对象

```js
let a = {
    str: "张三"
};
let b = a;
a.str = "李四";
console.log(b);//{str: '李四'}
```

## undefined

对声明但未赋值的变量返回类型为 `undefined` 表示值未定义

```js
let str;
console.log(typeof str);//undefined
```

:::danger

对未声明的变量使用会报错，但判断类型将显示 `undefined`

:::

```js
//函数参数或无返回值是为undefined
function func(web) {
    console.log(web); //undefined
    return web;
}
console.log(func()); //undefined
```

### null

`null` 用于定义一个空对象，即如果变量要用来保存引用类型，可以在初始化时将其设置为 null

```js
var str = null;
console.log(typeof str);//object
```

## 严格模式

:::tip

严格模式可以让我们及早发现错误，使代码更安全规范，推荐在代码中一直保持严格模式运行

主流框架都采用严格模式，严格模式也是未来 JS 标准，所以建议代码使用严格模式开发

:::

### 基本差异

```js
//变量必须使用关键词声明，未声明的变量不允许赋值
"use strict";
str = 'name'; //str is not defined
```

**强制声明防止污染全局**

```js
"use strict";
function run() {
    str = "name";
}
run();
console.log(str); //str is not defined
```

**关键词不允许做变量使用**

```js
"use strict";
var public = '张三';// Unexpected strict mode reserved word 
```

**变量参数不允许重复定义**

```js
"use strict";
//不允许参数重名
function func(name, name) {}
```

**单独为函数设置严格模式**

```js
function strict(){
    "use strict";
    return "严格模式";
}
function notStrict() {
    return "正常模式";
}
```

**为了在多文件合并时，防止全局设置严格模式对其他没使用严格模式文件的影响，将脚本放在一个执行函数中**

```js
(function () {
    "use strict";
    url = 'zhangsan';
})();
```

### 解构差异

**非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明**

:::tip

使用严格模式编码总是推荐的

:::

```js
// "use strict";
({name,url} = {name:'张三'});
console.log(name);
```

