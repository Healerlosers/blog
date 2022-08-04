# 函数进阶

##  声明定义

在 JS 中函数也是对象函数是`Function`类的创建的实例

```js
let func = new Function("title", "console.log(title)");
func('张三');//张三
```

**标准语法是使用函数声明来定义函数**

```js
function func(num) {
    return ++num;
}
console.log(func(3));//4
```

对象字面量属性函数简写

```js
let user = {
    name: null,
    getName: function (name) {
        return this.name;
    },
    //简写形式
    setName(value) {
        this.name = value;
    }
}
user.setName('张三');
console.log(user.getName()); // 张三
```

**使用`let/const`时不会压入 window**

```js
let func = function() {
    console.log("张三");
};
window.func(); //window.func is not a function
```

## 匿名函数

**函数是对象所以可以通过赋值来指向到函数对象的指针，当然指针也可以传递给其他变量，注意后面要以`;`结束。下面使用函数表达式将 `匿名函数` 赋值给变量**

```js
let func = function(num) {
    return ++num;
};
console.log(func instanceof Object); //true
let cms = func;
console.log(cms(3));//4
```

**标准声明的函数优先级更高，解析器会优先提取函数并放在代码树顶端，所以标准声明函数位置不限制**

```js
console.log(func(3));//4
function func(num) {
    return ++num;
};
```

**标准声明优先级高于赋值声明**

```js
console.log(func(3)); //4
function func(num) {
    return ++num;
}
var func = function() {
    return "func";
};
```

程序中使用匿名函数的情况非常普遍

```js
function sum(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));//6
```

## 立即执行

立即执行函数指函数定义时立即执行

- 可以用来定义私有作用域防止污染全局作用域

```js
(function () {
    var web = '张三';
})();
console.log(web); 
```

- 使用 `let/const` 有块作用域特性，所以使用以下方式也可以产生私有作用域

```js
{
    let web = '张三';
}
console.log(web);//web is not defined
```

## 函数提升

**函数也会提升到前面，优先级行于`var`变量提高**

```js
console.log(func()); //张三
function func() {
    return '张三';
}
```

:::warning

变量函数定义不会被提升

:::

```js
console.log(func()); //张三
function func() {
    return '张三';
}
var func = function () {
    return '李四';
}
```

## 形参实参

**形参是在函数声明时设置的参数，实参指在调用函数时传递的值**

- 形参数量大于实参时，没有传参的形参值为 undefined
- 实参数量大于形参时，多于的实参将忽略并不会报错

## arguments

**arguments 是函数获得到所有参数集合**

```js
function sum() {
    return [...arguments].reduce((total, num) => {
        return (total += num);
    }, 0);
}
console.log(sum(2, 3, 4, 2, 6)); //17

//使用展示语法
function sum(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(sum(2, 3, 4, 2, 6)); //17
```

## 箭头函数

:::warning

箭头函数是函数声明的简写形式，在使用递归调用、构造函数、事件处理器时不建议使用箭头函数

:::

无参数时使用空扩号即可

```js
let sum = () => {
    return 1 + 3;
}
console.log(sum()); //4
```

函数体为单一表达式时不需要 `return` 返回处理，系统会自动返回表达式计算结果

```js
let sum = () => 1 + 3;
console.log(sum()); //4
```

多参数传递与普通声明函数一样使用逗号分隔

```js
let total = [1, 8, 3, 5].filter((item, index) => {
    return item <= 3;
});
console.log(total);
```

只有一个参数时可以省略括号

```js
let total = [1, 8, 3, 5].filter(item => item <= 3);
console.log(total);
```

## 递归调用

**递归指函数内部调用自身的方式**

- 主要用于数量不确定的循环操作
- 要有退出时机否则会陷入死循环

```js
function factorial(num = 3) {
    return num === 1 ? num : num * factorial(--num);
}
console.log(factorial(5)); //120
```

累加计算方法

```js
function sum(...num) {
    return num.length === 0 ? 0 : num.pop() + sum(...num);
}
console.log(sum(1, 2, 3, 4, 5, 7, 9)); //31
```

## 回调函数

在某个时刻被其他函数调用的函数称为回调函数，比如处理键盘、鼠标事件的函数

```js
document.getElementById('hd').addEventListener('click', () => alert('通过回调函数调用'));
```

使用回调函数递增计算

```js
let total = ([1, 2, 3]).map(item => item + 10);
console.log(total)//(3)[11, 12, 13]
```

## 展开语法

**展示语法或称点语法体现的就是`收/放`特性，做为值时是`放`，做为接收变量时是`收`**

```js
let arr = [1, 2, 3];
let [a, b, c] = [...arr];
console.log(a); //1
console.log(b); //2
console.log(c); //3
[...arr] = [1, 2, 3];
console.log(arr); //[1, 2, 3]
```

**使用展示语法可以替代 `arguments` 来接收任意数量的参数**

```js
function func(...args) {
    console.log(args);//[1, 2, 3, 4]
}
func(1, 2, 3, 4);
```

**也可以用于接收部分参数**

```js
function func(site, ...args) {
    console.log(site, args); //张三 (3) [1, 2, 3]
}
func("张三", 1, 2, 3);
```

**使用 `...` 可以接受传入的多个参数合并为数组，下面是使用点语法进行求合计算**

```js
function sum(...params) {
    return params.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 3, 2, 4));//10
```

**多个参数时`...参数`必须放后面，下面计算购物车商品折扣**

```js
function sum(discount = 0, ...prices) {
    let total = prices.reduce((pre, cur) => pre + cur);
    return total * (1 - discount);
}
console.log(sum(0.1, 100, 300, 299));
```

## 标签函数

使用函数来解析标签字符串，第一个参数是字符串值的数组，其余的参数为标签变量

```js
function func(str, ...values) {
    console.log(str); //张三-18
    console.log(values); //[]
}
let name = '张三',age = 18;
func(`${name}-${age}`);
```

## this

**调用函数时 `this` 会隐式传递给函数指函数调用时的关联对象，也称之为函数的上下文**

### 函数调用

**全局环境下`this`就是 window 对象的引用**

```js
console.log(this == window); //true
```

**使用严格模式时在全局函数内`this`为`undefined`**

```js
var str = '张三';
function get() {
    "use strict"
    return this.str;
}
console.log(get());
//严格模式将产生错误Cannot read properties of undefined (reading 'str')
```

### 方法调用

**函数为对象的方法时`this` 指向该对象**

**构造函数**

**函数当被 `new` 时即为构造函数，一般构造函数中包含属性与方法。函数中的上下文指向到实例对象**

- 构造函数主要用来生成对象，里面的 this 默认就是指当前对象

```js
function User() {
    this.name = "张三";
    this.say = function() {
        console.log(this); //User{name: '张三', say: ƒ}
        return this.name;
    };
}
let func = new User();
console.log(func.say()); //张三
```

**对象字面量**

- 下例中的 func函数不属于对象方法所以指向`window`
- show 属于对象方法执向 `obj`对象

```js
//严格模式下报错
let obj = {
    site: "张三",
    show() {
        console.log(this.site); //张三
        console.log(`this in show method: ${this}`); //this in show method: [object Object]
        function hd() {
            console.log(typeof this.site); //undefined
            console.log(`this in hd function: ${this}`); //this in hd function: [object Window]
        }
        hd();
    }
};
obj.show();
```

### 箭头函数

**箭头函数没有`this`, 也可以理解为箭头函数中的`this` 会继承定义函数时的上下文，可以理解为和外层函数指向同一个 this。**

- 如果想使用函数定义时的上下文中的 this，那就使用箭头函数

```js
//严格模式下报错
var name = '张三';
var obj = {
    name: '李四',
    getName: function () {
        return function () {
            return this.name;
        }
    }
}
console.log(obj.getName()()); //返回window.name的值张三
```

**使用箭头函数后 `this` 为定义该函数的上下文，也可以理解为定义时父作用域中的`this`**

```js
var name = '张三';
var obj = {
    name: '李四',
    getName: function () {
        return () => {
            return this.name;
        }
    }
}
console.log(obj.getName()()); //李四
```

- 事件函数可理解为对象`onclick`设置值，所以函数声明时`this`为当前对象

- 但使用箭头函数时`this`为声明函数上下文

**使用普通函数时`this`为当前 DOM 对象**

```html
<body>
    <button desc="张三">button</button>
</body>
<script>
    let Dom = {
        site: "李四",
        bind() {
            const button = document.querySelector("button");
            button.addEventListener("click", function() {
                alert(this.getAttribute("desc"));//张三
            });
        }
    };
    Dom.bind();
</script>
```

**用箭头函数时 this 指向上下文对象**

```js
let Dom = {
    site: "李四",
    bind() {
        const button = document.querySelector("button");
        button.addEventListener("click", event => {
            alert(this.site + event.target.innerHTML);//李四button
        });
    }
};
Dom.bind();
```

**使用`handleEvent`绑定事件处理器时，`this`指向当前对象而不是 DOM 元素**

```js
let Dom = {
    site: "李四",
    handleEvent: function(event) {
        console.log(this);
    },
    bind() {
        const button = document.querySelector("button");
        button.addEventListener("click", this);//{site: '李四', handleEvent: ƒ, bind: ƒ}
    }
};
Dom.bind();
```

## apply/call/bind

**改变 this 指针，也可以理解为对象借用方法，就现像生活中向邻居借东西一样的事情**

### 原理分析

构造函数中的`this`默认是一个空对象，然后构造函数处理后把这个空对象变得有值

```js
function User(name) {
    this.name = name;
}
let func = new User("张三");
console.log(func);//User{name: '张三'}
```

可以改变构造函数中的空对象，即让构造函数 this 指向到另一个对象

```js
function User(name) {
    this.name = name;
}
let obj = {};
User.call(obj, "张三");
console.log(obj);//{name: '张三'}
console.log(obj.name); //张三
```

### apply/call

**call 与 apply 用于显示的设置函数的上下文，两个方法作用一样都是将对象绑定到 this，只是在传递参数上有所不同**

- apply 用数组传参
- call 需要分别传参
- 与 bind 不同 call/apply 会立即执行函数

```js
function show(title) {
    alert(`${title+this.name}`);
}
let lisi = {
    name: '李四'
};
let wangwu = {
    name: '王五'
};
show.call(lisi, '李四');
show.apply(wangwu, ['func']);
```

**使用 `call` 设置函数上下文**

```js
function show() {
    alert(this.getAttribute('message'));
}
let bts = document.getElementsByTagName('button');
for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener('click', () => show.call(bts[i]));
}
```

**找数组中的数值最大值**

```js
let arr = [1, 3, 2, 8];
console.log(Math.max(arr)); //NaN
console.log(Math.max.apply(Math, arr)); //8
console.log(Math.max(...arr)); //8
```

### bind

bind()是将函数绑定到某个对象，比如 a.bind(obj) 可以理解为将 a 函数绑定到 hd 对象上即 obj.a()

- 与 call/apply 不同 bind 不会立即执行
- bind 是复制函数形为会返回新函数

bind 是复制函数行为

```js
let a = function() {};
let b = a;
console.log(a === b); //true
//bind是新复制函数
let c = a.bind();
console.log(a == c); //false
```

绑定参数注意事项

```js
function func(a, b) {
    return this.f + a + b;
}
//使用bind会生成新函数
let newFunc = func.bind({ f: 1 }, 3);
//1+3+2 参数2赋值给b即 a=3,b=2
console.log(newFunc(2));
```

在事件中使用`bind`

```js
document.querySelector("button").addEventListener("click", function(event) {
    console.log(event.target.innerHTML + this.url);
}.bind({ url: "张三" }));
```

