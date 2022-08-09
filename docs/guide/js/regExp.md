# 正则表达式

## 基本知识

> 正则表达式是用于匹配字符串中字符组合的模式，在`javascript`中，正则表达式也是对象
>
> - 正则表达式是在宿主环境下运行的，如`js/php/node`等

## 创建正则

::: tip
`js`提供对象和字面量两种方式创建
:::

### 字面量创建

使用`//`包裹的字面量创建方式是推荐作法，但它不能再其中使用变量

```js
let str = "https://www.baidu.com/"
console.log(/b/.test(str));//true

//使用 l 变量
let l = "b"
console.log(/l/.test(str));//false
```

虽然使用`eval`转换为`js`语法来实现变量解析到正则中可行，但是非常麻烦，不建议使用，建议使用对象方法创建

```js
let str = "https://www.baidu.com/"
let l = "b"
console.log(eval(`/${l}/.test(str)`));//true
```

### 对象创建

```js
//对象创建
let str = "https://www.baidu.com/"
let str1 = "baidu"
let reg = new RegExp(str1);
console.log(reg.test(str));//true
```

## 选择符

**`|` 这个符号带表选择修释符，也就是 `|` 左右两侧有一个匹配到就可以**

```js
//检测电话
let tel = "010-12345678";
//错误结果：只匹配 | 左右两边任一结果
console.log(tel.match(/010|020\-\d{7,8}/));

//正确结果：所以需要放在原子组中使用
console.log(tel.match(/(010|020)\-\d{7,8}/));
```

## 字符转义 

**转义`\`用于改变字符的含义，用来对某个字符有多种语义时的处理**

```js
const url = "https://www.baidu.com/";
console.log(/https:\/\//.test(url)); //true
```

使用 `RegExp` 构建正则时在转义上会有些区别

```js
let price = 12.23;
//含义1: . 除换行外任何字符  含义2: .普通点
//含义1: d 字母d         含义2: \d 数字 0~9
console.log(/\d+\.\d+/.test(price));

//字符串中 \d 与 d 是一样的，所以在 new RegExp 时\d 即为 d
console.log("\d" === "d");

//使用对象定义正则时，可以先把字符串打印一样，结果是字面量一样的定义就对了
console.log("\\d+\\.\\d+");//\d+\.\d+
let reg = new RegExp("\\d+\\.\\d+");
console.log(reg.test(price));
```

## 字符边界

| 边界符 | 说明                         |
| ------ | ---------------------------- |
| ^      | 匹配字符串的开始             |
| $      | 匹配字符串的结束，忽略换行符 |

匹配内容必须以`www`开始

```js
const str = "www.baidu.com";
console.log(/^www/.test(str)); //true
```

匹配内容必须以`.com`结束

```js
const str = "www.baidu.com";
console.log(/\.com$/.test(str)); //true
```

检测用户名长度为 3~6 位，且只能为字母。如果不使用 `^与$` 限制将得不到正确结果

```js
document.querySelector(`[name="username"]`).addEventListener("keyup", function() {
    let res = this.value.match(/^[a-z]{3,6}$/i);
    console.log(res);
    console.log(res ? "正确" : "失败");
});
```

## 元子字符

**元字符是正则表达式中的最小元素，只代表单一（一个）字符**

### 字符列表

| 元子符 | 说明                                                | 示例          |
| ------ | --------------------------------------------------- | ------------- |
| \d     | 匹配任意一个数字                                    | [0-9]         |
| \D     | 与除了数字以外的任何一个字符匹配                    | [^0-9]        |
| \w     | 与任意一个英文字母，数字或下划线匹配                | [a-zA-Z_]     |
| \W     | 除了字母，数字或下划线与任何字符匹配                | [^a-za-z_]    |
| \s     | 任意一个空白字符匹配，如空格，制表符`\t`,换行符`\n` | [\n\f\r\t\v]  |
| \S     | 除了空白符外任意一个字符匹配                        | [^\n\f\r\t\v] |
| .      | 匹配除换行符外的任意字符                            |               |

匹配任意数字

```js
let str = "abcd 12345";
console.log(str.match(/\d/g)); //(5)['1', '2', '3', '4', '5']
```

```js
let str = `张三:010-99999999,李四:020-88888888`;
let res = str.match(/\d{3}-\d{7,8}/g);
console.log(res);//(2)['010-99999999', '020-88888888']
```

匹配任意非数字

```js
console.log(/\D/.test(2022)); //false
```

匹配字母数字下划线

```js
let str = "abc@12_";
console.log(str.match(/\w/g)); //['a', 'b', 'c', '1', '2', '_']
```

匹配除了字母,数字或下划线外与任何字符匹配

```js
console.log(/\W/.test("@")); //true
```

匹配与任意一个空白字符匹配

```js
console.log(/\s/.test(" ")); //true
console.log(/\s/.test("\n")); //true
```

匹配除了空白符外任意一个字符匹配

```js
let str = "abc@";
console.log(str.match(/\S/g)); //['a', 'b', 'c', '@']
```

使用`.`匹配除换行符外任意字符

```js
const url = `
 https://www.baidu.com
  qq.com
`;
console.log(url.match(/.+/)[0]);// https://www.baidu.com
```

使用`/s`视为单行模式（忽略换行）时，`.` 可以匹配所有

```js
let str = `
  <span>
    houdunren
    hdcms
  </span>
`;
let res = str.match(/<span>.*<\/span>/s);
console.log(res[0]);
// <span>
//   houdunren
//   hdcms
// </span>
```

正则中空格会按普通字符对待

```js
let tel = `010 - 999999`;
console.log(/\d+-\d+/.test(tel)); //false
console.log(/\d+ - \d+/.test(tel)); //true
```

### 所有字符

**可以使用 `[\s\S]` 或 `[\d\D]` 来匹配所有字符**

## 模式修饰

| 修饰符 | 说明                                         |
| ------ | -------------------------------------------- |
| i      | 不区分大小写字母的匹配                       |
| g      | 全局搜索所有匹配内容                         |
| m      | 视为多行                                     |
| s      | 视为单行忽略换行符，使用`.` 可以匹配所有字符 |
| y      | 从 `regexp.lastIndex` 开始匹配               |
| u      | 正确处理四个字符的 UTF-16 编码               |

###  i

```js
let str = "https://www.baidu.com  WWWW";
str = str.replace(/WWWW/gi, "www");
console.log(str);//https://www.baidu.com  www
```

### g

**使用 `g` 修饰符可以全局操作内容**

```js
let str = "https://www.baidu.com/";
str = str.replace(/\./, "@");
console.log(str); //https://www@baidu.com/  没有使用 g 修饰符是，只替换了第一个
//全局
let str = "https://www.baidu.com/";
str = str.replace(/\./g, "@");
console.log(str); //https://www@baidu@com/  没有使用 g 修饰符是，只替换了第一个
```

### m

用于将内容视为多行匹配，主要是对 `^`和 `$` 的修饰

```js
"use strict";
let str = `
  #1 js,200元 #
  #2 php,300元 #
  #9 vue # 298
  #3 node.js,180元 #
`;
// [{name:'js',price:'200元'}]
let lessons = str.match(/^\s*#\d+\s+.+\s+#$/gm).map(v => {
    v = v.replace(/\s*#\d+\s*/, "").replace(/\s+#/, "");
    let [name, price] = v.split(",");
    return { name, price };
});
console.log(JSON.stringify(lessons, null, 2));
// [
//   {
//     "name": "js",
//     "price": "200元"
//   },
//   {
//     "name": "php",
//     "price": "300元"
//   },
//   {
//     "name": "node.js",
//     "price": "180元"
//   }
// ]
```

###  u

每个字符都有属性，如`L`属性表示是字母，`P` 表示标点符号，需要结合 `u` 模式才有效。其他属性简写可以访问 [属性的别名 (opens new window)](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt)网站查看

```js
//使用\p{L}属性匹配字母
let str = "vue20222！";
console.log(str.match(/\p{L}+/u));//['vue', index: 0, input: 'vue20222！', groups: undefined]

//使用\p{P}属性匹配标点
console.log(str.match(/\p{P}+/gu));//['！']
```

字符也有 unicode 文字系统属性 `Script=文字系统`，下面是使用 `\p{sc=Han}` 获取中文字符 `han`为中文系统，其他语言请查看 [文字语言表](http://www.unicode.org/standard/supported.html)

```js
let hd = `
张三:010-99999999,李四:020-88888888`;
let res = hd.match(/\p{sc=Han}+/gu);
console.log(res);//(2)['张三', '李四']
```

使用 `u` 模式可以正确处理四个字符的 UTF-16 字节编码

```js
let str = "𝒳𝒴";
console.table(str.match(/[𝒳𝒴]/)); //结果为乱字符"�"
console.table(str.match(/[𝒳𝒴]/u)); //结果正确 "𝒳"
```

### lastIndex

RegExp 对象`lastIndex` 属性可以返回或者设置正则表达式开始匹配的位置

- 必须结合 `g` 修饰符使用
- 对 `exec` 方法有效
- 匹配完成时，`lastIndex` 会被重置为 0

### y

对比使用 `y` 与`g` 模式，使用 `g` 模式会一直匹配字符串

```js
let str = "abcdefsaasd";
let reg = /s/g;
console.log(reg.exec(str));//['s', index: 6, input: 'abcdefsaasd', groups: undefined]
console.log(reg.lastIndex); //7
console.log(reg.exec(str));//['s', index: 9, input: 'abcdefsaasd', groups: undefined]
console.log(reg.lastIndex); //10
console.log(reg.exec(str)); //null
console.log(reg.lastIndex); //0
```

但使用`y` 模式后如果从 `lastIndex` 开始匹配不成功就不继续匹配了

```js
let str = "abcdefsaasd";
let reg = /s/y;
console.log(reg.exec(str));//null
console.log(reg.lastIndex); //0
console.log(reg.exec(str)); //null
console.log(reg.lastIndex); //0
```

因为使用 `y` 模式可以在匹配不到时停止匹配，在匹配下面字符中的 qq 时可以提高匹配效率

```js
let str = `QQ群:111111,22222,33333`;
let reg = /(\d+),?/y;
reg.lastIndex = 4;
while ((res = reg.exec(str))) console.log(res[1]);
```

##  原子表

在一组字符中匹配某个元字符，在正则表达式中通过元字符表来完成，就是放到`[]` (方括号)中

### 语法

| 原子表 | 说明                               |
| ------ | ---------------------------------- |
| []     | 只匹配其中的一个原子               |
| [^]    | 只匹配"除了"其中字符的任意一个原子 |
| [0-9]  | 匹配 0-9 任何一个数字              |
| [a-z]  | 匹配小写 a-z 任何一个字母          |
| [A-Z]  | 匹配大写 A-Z 任何一个字母          |

**使用`[]`匹配其中任意字符即成功**

```js
const url = "https://www.baidu.com";
console.log(/ab/.test(url)); //false
console.log(/[ab]/.test(url)); //true
```

**日期的匹配**

```js
let tel = "2022-02-23";
console.log(tel.match(/\d{4}([-\/])\d{2}\1\d{2}/));
```

**获取`0~3`间的任意数字**

```js
const num = "2";
console.log(/[0-3]/.test(num)); //true
```

**匹配`a~f`间的任意字符**

```js
const str = "e";
console.log(/[a-f]/.test(str)); //true
```

**顺序为升序否则将报错**

```js
const num = "2";
console.log(/[3-0]/.test(num)); //SyntaxError
```

**字母也要升序否则也报错**

```js
const hd = "e";
console.log(/[f-a]/.test(hd)); //SyntaxError
```

**获取所有用户名**

```js
let str = `
张三:010-99999999,李四:020-88888888`;
let res = str.match(/[^:\d-,]+/g);
console.log(res);//(2)['\n张三', '李四']
```

原子表中有些正则字符不需要转义，如果转义也是没问题的，可以理解为在原子表中`.` 就是小数点

**可以使用 `[\s\S]` 或 `[\d\D]`匹配到所有字符包括换行符**

```js
const reg = /[\s\S]+/g;
```

## 原子组

- 如果一次要匹配多个元子，可以通过元子组完成
- 原子组与原子表的差别在于原子组一次匹配多个元子，而原子表则是匹配任意一个字符
- 元字符组用 `()` 包裹

### 基本使用

没有添加 `g` 模式修正符时只匹配到第一个，匹配到的信息包含以下数据

| 变量    | 说明             |
| ------- | ---------------- |
| 0       | 匹配到的完整内容 |
| 1,2.... | 匹配到的原子组   |
| index   | 原字符串中的位置 |
| input   | 原字符串         |
| groups  | 命名分组         |

在`match`中使用原子组匹配，会将每个组数据返回到结果中

- 0 为匹配到的完成内容
- 1/2 等 为原子级内容
- index 匹配的开始位置
- input 原始数据
- groups 组别名

```js
let str = "/www.baidu.com";
console.log(str.match(/www\.(baidu)\.(com)/));
//['www.baidu.com', 'baidu', 'com', index: 1, input: '/www.baidu.com', groups: undefined]
```

使用原子组匹配标题元素

```js
let str = `
  <h1>张三</h1>
  <span>李四</span>
  <h2>王五</h2>
`;
console.table(str.match(/<(h[1-6])[\s\S]*<\/\1>/g)); //<h1>张三</h1> <h2>王五</h2>'
```

检测 `0~100` 的数值，使用 `parseInt` 将数值转为 10 进制

```js
console.log(/^(\d{1,2}|100)$/.test(parseInt(09, 10)));//true
```

### 邮箱匹配

```js
let str = "2300071698@qq.com";
let reg = /^[\w\-]+@[\w\-]+\.(com|org|cn|cc|net)$/i;
console.dir(str.match(reg));

let str = `admin@abcd.com.cn`;
let reg = /^[\w-]+@([\w-]+\.)+(org|com|cc|cn)$/;
console.log(str.match(reg));
```

### 引用分组

`\n` 在匹配时引用原子组， `$n` 指在替换时使用匹配的组数据。下面将标签替换为`p`标签

```js
let str = `
  <h1>张三</h1>
  <span>李四</span>
  <h2>王五</h2>
`;
let reg = /<(h[1-6])>([\s\S]*)<\/\1>/gi;
console.log(str.replace(reg, `<p>$2</p>`));
```

###  分组别名

如果希望返回的组数据更清晰，可以为原子组编号，结果将保存在返回的 `groups`字段中

```js
let str = "<h1>www.baidu.com</h1>";
console.dir(str.match(/<(?<tag>h[1-6])[\s\S]*<\/\1>/));
```

组别名使用 `?<>` 形式定义，下面将标签替换为`p`标签

```js
let str = `
  <h1>张三</h1>
  <span>李四</span>
  <h2>王五</h2>
`;
let reg = /<(?<tag>h[1-6])>(?<con>[\s\S]*)<\/\1>/gi;
console.log(str.replace(reg, `<p>$<con></p>`));
```

## 重复匹配

### 基本使用

如果要重复匹配一些内容时我们要使用重复匹配修饰符，包括以下几种

| 符号  | 说明              |
| ----- | ----------------- |
| *     | 重复零次或更多次  |
| +     | 重复一次或更多次  |
| ?     | 重复零次或一次    |
| {n}   | 重复 n 次         |
| {n,}  | 重复 n 次或更多次 |
| {n,m} | 重复 n 到 m 次    |

默认情况下重复选项对单个字符进行重复匹配，即不是贪婪匹配

```js
let str = "strddd";
console.log(str.match(/str+/i)); //strdd
```

使用原子组后则对整个组重复匹配

```js
let str = "strddd";
console.log(str.match(/(str)+/i)); //str
//验证坐机号的正则
let str = "010-12345678";
console.log(/0\d{2,3}-\d{7,8}/.exec(str));
//['010-12345678', index: 0, input: '010-12345678', groups: undefined]
```

```js
//3~8 位的字母或数字，并以字母开始
let state = /^[a-z][\w]{2,7}$/i.test(value);
//验证密码必须包含大写字母并在 5~10 位之间
const regs = [/^[a-zA-Z0-9]{5,10}$/, /[A-Z]/];
```

### 禁止贪婪

正则表达式在进行重复匹配时，默认是贪婪匹配模式，也就是说会尽量匹配更多内容，但是有的时候我们并不希望他匹配更多内容，这时可以通过?进行修饰来禁止重复匹配

| 使用   | 说明                              |
| ------ | --------------------------------- |
| *?     | 重复任意次，但尽可能少重复        |
| +?     | 重复 1 次或更多次，但尽可能少重复 |
| ??     | 重复 0 次或 1 次，但尽可能少重复  |
| {n,m}? | 重复 n 到 m 次，但尽可能少重复    |
| {n,}?  | 重复 n 次以上，但尽可能少重复     |

```js
let str = "aaa";
console.log(str.match(/a+/)); //aaa
console.log(str.match(/a+?/)); //a
console.log(str.match(/a{2,3}?/)); //aa
console.log(str.match(/a{2,}?/)); //aa
```

将所有 span 更换为`h4` 并描红

```js
const main = document.querySelector("main");
const reg = /<span>([\s\S]+?)<\/span>/gi;
main.innerHTML = main.innerHTML.replace(reg, (v, p1) => {
    console.log(p1);
    return `<h4 style="color:red">name:${p1}</h4>`;
});
```

## 全局匹配

### 问题分析

使用`match` 全局获取页面中标签内容，但并不会返回匹配细节

### matchAll

**在新浏览器中支持使用 `matchAll` 操作，并返回迭代对象**

*需要添加 `g` 修饰符*

```js
let str = "www.baidu.com";
let reg = /[a-z]/ig;
for (const iterator of str.matchAll(reg)) {
    console.log(iterator);
}
```

在原型定义 `matchAll`方法，用于在旧浏览器中工作，不需要添加`g` 模式运行

```js
String.prototype.matchAll = function(reg) {
    let res = this.match(reg);
    if (res) {
        let str = this.replace(res[0], "^".repeat(res[0].length));
        let match = str.matchAll(reg) || [];
        return [res, ...match];
    }
};
let str = "www.baidu.com";
console.dir(str.matchAll(/(U)/i));
```

### exec

使用 `g` 模式修正符并结合 `exec` 循环操作可以获取结果和匹配细节

```js
function search(string, reg) {
    const matchs = [];
    while ((data = reg.exec( string))) {
        matchs.push(data);
    }
    return matchs;
}
console.log(search(document.body.innerHTML, /<(h[1-6])>[\s\S]+?<\/\1>/gi));
```

## 字符方法

### search

search() 方法用于检索字符串中指定的子字符串，也可以使用正则表达式搜索，返回值为索引位置

```js
let str = "https://www.baidu.com";
console.log(str.search("com"));//18
console.log(str.search(/\.com/i));//17
```

### match

直接使用字符串搜索

```js
let str = "https://www.baidu.com";
console.log(str.match("com"));
//['com', index: 18, input: 'https://www.baidu.com', groups: undefined]
```

使用正则获取内容，下面是简单的搜索字符串

```js
let str = "https://www.baidu.com";
let res = str.match(/u/);
console.log(res);//['u', index: 17, input: ' https://www.baidu.com', groups: undefined]
console.log(res[0]); //匹配的结果  u
console.log(res[17]); //undefined
```

如果使用 `g` 修饰符时，就不会有结果的详细信息了（可以使用 exec），下面是获取所有 h1~6 的标题元素

```js
let body = document.body.innerHTML;
let result = body.match(/<(h[1-6])>[\s\S]+?<\/\1>/g);
console.table(result);
```

### matchAll

在新浏览器中支持使用 `matchAll` 操作，并返回迭代对象

```js
let str = "https://www.baidu.com";
let reg = /[a-z]/ig;
for (const iterator of str.matchAll(reg)) {
    console.log(iterator);
}
```

### split

用于使用字符串或正则表达式分隔字符串，下面是使用字符串分隔日期

```js
let str = "2023-02-12";
console.log(str.split("-")); //["2023", "02", "12"]
```

如果日期的连接符不确定，那就要使用正则操作了

```js
let str = "2023/02-12";
console.log(str.split(/-|\//));//['2023', '02', '12']
```

### replace

`replace` 方法不仅可以执行基本字符替换，也可以进行正则替换，下面替换日期连接符

```js
let str = "2023/02/12";
console.log(str.replace(/\//g, "-")); //2023-02-12
```

| 变量 | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| `$$` | 插入一个 "$"。                                               |
| `$&` | 插入匹配的子串。                                             |
| $`   | 插入当前匹配的子串左边的内容。                               |
| `$'` | 插入当前匹配的子串右边的内容。                               |
| `$n` | 假如第一个参数是 `RegExp` 对象，并且 n 是个小于 100 的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从 1 开始 |

```js
let str = "+张三=";
console.log(str.replace(/张三/g, "$`$`$&$'$'"));//+++张三===
```

把电话号用 `-` 连接

```js
let str = "(010)99999999 (020)8888888";
console.log(str.replace(/\((\d{3,4})\)(\d{7,8})/g, "$1-$2"));//010-99999999 020-8888888
```

把所有`教育`汉字加上链接 ` https://www.baidu.com`

```js
const body = document.body;
body.innerHTML = body.innerHTML.replace(
    /教育/g,
    `<a href="https://www.baidu.com">$&</a>`
);
```

将标题标签全部替换为 `p` 标签

```js
const reg = /<(h[1-6])>(.*?)<\/\1>/g;
const body = document.body.innerHTML;
const html = body.replace(reg, function(str, tag, content) {
    return `<p>${content}</p>`;
});
document.body.innerHTML = html;
```

删除页面中的 `h1~h6` 标签

```js
const reg = /<(h[1-6])>(.*?)<\/\1>/g;
const body = document.body.innerHTML;
const html = body.replace(reg, "");
document.body.innerHTML = html;
```

**回调函数**

replace 支持回调函数操作，用于处理复杂的替换逻辑

| 变量名            | 代表的值                                                     |
| ----------------- | ------------------------------------------------------------ |
| `match`           | 匹配的子串。（对应于上述的$&。）                             |
| `p1,p2, ...`      | 假如 replace()方法的第一个参数是一个 `RegExp` 对象，则代表第 n 个括号匹配的字符串。（对应于上述的$1，$2 等。）例如，如果是用 `/(\a+)(\b+)/` 这个来匹配，`p1` 就是匹配的 `\a+`，`p2` 就是匹配的 `\b+`。 |
| `offset`          | 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 `'abcd'`，匹配到的子字符串是 `'bc'`，那么这个参数将会是 1） |
| `string`          | 被匹配的原字符串。                                           |
| NamedCaptureGroup | 命名捕获组匹配的对象                                         |

## 正则方法

###  test

检测输入的邮箱是否合法

```js
<input type="text" name="email" />
let email = document.querySelector(`[name="email"]`);
email.addEventListener("keyup", e => {
    console.log(/^\w+@\w+\.\w+$/.test(e.target.value));
});
```

###  exec

不使用 `g` 修饰符时与 `match` 方法使用相似，使用 `g` 修饰符后可以循环调用直到全部匹配完

- 使用 `g` 修饰符多次操作时使用同一个正则，即把正则定义为变量使用
- 使用 `g` 修饰符最后匹配不到时返回 `null`

计算内容中后盾人出现的次数

```js
<div class="content">
    基于一流标准 HTML、CSS 和 JavaScript 构建，提供一流容易上手的 API 和一流的文档
</div>
let content = document.querySelector(".content");
let reg = /(?<tag>一流)/g;
let num = 0;
while ((result = reg.exec(content.innerHTML))) {
    num++;
}
console.log(`共出现${num}次`);//3
```

## 断言匹配

断言虽然写在扩号中但它不是组，所以不会在匹配结果中保存，可以将断言理解为正则中的条件

### (?=exp)

**零宽先行断言** `?=exp` 匹配后面为 `exp` 的内容

```js
<main>
  基于一流标准 HTML、CSS 和 JavaScript 构建，提供一流容易上手的 API 和一流的文档
      </main>
const main = document.querySelector("main");
const reg = / 基于(?=一流)/gi;
main.innerHTML = main.innerHTML.replace(
    reg,
    v => `<a href="https://www.baidu.com">${v}</a>`
);
```

将价格后面 添加上 `.00`

```js
let lessons = `
  js,200元,12次
  php,300.00元,11次
  node.js,180元,22次
`;
let reg = /(\d+)(.00)?(?=元)/gi;
lessons = lessons.replace(reg, (v, ...args) => {
    args[1] = args[1] || ".00";
    return args.splice(0, 2).join("");
});
console.log(lessons);
```

使用断言验证用户名必须为五位，下面正则体现断言是不是组，并且不在匹配结果中记录

```html
<body>
    <input type="text" name="username" />
</body>

<script>
    document.querySelector(`[name="username"]`).addEventListener("keyup", function() {
        let reg = /^(?=[a-z]{5}$)/i;
        console.log(reg.test(this.value));
    });
</script>
```

### (?<=exp)

**零宽后行断言** `?<=exp` 匹配前面为 `exp` 的内容

匹配前面是abc 的数字

```js
let str = "abc123def666";
let reg = /(?<=abc)\d+/i;
console.log(str.match(reg)); //['123', index: 3, input: 'abc789def666', groups: undefined]
```

匹配前后都是数字的内容

```js
let str = "abc123def666";
let reg = /(?<=\d)[a-z]+(?=\d{3})/i;
console.log(str.match(reg));//['def', index: 6, input: 'abc123def666', groups: undefined]
```

所有超链接替换为`https://www.baidu.com`

```js
const body = document.body;
let reg = /(?<=<a.*href=(['"])).+?(?=\1)/gi;
// console.log(body.innerHTML.match(reg));
body.innerHTML = body.innerHTML.replace(reg, "https://www.baidu.com");
```

将电话的后四位模糊处理

```js
let users = `
  张三: 12345678901
  李四: 98745675603
`;
let reg = /(?<=\d{7})\d+\s*/g;
users = users.replace(reg, str => {
    return "*".repeat(4);
});
console.log(users); //张三: 1234567****李四: 9874567****
```

获取标题中的内容

```js
let str = `<h1>基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API 和一流的文档</h1>`;
let reg = /(?<=<h1>).*(?=<\/h1>)/g;
console.log(str.match(reg));//['基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API 和一流的文档']
```

### (?!exp)

**零宽负向先行断言** 后面不能出现 `exp` 指定的内容

使用 `(?!exp)`字母后面不能为两位数字

```js
let str = "abc123";
let reg = /[a-z]+(?!\d{2})$/i;
console.table(reg.exec(str));//null
```

### (?<!exp)

**零宽负向后行断言** 前面不能出现 exp 指定的内容

获取前面不是数字的字符

```js
let str = "abc99abc";
let reg = /(?<!\d+)[a-z]+/i;
console.log(reg.exec(str)); //['abc', index: 0, input: 'abc99abc', groups: undefined]
```
