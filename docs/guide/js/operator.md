# 运算符与流程控制

## 

## 赋值运算符

使用 `=` 进行变量赋值

## 算术运算符

| 运算符 | 说明   |
| ------ | ------ |
| *      | 乘法   |
| /      | 除法   |
| +      | 加法   |
| -      | 减法   |
| %      | 取余数 |

## 复合运算符

可以使用 `*=、/=、+=、-=、%=` 简写算术运算。即 `n*=2` 等同于 `n=n*2`

`n+=3` 是 `n=n+3` 的简写形式

## 一元运算符

### 前置操作

```js
//前置操作会在表达式最先执行,++n 就是 n=n+1 的简写形式
let n = 1;
++n
console.log(n);//2
--n
console.log(n);//1
```

**使用前置操作符，`++n` 会在最先执行，所以 f 的结果是 4**

```js
let n = 1;
let f = 2 + ++n;
console.log(f);//4
```

### 后置操作

```js
//后置操作会在表达式最后执行
let n = 1;
n++
console.log(n);//2
```

**使用后置操作符，`n++` 会在最后执行，所以 f 的结果是 3**

```js
let n = 1;
let f = 2 + n++;
console.log(f);//3

//计算
let a = 1;
b = a++ + 2;
console.log(b); //3
```

## 比较运算符

| 运算符 | 说明               |
| ------ | ------------------ |
| >      | 大于               |
| <      | 小于               |
| >=     | 大于或等于         |
| <=     | 小于等于           |
| ==     | 强制类型转换比较   |
| ===    | 不强制类型转换比较 |

## 逻辑运算符

###  逻辑与

使用 `&&` 符号表示逻辑与，指符号两端都为 true 时表达式结果为 true

```js
let a = true,b = true;
if (a && b) {
    console.log('表达式成立');
}
```

### 逻辑或

使用 `||` 符号表示逻辑或，指符号左右两端有一方为 true，表达式即成立

```js
let a = true,b = false;
if (a || b) {
    console.log('表达式成立');
}
```

### 逻辑非

使用 `!` 符号表示逻辑非，即原来是 true 转变为 false，反之亦然

```js
let a = true,b = false;
if (a && !b) {
    console.log('表达式成立');
}
```

### 优先级

下列中因为 `&&` 的优先级高所以结果是 `true`，可以使用 `()` 来提高优先级

```js
console.log(true || false && false);
```

### 短路运算

下例中 `a` 为真值，就已经知道结果了就不会再判断 `f` 的值了

```js
let a = true,f = false;
console.log(a || f);
```

同理当 `f` 值为假时，就已经可以判断 `&&` 的结果了，就没有判断 `a`的必要了

```js
let a = true,f = false;
console.log(f && a);
```

使用短路特性赋值

```js
let sex = prompt("你的性别是？") || "保密";
console.log(sex);
```

## if

当条件为真时执行表达式代码块

```js
let state = true;
if (true) {
    console.log('表达式成立');
}
```

## if/else

## 三元表达式

是针对 `if` 判断的简写形式

```js
let f = true ? (1 == true ? 'yes' : 'no') : 3;
```

## switch

可以将 `switch` 理解为 `if` 的另一种结构清晰的写法。

- 如果表达式等于 `case` 中的值，将执行此 `case` 代码段
- `break` 关键字会终止 `switch` 的执行
- 没有任何 `case`匹配时将执行`default` 代码块
- 如果`case`执行后缺少 break 则接着执行后面的语句

```js
function message(age) {
    switch (true) {
        case age < 15:
            console.log("儿童");
            break;
        case age < 25:
            console.log("青少年");
            break;
        case age < 40:
            console.log("青年");
            break;
        case age < 60:
            console.log("中年");
            break;
        case age < 100:
            console.log("老年");
            break;
        default:
            console.log("年龄输出错误");
    }
}
message(10);
```

:::warning

缺少 break 后，会接着执行后面的 switch 代码

:::

## while

循环执行语句，需要`设置跳出循环的条件`否则会陷入死循环状态

```js
let row = 5;
document.write(`<table border="1" width="100">`);
while (row-- != 0) {
    document.write(`<tr><td>${row}</td></tr>`);
}
document.write(`</table>`);
```

## do/while

后条件判断语句，无论条件是否为真都会先进行循环体

```js
function func(row = 5) {
    let start = 0;
    do {
        let n = 0;
        do {
            document.write("*");
        } while (++n <= start);
        document.write("<br/>");
    } while (++start <= row);
}
func();
```



##  for

```js
for (let i = 10; i > 0; i--) {
    for (let n = 0; n < i; n++) {
        document.write('*');
    }
    document.write("<br/>");
}
```

## break/continue

break 用于退出当前循环，continue 用于退出当前循环返回循环起始继续执行

```js
//获取所有偶数，所有奇数使用 continue 跳过
for (let i = 1; i <= 10; i++) {
    if (i % 2) continue;
    console.log(i);
}

//获取三个奇数，超过时使用 break退出循环
let count = 0,num = 3;
for (let i = 1; i <= 10; i++) {
    if (i % 2) {
        console.log(i);
        if (++count == num) break;
    }
}
```

## label

:::tip

标签(label) 为程序定义位置，可以使用`continue/break`跳到该位置

:::

## for/in

:::tip

用于遍历对象的所有属性，`for/in`主要用于遍历对象，不建议用来遍历数组

:::

## for/of

:::tip

用来遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构

与 `for/in` 不同的是 `for/of` 每次循环取其中的值而不是索引

:::