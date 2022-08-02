# 栅格

## 容器声明

```css
/*块级*/
display:grid; 
/*行级容器*/
display:inline-grid;
```

## 划分行列

栅格有点类似表格，也 `行` 和 `列`。使用 `grid-template-columns` 规则可划分列数，使用 `grid-template-rows` 划分行数

```css
/*划分为列数*/
grid-template-columns:
/*划分行数*/
grid-template-rows:
```

### 固定宽度

```css
article {
    width: 300px;
    height: 200px;
    border: solid 5px silver;
    display: grid;
    grid-template-rows: 100px 100px;
    grid-template-columns: 100px 100px 100px;
}
```

### 百分比

```css
display: grid;
grid-template-rows: 50% 50%;
grid-template-columns: 25% 25% 25% 25%;
```

### 重复设置

使用 `repeat` 统一设置值，第一个参数为重复数量，第二个参数是重复值

```css
grid-template-rows: repeat(2, 50%);
grid-template-columns: repeat(2, 50%);

/*可以设置多个值来定义重复*/
display: grid;
grid-template-rows: repeat(2, 50%);
grid-template-columns: repeat(2, 100px 50px);
```

### 自动填充

自动填充是根据容器尺寸，自动设置元素尺寸

```css
width: 300px;
height: 200px;
display: grid;
grid-template-rows: repeat(auto-fill, 100px);
grid-template-columns: repeat(auto-fill, 100px);
```

### 比例划分

使用 `fr` 单位设置元素在空间中所占的比例，下面按`1份-2份` 分成两组共四列

```css
width: 300px;
height: 200px;
display: grid;
grid-template-rows: 1fr 2fr;
grid-template-columns: 100px 1fr 2fr;
```

#### 重复定义

```css
width: 300px;
height: 100px;
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(2, 1fr 2fr);
```

###  自动空间

```css
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: 20vw auto 30vw;
```

### 组合定义

`grid-tempalte` 是 `grid-template-rows`、`grid-template-columns`、`grid-template-areas` 的三个属性的简写

```css
display: grid;
grid-template: repeat(3, 100px) / repeat(3, 100px);
width: 300px;
height: 300px;
```

### minmax

使用 `minmax` 方法可以设置取值范围,列在行高在 `最小100px ~ 最大1fr` 间取值

```css
width: 300px;
height: 300px;
display: grid;
grid-template-rows: 100px minmax(100px, 1fr);
grid-template-columns: 100px 1fr;
```

## 间距定义

### 行间距

```css
/*使用 `row-gap` 设置行间距*/
row-gap: 30px;
```

### 列间距

```css
/*使用 column-gap 定义列间距*/
column-gap: 20px;
```

### 组合定义

```css
/*使用 `gap` 规则可以一次定义行、列间距，如果间距一样可以只设置一个值*/
gap: 20px 10px;
```

## 元素定位

| 样式属性          | 说明         |
| ----------------- | ------------ |
| grid-row-start    | 行开始栅格线 |
| grid-row-end      | 行结束栅格线 |
| grid-column-start | 列开始栅格线 |
| grid-column-end   | 列结束栅格线 |

属性值

| 属性值        | 说明                               |
| ------------- | ---------------------------------- |
| Line          | 栅格络                             |
| span 数值     | 栅格包含的栅格数量                 |
| span 区域名称 | 栅格包含到指定的区域名称           |
| auto          | 自动设置，默认为一个网格宽度和高度 |

### 根据偏移量

使用 `span` 可以设置包含栅格的数量或包含到的区域名称

| 示例                | 说明          |
| ------------------- | ------------- |
| grid-row-end:2      | 向下包含 2 行 |
| grid-row-start:2    | 向上包含 2 行 |
| grid-column-end:2   | 向右包含 2 行 |
| grid-column-start:2 | 向左包含 2 行 |

### 简写模式

可以使用 `grid-row` 设置行开始栅格线，使用 `grid-column` 设置结束栅格线

上例中的居中对齐元素，可以使用以下简写的方式声明（推荐）

```css
grid-row: 2/4;
grid-column: 2/4;
```

### grid-area

`grid-area`更加简洁是同时对 `grid-row` 与 `grid-column` 属性的组合声明

```css
grid-row-start/grid-column-start/grid-row-end/grid-column-end
```

## 未完待续！！！