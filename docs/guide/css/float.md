# 浮动

## 浮动布局

### FLOAT

使用浮动可以控制相邻元素间的排列关系。

| 选项  | 说明     |
| ----- | -------- |
| left  | 向左浮动 |
| right | 向右浮动 |
| none  | 不浮动   |

### 文档流

:::tip

- 没有设置浮动的块元素是独占一行的
- 浮动是对后面元素的影响

:::

### 丢失空间

:::warning

如果只给第一个元素设置浮动，第二个元素不设置，后面的元素会占用第一个元素空间

:::

### 使用浮动

两个元素都设置浮动后，会并排显示

### 浮动边界

浮动元素边界不能超过父元素的 padding

### 浮动转块

:::tip

元素浮动后会变为块元素包括行元素如 `span`，所以浮动后的元素可以设置宽高

:::

## 清除浮动

不希望元素受浮动元素影响时，可以清除浮动

### clear

CSS 提供了 `clear` 规则用于清除元素浮动影响。

| 选项  | 说明               |
| ----- | ------------------ |
| left  | 左边远离浮动元素   |
| right | 右连远离浮动元素   |
| both  | 左右都远离浮动元素 |

### after

:::tip

使用 `::after` 伪类为父元素添加后标签，实现清除浮动影响。

:::

```css
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```

### overflow

:::tip

子元素使用浮动后将不占用空间，这时父元素高度为将为零。通过添加父元素并设置 `overflow` 属性可以清除浮动。

将会使用父元素产生 `BFC` 机制，即父元素的高度计算会包括浮动元素的高度

:::

```css
article {
    overflow: hidden;
}
```

##  形状浮动

:::tip

通过`shape-outside`形状浮动可以让内容围绕图片，类似于我们在 word 中的环绕排版。要求图片是有透明度的 PNG 格式

:::

### 距离控制

| 选项        | 说明       |
| ----------- | ---------- |
| margin-box  | 外边距环绕 |
| padding-box | 内边距环绕 |
| border-box  | 边线环绕   |
| content-box | 内容环绕   |

### 显示区域

| 选项    | 说明   |
| ------- | ------ |
| circle  | 圆形   |
| ellipse | 椭圆   |
| polygon | 多边形 |

### 环绕模式

| 选项    | 说明     |
| ------- | -------- |
| circle  | 圆形环绕 |
| ellipse | 椭圆环绕 |
| url     | 图片环绕 |
| polygan | 多边环绕 |

**圆形环绕**

```css
img {
    padding: 20px;
    float: left;
    shape-outside: circle(50%) padding-box;
}
```

**椭圆环绕**

```css
img {
    padding: 20px;
    float: left;
    shape-outside: ellipse(80px 70px) padding-box;
}
```

**图片环绕**

```css
img {
    float: left;
    shape-outside: url(xj.png);
}
```

**多边环绕**

```css
span.shape {
    float: left;
    width: 100px;
    height: 100px;
    background: red;
    clip-path: polygon(50px 0px, 0 100px, 100px 100px);
    shape-outside: polygon(50px 0px, 0 100px, 100px 100px);
}
```