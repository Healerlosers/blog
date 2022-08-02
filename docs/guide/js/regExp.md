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

