# 作用域与闭包

## 作用域

全局作用域只有一个，每个函数又都有作用域（环境）

- 编译器运行时会将变量定义在所在作用域
- 使用变量时会从当前作用域开始向上查找变量
- 作用域就像攀亲戚一样，晚辈总是可以向上辈要些东西

### 使用规范

作用域链只向上查找，找到全局 window 即终止，应该尽量不要在全局作用域中添加变量

函数被执行后其环境变量将从内存中删除。下面函数在每次执行后将删除函数内部的 total 变量

```js
function count() {
    let total = 0;
    console.log(++total);
}
count();//1
count();//1
count();//1
```

函数每次调用都会创建一个新作用域

```js
let site = '张三';
function func() {
    let str = '李四';
    function func1() {
        let cms = '王五';
        console.log(str);//李四
        console.log(site);//张三
    }
    func1();
}
func();
```

如果子函数被使用时父级环境将被保留

```js
function func() {
    let n = 1;
    return function() {
        let b = 1;
        return function() {
            console.log(++n);
            console.log(++b);
        };
    };
}
let a = func()();
a(); //2,2
a(); //3,3
```

构造函数也是很好的环境例子，子函数被外部使用父级环境将被保留

```js
function User() {
    let a = 1;
    this.show = function() {
        console.log(a++);
    };
}
let a = new User();
a.show(); //1
a.show(); //2
let b = new User();
b.show(); //1
```

### let/const

**使用 `let/const` 可以将变量声明在块作用域中（放在新的环境中，而不是全局中）**

```js
{
    let a = 9;
}
console.log(a); // a is not defined
if (true) {
    var i = 1;
}
console.log(i);//1
```

也可以通过下面的定时器函数来体验

```js
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);//10
    }, 500);
}

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);//0~9
    }, 500);
}
```

在 `for` 循环中使用`let/const` 会在每一次迭代中重新生成不同的变量

```js
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push((() => i));
}
console.log(arr[3]()); //3 如果使用var声明将是10
```

在没有`let/const` 的历史中使用以下方式产生作用域

```js
//自行构建闭包
var arr = [];
for (var i = 0; i < 10; i++) {
    (function (a) {
        arr.push(()=>a);
    })(i);
}
console.log(arr[3]()); //3
```

## 闭包使用

**闭包指子函数可以访问外部作用域变量的函数特性，即使在子函数作用域外也可以访问。如果没有闭包那么在处理事件绑定，异步请求时都会变得困难**

- `JS`中的所有函数都是闭包
- 闭包一般在子函数本身作用域以外执行，即延申作用域

使用闭包返回数组区间元素

```js
let arr = [3, 2, 4, 1, 5, 6];
function between(a, b) {
    return function(v) {
        return v >= a && v <= b;
    };
}
console.log(arr.filter(between(3, 5)));//[3, 4, 5]
```

```js
var btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = (function(i) {
        return function() {
            alert(`点击了第${i + 1}个按钮`);
        };
    })(i);
}
```

### 闭包排序

```js
let lessons = [
    {
        title: "媒体查询响应式布局",
        click: 89,
        price: 12
    },
    {
        title: "FLEX 弹性盒模型",
        click: 45,
        price: 120
    },
    {
        title: "GRID 栅格系统",
        click: 19,
        price: 67
    },
    {
        title: "盒子模型详解",
        click: 29,
        price: 300
    }
];
function order(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
}
console.table(lessons.sort(order("price")));
```

### 闭包问题

**内存泄漏**

闭包特性中上级作用域会为函数保存数据，从而造成的如下所示的内存泄漏问题

```js
let divs = document.querySelectorAll("div");
divs.forEach(function(item) {
    item.addEventListener("click", function() {
        console.log(item.getAttribute("desc"));
    });
});
```

下面通过清除不需要的数据解决内存泄漏问题

```js
let divs = document.querySelectorAll("div");
divs.forEach(function(item) {
    let desc = item.getAttribute("desc");
    item.addEventListener("click", function() {
        console.log(desc);
    });
    item = null;
});
```

**this 指向**

this 总是指向调用该函数的对象，即函数在搜索 this 时只会搜索到当前活动对象

```js
let obj = {
    user: "张三",
    get: function() {
        return function() {
            return this.user;
        };
    }
};
console.log(obj.get()()); //undefined 严格模式下报错

//使用箭头函数解决这个问题
let obj = {
    user: "张三",
    get: function() {
        return () => this.user;
    }
};
console.log(obj.get()()); //张三
```

