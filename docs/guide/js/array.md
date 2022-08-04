# 数组类型

## 声明数组

数组是多个变量值的集合，数组是`Array` 对象的实例，所以可以像对象一样调用方法

### 创建数组

使用对象方式创建数组

```js
console.log(new Array(1, '1'));
```

使用字面量创建数组

```js
const array = ["1", "2"];
```

多维数组定义

```js
const array = [["1"], ["2"]];
console.log(array[1][0]);//2
```

数组是引用类型可以使用`const`声明并修改它的值

```js
const array = ["1", "2"];
array.push("3");
console.log(array);//['1', '2', '3']
```

:::tip

- 使用原型的 `length`属性可以获取数组元素数量
- 数组可以设置任何值，下面是使用索引添加数组

:::

### Array.of

使用`Array.of` 与 `new Array` 不同是设置一个参数时不会创建空元素数组

```js
let arr = Array.of(1);
console.log(arr); //[1]

arr = Array.of(1, 2, 3);
console.log(hd); //[1, 2, 3]
```

### 类型检测

**isArray()检测变量是否为数组类型**

```js
console.log(Array.isArray([1, "1"])); //true
console.log(Array.isArray(9)); //false
```

##  类型转换

### 字符串

大部分数据类型都可以使用`.toString()` 函数转换为字符串

```js
console.log(([1, 2, 3]).toString()); // 1,2,3
```

也可以使用函数 `String` 转换为字符串

```js
console.log(String([1, 2, 3]));
```

或使用`join`连接为字符串

```js
console.log([1, 2, 3].join("-"));//1-2-3
```

### Array.from

使用`Array.from`可将类数组转换为数组，类数组指包含 `length` 属性或可迭代的对象。

**第一个参数为要转换的数据，第二个参数为类似于`map` 函数的回调方法**

```js
let str = '张三';
console.log(Array.from(str)); //['张', '三']
```

为对象设置`length`属性后也可以转换为数组，但要下标为数值或数值字符串

```js
let user = {
    0: '张三',
    '1': 18,
    length: 2
};
console.log(Array.from(user)); //['张三', 18]
```

DOM 元素转换为数组后来使用数组函数，第二个参数类似于`map` 函数的方法，可对数组元素执行函数处理

```js
let btns = document.querySelectorAll('button');
console.log(btns); //包含length属性
Array.from(btns, (item) => {
    item.style.background = 'red';
});
```

## 展开语法

### 数组合并

使用展开语法来合并数组相比 `concat` 要更简单，使用`...` 可将数组展开为多个值

```js
let a = [1, 2, 3];
let b = ['a', 'b', ...a];
console.log(b); //['a', 'b', 1, 2, 3]
```

### 函数参数

使用展示语法可以替代 `arguments` 来接收任意数量的参数

```js
function func(...args) {
    console.log(args);//[1, 2, 3]
}
func(1, 2, 3); 
```

也可以用于接收部分参数

```js
function func(site, ...args) {
    console.log(site, args); //a (3) [1, 2, 3]
}
func("a", 1, 2, 3);
```

### 节点转换

可以将 DOM 节点转为数组

```js
let divs = document.querySelectorAll("div");
[...divs].map(function(div) {
    div.addEventListener("click", function() {
        this.classList.toggle("hide");
    });
});
```

也可以使用原型处理

```js
let btns = document.querySelectorAll('button');
Array.prototype.map.call(btns, (item) => {
    item.style.background = 'red';
});
```

## 解构赋值

解构是一种更简洁的赋值特性，可以理解为分解一个数据的结构

- 建设使用 `var/let/const` 声明

```js
//数组使用
let [name, age] = ['张三', 18];
console.log(name);//张三
```

**剩余解构指用一个变量来接收剩余参数**

```js
let [a, ...b] = ['张三', '18', '男'];
console.log(b);//['18', '男']
```

**字符串解构**

```js
"use strict";
const [...a] = "张三";
console.log(a); //['张', '三']
```

### 严格模式

**非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明**

### 简洁定义

**只赋值部分变量**

```js
let [,url]=['张三','李四'];
console.log(url);//李四
```

**使用展开语法获取多个值**

```js
let [name, ...arr] = ['张三', '18', '男'];
console.log(name, arr); //张三 (2) ["18", "男"]
```

### 默认值

```js
let [name, site = '张三'] = ['李四'];
console.log(site); //张三
```

### 函数参数

```js
//数组参数的使用
function func([a, b]) {
    console.log(a, b);
}
func(['张三', '李四']);
```

## 管理元素

### 基本使用

```js
//使用从 0 开始的索引来改变数组
let arr = [1, "2", "3"];
arr[1] = '张三';
console.log(arr); //[1, '张三', '3']

//向数组追回元素
let arr = [1, 2];
arr[arr.length] = 3;
console.log(arr); //[1, 2, 3]
```

### push

:::tip

**push(item1,item2...) 向数组末尾添加一个或多个元素，并返回新数组的长度**

:::

### pop

:::tip

**pop() 用于删除数组的最后一个元素并返回删除的元素**

:::

### shift

:::tip

**shift() 删除数组的第一个元素并返回删除的元素**

:::

### unshift

:::tip

**unshift(item1,item2) 向数组开头添加一个或多个数组，返回新数组的长度**

:::

###  fill

:::tip

fill(val,start,end) 用于将一个固定值替换数组的元素

- ​	val:必填，填充的值
- ​    start:可选，开始填充的位置
- ​    end:可选，结束填充的位置

:::

```js
//使用fill 填充数组元素
console.dir(Array(4).fill("张三")); //["张三", "张三", "张三", "张三"]

//指定填充位置
console.log([1, 2, 3, 4].fill("张三", 1, 2)); //[1, "张三", 3, 4]
```

### slice

:::tip

**slice(start,end) 从数组中截取部分元素合成新数组（不改变原数组），不传第二个参数时截取到数组的最后元素，左闭右开**

:::

```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.slice(1, 3)); // [1,2]

//不设置参数是为获取所有元素
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.slice()); //[0, 1, 2, 3, 4, 5, 6]
```

### splice

:::tip

**splice(index,howmany,...itemx) 删除，添加 替换数组中的元素**

- ​	index:必需
- ​    howmany：可选，规定应该删除多少元素，必须时数字，但可以时0
- ​    itemx:可选，要添加到元素的新元素

:::

```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 3)); //返回删除的元素 [1, 2, 3]
console.log(arr); //删除数据后的原数组 [0, 4, 5, 6]
```

通过修改`length`删除最后一个元素

```js
let arr = [1,2,3];
arr.length = arr.length - 1;
console.log(arr);//[1, 2]
```

通过指定第三个参数来设置在删除位置添加的元素

```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 3, '张三', '李四')); //[1, 2, 3]
console.log(arr); //[0, '张三', '李四', 4, 5, 6]
```

向末尾添加元素

```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(arr.length, 0, '张三')); //[]
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, '张三']
```

向数组前添加元素

```js
let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr.splice(0, 0, '张三')); //[]
console.log(arr); //['张三', 0, 1, 2, 3, 4, 5, 6]
```

数组元素位置调整函数

```js
function move(array, before, to) {
    if (before < 0 || to >= array.length) {
        console.error("指定位置错误");
        return;
    }
    const newArray = [...array];
    const elem = newArray.splice(before, 1);
    newArray.splice(to, 0, ...elem);
    return newArray;
}
const array = [1, 2, 3, 4];
console.table(move(array, 0, 3));
```

### 清空数组

:::tip

- 将数组值修改为`[]`可以清空数组，如果有多个引用时数组在内存中存在被其他变量引用
- 将数组`length`设置为 0 也可以清空数组
- 使用`splice`方法删除所有数组元素
- 使用`pop/shift`删除所有元素，来清空数组

:::

```js
let user = [1,2,3,4];
user = [];
user.length = 0
user.splice(0, user.length);
while (user.pop()) {}
```

## 合并拆分

### join

```js
let arr = [1, 2, 3];
console.log(arr.join('-')); //1-2-3
```

### split

**`split` 方法用于将字符串分割成数组，类似`join`方法的反函数**

```js
let price = "99,78,68";
console.log(price.split(",")); //["99", "78", "68"]
```

### concat

**`concat`方法用于连接两个或多个数组，元素是值类型的是复制操作，如果是引用类型还是指向同一对象**

```js
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); //[1, 2, 3, 4]
//也可以使用扩展语法实现连接
console.log([...arr1, ...arr2]);//[1, 2, 3, 4]
```

### copyWithin

**使用 `copyWithin` 从数组中复制一部分到同数组中的另外位置。**

```js
//语法
array.copyWithin(target, start, end)
```

| 参数     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| *target* | 必需。复制到指定目标索引位置。                               |
| *start*  | 可选。元素复制的起始位置。                                   |
| *end*    | 可选。停止复制的索引位置 (默认为 *array*.length)。如果为负值，表示倒数。 |

```js
const arr = [1, 2, 3, 4];
console.log(arr.copyWithin(2, 0, 2)); //[1, 2, 1, 2]
```

##  查找元素

### indexOf

**indexOf(item,start) 返回数组中可以找到一个给定元素的一个索引，不存在返回 -1**

```js
let arr = [7, 3, 2, 8, 2, 6];
console.log(arr.indexOf(2)); // 2 从前面查找2出现的位置
```

### lastIndexOf

**使用 `lastIndexOf` 从后向前查找元素出现的位置，如果找不到返回 `-1`**

```js
let arr = [7, 3, 2, 8, 2, 6];
console.log(arr.lastIndexOf(2)); // 4 从后查找2出现的位置
```

### includes

**includes(searchElement,fromIndex) 判断一个数组是否包含一个指定的值，返回布尔**

```js
let arr = [7, 3, 2, 6];
console.log(arr.includes(6)); //true
//封装函数
function includes(array, item) {
    for (const value of array)
        if (item === value) return true;
    return false;
}

console.log(includes([1, 2, 3, 4], 3)); //true
```

### find

**find 方法找到后会把值返回出来**

- 如果找不到返回值为`undefined`

返回第一次找到的值，不继续查找

```js
let arr = [1, 2, 3];
let find = arr.find(function(item) {
    return item === 2;
});
console.log(find); //2
```

使用`includes`等不能查找引用类型，因为它们的内存地址是不相等的

```js
const user = [{ name: "李四" }, { name: "张三" }, { name: "王五" }];
const find = user.includes({ name: "王五" });
console.log(find);//false
```

`find` 可以方便的查找引用类型

```js
const user = [{ name: "李四" }, { name: "张三" }, { name: "王五" }];
const find = user.find(user => (user.name = "王五"));
console.log(find);//{name: '王五'}
```

### findIndex

`findIndex` 与 `find` 的区别是返回索引值，参数也是 : 当前值，索引，操作数组

- 查找不到时返回 `-1`

```js
let arr = [7, 3, 2, '8', 2, 6];
console.log(arr.findIndex(function (v) {
    return v === 8;
})); //-1
```

### find 原理

```js
let arr = [1, 2, 3, 4, 5];
function find(array, callback) {
    for (const value of array) {
        if (callback(value) === true) return value;
    }
    return undefined;
}
let res = find(arr, function(item) {
    return item === 3;
});
console.log(res);//3
```

## 数组排序

### reverse

```js
//反转数组顺序
let arr = [1, 4, 2, 9];
console.log(arr.reverse()); //[9, 2, 4, 1]
```

### sort

sort`每次使用两个值进行比较 `Array.sort((a,b)=>a-b ==> (a-b 升序  b-a 降序)

- 返回负数 a 排在 b 前面，从小到大
- 返回正数 b 排在 a 前面
- 返回 0 时不动

默认从小于大排序数组元素

```js
let arr = [1, 4, 2, 9];
console.log(arr.sort()); //[1, 2, 4, 9]

//使用排序函数从大到小排序，参数一与参数二比较，返回正数为降序负数为升序
let arr = [1, 4, 2, 9];
console.log(arr.sort(function (a, b) {
    return b - a
})); //[9, 4, 2, 1]
```

### 排序原理

```js
let arr = [1, 5, 3, 9, 7];
function sort(array, callback) {
    for (const n in array) {
        for (const m in array) {
            if (callback(array[n], array[m]) < 0) {
                let temp = array[n];
                array[n] = array[m];
                array[m] = temp;
            }
        }
    }
    return array;
}
arr = sort(arr, function(a, b) {
    return a - b;
});
console.table(arr);
```

## 循环遍历

### for

根据数组长度结合`for` 循环来遍历数组

### forEach

`forEach`使函数作用在每个数组元素上，但是没有返回值

### for/in

遍历时的 key 值为数组的索引

### for/of

与 `for/in` 不同的是 `for/of` 每次循环取其中的值而不是索引

##  迭代器方法

数组中可以使用多种迭代器方法

### keys

```js
const arr = ["张三", "李四"];
const keys = arr.keys();
console.log(keys.next());//{value: 0, done: false}
console.log(keys.next());//{value: 1, done: false}
```

获取数组所有键

```js
"use strict";
const arr = ["a", "b", "c", "d"];
for (const key of arr.keys()) {
    console.log(key);
}
```

## values

```js
//通过迭代对象获取值
const hd = ["张三", "李四"];
const values = hd.values();
console.log(values.next());//{value: '张三', done: false}
console.log(values.next());//{value: '李四', done: false}
console.log(values.next());//{value: undefined, done: true}
```

获取数组的所有值 

```js
const arr = ["a", "b", "c", "d"];
for (const value of arr.values()) {
    console.log(value);
}
```

### entries

返回数组所有键值对

```js
const arr = ["a", "b", "c", "d"];
for (const [key, value] of arr.entries()) {
    console.log(key, value);
    // 0  'a'
    // 1  'b'
    // 2  'c'
    // 3  'd'
}
```

解构获取内容

```js
const hd = ['张三', '李四'];
const iterator = hd.entries();
let {done,value: [k, v]} = iterator.next();
console.log(v);//张三
```

## 扩展方法

### every

**every(function(currentValue,index,arr),thisValue) 用于递归的检测元素，要所有元素操作都符合指定条件才为 true**

```js
const user = [
    { name: "李四", js: 89 },
    { name: "马六", js: 55 },
    { name: "张三", js: 78 }
];
const resust = user.every(user => user.js >= 60);
console.log(resust);//false
```

### some

**some(function(currentValue,index,arr),thisValue) 用于递归的检测元素，如果有一个返回 true，表达式结果就是真**

```js
let words = ['vue', 'js', 'react'];
let title = '学习vue技术'
let state = words.some(function (item, index, array) {
    return title.indexOf(item) >= 0;
});
if (state) console.log('标题含有违规关键词');
```

### filter

**filter(function(currentValue,index,arr),thisValue) 创建一个新数组，过滤后的**

```js
//重写
function except(array, excepts) {
    const newArray = [];
    for (const elem of array)
        if (!excepts.includes(elem)) newArray.push(elem);
    return newArray;
}
const array = [1, 2, 3, 4];
console.log(except(array, [2, 3])); //[1,4]
```

### map

**map(function(currentValue,index,arr), thisValue) 返回一个新数组，数组中的元素为原始元素调用函数处理后的值**

```js
let lessons = [
    {title: '媒体查询响应式布局',category: 'css'},
    {title: 'FLEX 弹性盒模型',category: 'css'},
    {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];
//['媒体查询响应式布局', 'FLEX 弹性盒模型', 'MYSQL多表查询随意操作']
console.log(lessons.map(item => item.title));//
```

### reduce

使用 `reduce` 与 `reduceRight` 函数可以迭代数组的所有元素，`reduce` 从前开始 `reduceRight` 从后面开始

第一个参数是执行函数，第二个参数为初始值

- 传入第二个参数时将所有元素循环一遍
- 不传第二个参数时从第二个元素开始循环

**reduce(function(prev,cur,index,array),initialValue)**

| 参数         | 说明                                 |
| ------------ | ------------------------------------ |
| prev         | 初始值或者上次调用回调函数返回的结果 |
| cur          | 当前的元素值                         |
| index        | 当前的索引                           |
| array        | 原数组                               |
| initialValue | 传递给函数的初始值                   |

```js
function countArrayELem(array, elem) {
    return array.reduce((total, cur) => (total += cur === elem ? 1 : 0), 0);
}
let numbers = [1, 2, 3, 1, 5];
console.log(countArrayELem(numbers, 1)); //2
```

取数组中的最大值

```js
function arrayMax(array) {
    return array.reduce((max, elem) => (max > elem ? max : elem), array[0]);
}
console.log(arrayMax([1, 3, 2, 9]));
```

取价格最高的商品

```js
let cart = [
    { name: "iphone", price: 12000 },
    { name: "imac", price: 25000 },
    { name: "ipad", price: 3600 }
];
function maxPrice(array) {
    return array.reduce((goods, elem) => (goods.price > elem.price ? goods : elem), array[0]);
}
console.log(maxPrice(cart));//{name: 'imac', price: 25000}
```

计算购物车中的商品总价

```js
let cart = [
    { name: "iphone", price: 12000 },
    { name: "imac", price: 25000 },
    { name: "ipad", price: 3600 }
];
const total = cart.reduce(
    (total, goods) => total += goods.price, 0
);
console.log(total); //40600
```

获取价格超过 1 万的商品名称

```js
let goods = [
    { name: "iphone", price: 12000 },
    { name: "imac", price: 25000 },
    { name: "ipad", price: 3600 }
];
function getNameByPrice(array, price) {
    return array.reduce((goods, elem) => {
        if (elem.price > price) {
            goods.push(elem);
        }
        return goods;
    }, []).map(elem => elem.name);
}
console.table(getNameByPrice(goods, 10000));
```

使用 `reduce` 实现数组去重

```js
let arr = [1, 2, 6, 2, 1];
let filterArr = arr.reduce((pre, cur, index, array) => {
    if (pre.includes(cur) === false) {
        pre = [...pre, cur];
    }
    return pre;
}, [])
console.log(filterArr); // [1,2,6]
```

