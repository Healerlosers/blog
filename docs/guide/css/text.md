# 文本设置

##  字体设置

```css
font-family: 'Courier New', Courier, monospace;
```

## 字重定义

::: tip
字重指字的粗细定义。取值范围 `normal | bold | bolder | lighter | 100 ~900`

400 对应 `normal`,700 对应 `bold` ，一般情况下使用 bold 或 normal 较多。

:::

```css
span {
    font-weight: bold;
}
strong:last-child {
    font-weight: normal;
}
```

## 文本字号

:::tip

字号用于控制字符的显示大小，包括 `xx-small | x-small | small | meidum | large | x-large | xx-large`。

**百分号**

百分数是子元素相对于父元素的大小，如父元素是 20px，子元素设置为 200%即为你元素的两倍大小

:::

```css
article {
    font-size: 20px;
}
span {
    font-size: 500%;
}
```

**em**

em 单位等同于百分数单位。

```css
article {
    font-size: 20px;
}
span {
    font-size: 5em;
}
```

## 文本颜色

**字符串颜色**

> 可以使用如 `red ` | ` green` 等字符颜色声明

```css
color:red;
```

**使用十六进制网页颜色**

如果颜色字符相同如 `#dddddd` 可以简写为 `#ddd`

```css
color:#ddffde
```

**使用 RGB 颜色**

```css
color:rgb(111, 123, 12);
```

**透明颜色**

透明色从 `0~1` 间，表示从透明到不透明

```css
color:rgba(38, 149, 162,.2);
```

## 行高定义

```css
div {
    line-height: 2em;
}
```

## 倾斜风格

字符的倾斜样式控制

```css
span {
    font-style: italic;
}
em {
    font-style: normal;
}
```

## 组合定义

:::tip

可以使用 `font` 一次将字符样式定义，但要注意必须存在以下几点：

- 必须有字体规则
- 必须有字符大小规则

:::

```css
span {
    font: bold italic 20px/1.5 'Courier New', Courier, monospace;
}
```

## 大小转换

```css
/*小号大写字母*/
span {
    font-variant: small-caps;
}
/*大小写转换*/
h2 {
    /* 首字母大小 */
    text-transform: capitalize;
    /* 全部大小 */
    text-transform: uppercase;
    /* 全部小写 */
    text-transform: lowercase;
}
```

## 文本线条

```css
a {
    text-decoration: none;
}
span.underline {
    text-decoration: underline;
}
span.through {
    text-decoration: line-through;
}
span.overline {
    text-decoration: overline;
}
```

## 阴影控制

参数顺序为：颜色，水平偏移，垂直偏移，模糊度。

```css
h2 {
    text-shadow: rgba(13, 6, 89, 0.8) 3px 3px 5px;
}
```

## 空白处理

使用 `white-space` 控制文本空白显示

| 选项     | 说明                                      |
| -------- | ----------------------------------------- |
| pre      | 保留文本中的所有空白，类似于使用`pre`标签 |
| nowrap   | 禁止文本换行                              |
| pre-wrap | 保留空白，保留换行符                      |
| pre-line | 空白合并，保留换行符                      |

## 文本溢出

**单行文本**

溢出文本容器后换行处理

```css
h2 {
    overflow-wrap: break-word;
    width: 100px;
    border: solid 1px #ddd;
}
```

溢出内容末尾添加 `...`

```css
div {
    width: 200px;
    border: solid 1px blueviolet;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

**多行文本**

```css
div{
    width: 200px;
    border:solid 1px blueviolet;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
```

## 文本缩进

```css
/*控制元素部的文本、图片进行缩进操作*/
p {
    text-indent: 2em;
}
```

## 水平对齐

使用 `left|right|center` 对文本进行对齐操作

```css
h2 {
    text-align: center;
}
```

## 垂直对齐

使用 `vertical-align` 用于定义内容的垂直对齐风格，包括`middle | baseline | sub | super` 等。

**图像在段落中居中对齐**

```css
img {
    height: 50px;
    width: 50px;
    vertical-align: middle;
}
```

**顶部与底部对齐**

`bottom | top` 相对于行框底部或顶部对齐

```css
h2>span {
    vertical-align: bottom;
    font-size: 12px;
}
```

**使用单位对齐**

可以使用具体数值设置对齐的位置

```css
h2>span {
    vertical-align: -20px;
    font-size: 12px;
}
```

## 字符间隔

**单词与字符间距**

使用 `word-spacing` 与 `letter-spacing` 控制单词与字符间距。

```css
h2 {
    word-spacing: 2em;
    letter-spacing: 3em;
}
```

## 排版模式(writing-mode)

| 模式          | 说明                                     |
| ------------- | ---------------------------------------- |
| horizontal-tb | 水平方向自上而下的书写方式               |
| vertical-rl   | 垂直方向自右而左的书写方式               |
| vertical-lr   | 垂直方向内内容从上到下，水平方向从左到右 |