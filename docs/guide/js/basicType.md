# 基本类型

## 类型检测

### typeof

:::tip

`typeof` 用于返回以下原始类型

`typeof` 用于返回以下原始类型

- 基本类型：number/string/boolean
- function
- object
- undefined

:::

```js
//可以使用 typeof 用于判断数据的类型
let a = 1;
console.log(typeof a); //number
let b = "1";
console.log(typeof b); //string
//未赋值或不存在的变量返回undefined
var und;
console.log(typeof und);//undefined
function run() {}
console.log(typeof run); //function

console.log(typeof c); //object
let d = { name: "张三" };
console.log(typeof d); //object
```

### instanceof

:::tip

也可以理解为是否为某个对象的实例，`typeof`不能区分数组，但`instanceof`则可以

**`instanceof`** 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

:::

```js
let arr = [];
let obj = {};
console.log(arr instanceof Array); //true
console.log(obj instanceof Array); //false
let c = [1, 2, 3];
console.log(c instanceof Array); //true
let d = { name: "张三" };
console.log(d instanceof Object); //true

function User() {}
let hd = new User();
console.log(hd instanceof User); //true
```

### 值类型与对象

使用字面量与对象方法创建字符串，返回的是不同类型

```js
let str = "张三";
let str1 = new String("李四");
console.log(typeof str, typeof str1); //string object
```

只有对象才有方法使用，但在`JS`中也可以使用值类型调用方法，因为它会在执行时将值类型转为对象

```js
let str1 = "zhangsan";
let str2 = new String("lisi");
console.log(str1.length); //8
console.log(str2.length); //4
```

## String

字符串类型是使用非常多的数据类型，也是相对简单的数据类型

> 字符串使用单、双引号包裹，单、双引号使用结果没有区别

### 声明定义

```js
//使用对象创建字符串
new String()
```

### 获取长度

**使用`length`属性可以获取字符串长度**

```js
console.log("lisi".length)
```

### 大小写转换

**将字符转换成大写格式**

```js
toUpperCase() //字符转换为大写格式
toLowerCase() //字符串转为小写格式
```

### 移除空白

**使用`trim`删除字符串左右的空白字符**

> 使用`trimLeft`删除左边空白，使用`trimRight`删除右边空白

```js
let str = '   lisi  ';
console.log(str.length);//9
console.log(str.trim().length);//4
```

### 获取单字符

根据从 0 开始的位置获取字符

```js
console.log('lisi'.charAt(3))
//使用数字索引获取字符串
console.log('lisi'[3])

//返回指定位置的字符的Unicode编码，返回值是0-65535之间的整数，表示给定索引处的UTF-16代码单元
chartCodeAt(index) 
//返回一个 Unicode 编码点值的非负整数
codePointAt() 
```

### 截取字符串

使用 `slice、substr、substring` 函数都可以截取字符串。

- slice、substring 第二个参数为截取的结束位置
- substr 第二个参数指定获取字符数量

**slice(start,end)**

:::tip

提取字符串的某个部分，并以新的字符串返回被提取的部分，start(包含)，end(不包含)，为负数则最后一个字符开始

:::

**substring(from,to)**

:::tip

提取字符串介于两个指定下标之间的字符，不包含结束处的字符，左闭右开，非负整数

:::

**substr(start,length)**

:::tip

可在字符串中提取从开始的指定数目的字符，指定字符串的开始位置和长度

:::

### 查找字符串

**indexOf(searchval,start)**

返回某个指定的字符串中首次出现的位置，如果没有找到匹配的字符串，则返回`-1`

```js
console.log('zhangsanlisi'.indexOf('o')); //-1
console.log('zhangsanlisi'.indexOf('s', 3)); //4 从第3个字符向后搜索
```

**lastIndexOf(searchval,start)**

从结尾来搜索字符串位置

```js
console.log('zhangsanlisi'.indexOf('l')); //8
console.log('zhangsanlisi'.indexOf('l',9)); //-1
```

**search(searchval)**

方法用于检索字符串中指定的子字符串，也可以使用正则表达式搜索

```js
let str = "zhangsan";
console.log(str.search("san"));//5
console.log(str.search(/an/i));//2
```

**includes(searchval,start)**

字符串中是否包含指定的值，第二个参数指查找开始位置，返回 boolean

```js
console.log('zhangsan'.includes('s')); //true
console.log('zhangsan'.includes('h', 2)); //false
```

**startWidth(searchval,start)**

检测字符串是否以指定的子字符串开始 ，第二个参数为查找的开始位置,返回 boolean

```js
console.log('zhangsan'.startsWith('z')); //true
console.log('zhangsan'.startsWith('a', 2)); //true
```

**endSidth(searchval,start)**

检测当前字符串是否是以子字符串结尾的 返回 boolean

```js
console.log('zhangsan'.endsWith('n')); //true
console.log('zhangsan'.endsWith('s', 6)); //true
```

### 替换字符串

**replace(searchval,newval)**

在字符串中用一些字符替换另一些字符，或匹配一个与正则表达式匹配的字符

```js
let name = "https://www.baidu.com/";
str = name.replace("https", "http");
console.log(str);//http://www.baidu.com/
```

###  重复生成

**repeat(num)**

据参数重复生成星号

```js
function star(num = 3) {
    return '*'.repeat(num);
}
console.log(star());//***

//电话后三位
let phone = "1555345346";
console.log(phone.slice(0, -3) + "*".repeat(3));
```

```js
//解析一个字符串  返回一个整数
parseInt(string,radix) 
//转为字符串
String(val) 
//检索返回一个字符串匹配正则表达式的结果
match(regexp) 
//返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器.
matchAll(regexp) 
//返回一个新字符串，新字符串所有满足 pattern 的部分都已被replacement 替换
//pattern可以是一个字符串或一个 RegExp， replacement可以是一个字符串或一个在每次匹配被调用的函数
replaceAll(regexp|substr, newSubstr|function)
//根据任何指定区域语言环境设置的大小写映射，返回调用字符串被转换为小写的格式
toLocaleLowerCase() 
//根据本地主机语言环境把字符串转换为大写格式，并返回转换后的字符串
toLocaleUpperCase() 
```



### 类型转换

**split(separator,limit)**

把一个字符串分割成字符串数组，不改变原始数组，返回值为数组

## Boolean

布尔类型包括 `true` 与 `false` 两个值，开发中使用较多的数据类型

### 声明定义

使用对象形式创建布尔类型

```js
console.log(new Boolean(true)); //true
console.log(new Boolean(false)); //false
```

但建议使用字面量创建布尔类型

```js
let bol =true;
```

### 隐式转换

| 数据类型  | true             | false            |
| --------- | ---------------- | ---------------- |
| String    | 非空字符串       | 空字符串         |
| Number    | 非 0 的数值      | 0 、NaN          |
| Array     | 数组不参与比较时 | 参与比较的空数组 |
| Object    | 所有对象         |                  |
| undefined | 无               | undefined        |
| null      | 无               | null             |
| NaN       | 无               | NaN              |

> - 当与 boolean 类型比较时，会将两边类型统一为数字 1 或 0
> - 如果使用 Boolean 与数值比较时，会进行隐式类型转换 true 转为 1，false 转为 0

**符串在与 Boolean 比较时，两边都为转换为数值类型后再进行比较**

```js
console.log(Number("zhangsan")); //NaN
console.log(Boolean("zhangsan")); //true
console.log("zhangsan" == true); //false
console.log("1" == true); //true
```

**数组的表现与字符串原理一样，会先转换为数值**

```js
console.log(Number([])); //0
console.log(Number([1])); //1
console.log(Number([1, 2, 3])); //NaN
console.log([] == false); //true
console.log([1] == true); //true
console.log([1, 2, 3] == true); //false
```

**引用类型的 Boolean 值为真，如对象和数组**

```js
if ([]) console.log("true");
if ({}) console.log("true");
```

### 显式转换

**使用 `!!` 转换布尔类型**

```js
let str = '';
console.log(!!str); //false
str = 0;
console.log(!!str); //false
str = null;
console.log(!!str); //false
str = new Date("2020-2-22 10:33");
console.log(!!str); //true
```

**使用 `Boolean` 函数可以显式转换为布尔类型**

```js
let str = '';
console.log(Boolean(str)); //false
str = 0;
console.log(Boolean(str)); //false
str = null;
console.log(Boolean(str)); //false
str = new Date("2020-2-22 10:33");
console.log(Boolean(str)); //true
```

## Number

### 声明定义

```js
let num = new Number(1);
console.log(num+1); //2
```

Number 用于表示整数和浮点数，数字是 `Number`实例化的对象，可以使用对象提供的丰富方法

```js
let num = 99;
console.log(typeof num);//number
```

### 基本函数

判断是否为整数

```js
console.log(Number.isInteger(1.2));//false
//指定返回的小数位数可以四舍五入
console.log((16.556).toFixed(2)); // 16.56
//提取字符串开始去除空白后的数字转为整数
parseInt()
//转换字符串为浮点数，忽略字符串前面的空白字符
parseFloat()
```

### NaN

表示无效的数值,NaN 不能使用 `==` 比较,可以使用 `Object.is` 方法判断两个值是否完全相同

```js
let res = 2 / 'num';
console.log(Object.is(res, NaN));//true
```

### 类型转换

**Number**

使用 Number 函数基本上可以转换所有类型

```js
console.log(Number('number')); //NaN
console.log(Number(true));	//1
console.log(Number(false));	//0
console.log(Number('1'));	//1
console.log(Number([]));	//0
console.log(Number([1]));	//1
console.log(Number([5, 2]));	//NaN
console.log(Number({}));	//NaN
```

**parseInt**

提取字符串开始去除空白后的数字转为整数

```js
console.log(parseInt('  12'));	//99
console.log(parseInt('18.55'));	//18
```

**parseFloat**

```js
console.log(parseFloat('  99number'));	//99
console.log(parseFloat('18.55'));	//18.55
```

### 舍入操作

**使用 `toFixed` 可对数值舍入操作，参数指定保存的小数位**

### 浮点精度

大部分编程语言在浮点数计算时都会有精度误差问题，下面来看 JS 中的表现形式

```js
let hd = 0.1 + 0.2
console.log(hd)// 结果：0.30000000000000004
```

这是因为计算机以二进制处理数值类型，上面的 0.1 与 0.2 转为二进制后是无穷的

```js
console.log((0.1).toString(2)) //0.0001100110011001100110011001100110011001100110011001101
console.log((0.2).toString(2)) //0.001100110011001100110011001100110011001100110011001101
```

**处理方式**

一种方式使用 toFixed 方法进行小数截取

```js
console.log((0.1 + 0.2).toFixed(2)) //0.3
console.log(1.0 - 0.9) //0.09999999999999998
console.log((1.0 - 0.9).toFixed(2)) //0.10
```

将小数转为整数进行计算后，再转为小数也可以解决精度问题

```js
Number.prototype.add = function (num) {
	//取两个数值中小数位最大的
  let n1 = this.toString().split('.')[1].length
  let n2 = num.toString().split('.')[1].length
  //得到10的N次幂
  let m = Math.pow(10, Math.max(n1, n2))
  return (this * m + num * m) / m
}
console.log((0.1).add(0.2))
```

**推荐做法**

市面上已经存在很多针对数学计算的库 [mathjs (opens new window)](https://mathjs.org/examples/browser/basic_usage.html.html)、[decimal.js (opens new window)](http://mikemcl.github.io/decimal.js)等，我们就不需要自己构建了。下面来演示使用 [decimal.js (opens new window)](http://mikemcl.github.io/decimal.js)进行浮点计算

## Math

`Math` 对象提供了众多方法用来进行数学计算，下面我们介绍常用的方法，更多方法使用请查看 [MDN 官网 (opens new window)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)了解

### 取极限值

**使用 `min` 与 `max` 可以取得最小与最大值**

```js
console.log(Math.min(1, 2, 3));//1
console.log(Math.max(1, 2, 3));//3
```

**使用`apply` 来从数组中取值**

```js
console.log(Math.max.apply(Math, [1, 2, 3]));
```

### 舍入处理

**Math.ceil()取最接近的向上整数**

**Math.floor()得到最接近的向下整数**

**Math.round()四舍五入处理**

**Math.trunc()将数字的小数部分去掉，只保留整数部分**

### random

**`random` 方法用于返回 >=0 且 <1 的随机数（包括 0 但不包括 1）**

```js
//返回 0~5 的随机数，不包括 5
Math.floor(Math.random() * 5)
//返回 0~5 的随机数，包括 5
Math.floor(Math.random() * (5+1))
```

:::tip

- 取 2~5 的随机数（不包括 5）公式为：min+Math.floor(Math.random()*(Max-min))
- 取 2~5 的随机数（包括 5）公式为：min+Math.floor(Math.random()*(Max-min+1))

:::

##  Date

### 声明日期

| Date()            | 返回当日的日期和时间。                      |
| ----------------- | ------------------------------------------- |
| getDate()         | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。 |
| getDay()          | 从 Date 对象返回一周中的某一天 (0 ~ 6)。    |
| getMonth()        | 从 Date 对象返回月份 (0 ~ 11)。             |
| getFullYear()     | 从 Date 对象以四位数字返回年份。            |
| getYear()         | 请使用 getFullYear() 方法代替。             |
| getHours()        | 返回 Date 对象的小时 (0 ~ 23)。             |
| getMinutes()      | 返回 Date 对象的分钟 (0 ~ 59)。             |
| getSeconds()      | 返回 Date 对象的秒数 (0 ~ 59)。             |
| getMilliseconds() | 返回 Date 对象的毫秒(0 ~ 999)。             |
| getTime()         | 返回 1970 年 1 月 1 日至今的毫秒数。        |

计算脚本执行时间

```js
const start = Date.now();
for (let i = 0; i < 2000000; i++) {}
const end = Date.now();
console.log(end - start);
```

使用控制台测试

```js
console.time("testFor");
for (let i = 0; i < 20000000; i++) {}
console.timeEnd("testFor");
```

### 类型转换

将日期转为数值类型就是转为时间戳单位是毫秒

```js
let date = new Date("2022-8-02 11:11:11");
console.log(date * 1);
console.log(Number(date));
console.log(date.valueOf())
console.log(date.getTime());
```

有时后台提供的日期为时间戳格式，下面是将时间戳转换为标准日期的方法

```js
const param = [1990, 2, 22, 13, 22, 19];
const date = new Date(...param);
const timestamp = date.getTime();
console.log(timestamp);
console.log(new Date(timestamp));
```

### 封装

```js
function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
    const config = {
        YYYY: date.getFullYear(),
        MM: date.getMonth() + 1,
        DD: date.getDate(),
        HH: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds()
    };
    for (const key in config) {
        format = format.replace(key, config[key]);
    }
    return format;
}
console.log(dateFormat(new Date(), "YYYY年MM月DD日"));//2022年8月2日
```

### moment.js

Moment.js 是一个轻量级的 JavaScript 时间库，它方便了日常开发中对时间的操作，提高了开发效率。

更多使用方法请访问中文官网 [http://momentjs.cn (opens new window)](http://momentjs.cn/)或 英文官网 [https://momentjs.com](https://momentjs.com/)