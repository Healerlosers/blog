# 动画

## 基础知识

### 变形操作

使用 `transform` 规则控制元素的变形操作，包括控制移动、旋转、倾斜、3D 转换等，下面会详细介绍每一个知识点

| 选项                          | 说明                                |
| ----------------------------- | ----------------------------------- |
| none                          | 定义不进行转换                      |
| translate(*x*,*y*)            | 定义 2D 转换                        |
| translate3d(*x*,*y*,*z*)      | 定义 3D 转换                        |
| translateX(*x*)               | 定义转换，只是用 X 轴的值           |
| translateY(*y*)               | 定义转换，只是用 Y 轴的值           |
| translateZ(*z*)               | 定义 3D 转换，只是用 Z 轴的值       |
| scale(*x*,*y*)                | 定义 2D 缩放转换                    |
| scale3d(*x*,*y*,*z*)          | 定义 3D 缩放转换                    |
| scaleX(*x*)                   | 通过设置 X 轴的值来定义缩放转换     |
| scaleY(*y*)                   | 通过设置 Y 轴的值来定义缩放转换     |
| scaleZ(*z*)                   | 通过设置 Z 轴的值来定义 3D 缩放转换 |
| rotate(*angle*)               | 定义 2D 旋转，在参数中规定角度      |
| rotate3d(*x*,*y*,*z*,*angle*) | 定义 3D 旋转                        |
| rotateX(*angle*)              | 定义沿着 X 轴的 3D 旋转             |
| rotateY(*angle*)              | 定义沿着 Y 轴的 3D 旋转             |
| rotateZ(*angle*)              | 定义沿着 Z 轴的 3D 旋转             |
| skew(*x-angle*,*y-angle*)     | 定义沿着 X 和 Y 轴的 2D 倾斜转换    |
| skewX(*angle*)                | 定义沿着 X 轴的 2D 倾斜转换         |
| skewY(*angle*)                | 定义沿着 Y 轴的 2D 倾斜转换         |
| perspective(*n*)              | 为 3D 转换元素定义透视视图          |

### 变形叠加

重复设置变形操作时只在原形态上操作

#### 默认处理

```css
/*设置了两次移动，并不会移动 550px 而是只移动 50px*/
div {
    transform: translateX(500px);
    width: 100px;
    height: 100px;
    background: #9b59b6;
}
div{
    transform: translateX(50px);
}
```

### 行级元素

行级元素不产生变形效果，将其转为 `inline-block` 或 `block` 以及弹性元素时都可以产生变化效果

## 伪类状态

### :hover

```css
div:hover {
    transform: rotate(180deg);
}
```

### :target

## 移动元素

- 沿 X 轴移动时正值向右移动、负值向左移动
- 沿 Y 轴移动时正值向下移动、负值向上移动
- 如果使用百分数将控制元素的原尺寸计算百分比然后移动
- 可同时设置多个值，解析器会从左向右依次执行
- 变形是在原基础上更改，即第二次设置值时不是在第一次值上变化

### translateX

正值向右移动、负值向左移动

### translateY

正值向下移动、负值向上移动

### translate

使用 `translate` 可以控制按 X、Y 同时移动操作，第一个值控制 X 移动，第二个值控制 Y 移动

```css
div{
    transform: translate(100px, -100px);
}
```

### 百分比移动

元素宽度为 100px 设置 50%时将移动 50px，即百分比是指元素的尺寸的百分比

```css
div{
	transform: translateX(50%);
}
```

### 元素居中

```css
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
```

###  translateZ

控制 Z 轴移动，正数向外、负数向里移动。因为 Z 轴是透视轴没有像 X/Y 一样的固定尺寸，所以不能使用百分数

### translate3d

用于同时控制 X/Y/Z 轴的移动，三个值必须输入如果某个轴不需要移动时设置为零

## 缩放元素

比如数值为 2 时表示为原尺寸的两倍

### scaleX

```css
div{
    transform: scaleX(.5);
}
```

### scaleY

```css
div{
    transform: scaleY(.5);
}
```

### scale

使用 `scale` 可同时设置 `X/Y` 轴的缩放，如果只设置一个值时表示两轴缩放相同。

使用数值定义缩放，如 .5 表示缩小一半，2 表示放大两倍

```css
div{
    transform: scale(.5, 2);
}
```

### scaleZ

沿 Z 轴缩放元素，需要有 3D 透视才可以查看到效果

### scale3d

沿 X/Y/Z 三个轴绽放元素

## 旋转操作

使用 CSS 可以控制元素按照不同坐标轴进行旋转

### rotateX

控制元素按照 X 轴进行旋转操作

```css
/*按水平轴发生旋转，如果旋转 90deg 将不可见*/
div{
    transform: rotateX(180deg);
}
```

### rotateY

```css
/*按垂直轴旋转，如果旋转 90deg 将不可见*/
div {
    transform: rotateY(180deg);
}
```

### rotateZ

```css
/*没 Z 轴旋转元素，效果就是沿 X/Y 轴的平面旋转*/
```

### rotate

在 X 与 Y 轴平面旋转，效果与使用 `rotateZ` 相同

```css
div{
	transform: rotate(90deg);
}
```

### rotate3d

同时设置 X/Y/Z 轴的旋转向量值来控制元素的旋转

```css
rotate3d(tx,ty,tz,angle)
```

## 变形基点

使用 `transform-origin` 设置元素的 X/YZ 操作的基点，用于控制旋转、倾斜等操作。

- 旋转默认以元素中心进行旋转，改变基点后可控制旋转点位置
- 元素移动不受变形基点所影响
- 基点是元素原始空间位，而不是 translate 移动后的空间位

## 透视景深

### perspective

- 使用 `perspective` 来控制元素的透视景深
- `perspective` 规则为舞台元素控制景深， `perspective` 属性为控制单个元素

### transform-style

使用 `transform-style` 用于控制 3d 透视。

- 应用于舞台即变形元素的父级元素
- 设置 `overflow:visible` 时 `preserve-3d` 才无效

| 选项        | 说明        |
| ----------- | ----------- |
| flat        | 2D 平面舞台 |
| preserve-3d | 3D 透视舞台 |

## 观看视角

### perspective-origin

`perspective-origin`用于控制视线的落点，就像我们眼睛看物体时的聚焦点。可以理解眼镜看物体的位置，比如看一台汽车，是在看车头左边看还是车头右边看。

需要设置 `perspective` 透视后才可以看到效果。

- 一般设置在舞台元素上来控制子元素

### 位置参数

| 取值     | 说明                                                         |
| :------- | :----------------------------------------------------------- |
| *x-axis* | 定义该视图在 x 轴上的位置。默认值：50%。可能的值：left、center、right、length、% |
| *y-axis* | 定义该视图在 y 轴上的位置。默认值：50%。可能的值：top、center、bottom、length、% |

## 隐藏背面

使用 `backface-visibility` 用于控制是否可以看到元素的背面。

- 一般设置在元素上而不是舞台元素上
- 需要舞台元素（父级元素）设置 `transform-style: preserve-3d`

| 选项    | 说明     |
| ------- | -------- |
| visible | 背面可见 |
| hidden  | 背面隐藏 |

## 常见问题

如果发现元素不能点击，可能是父级设置了 `transform-style: preserve-3d` 属性，且同级元素设置了 3D 变化特性，造成对点击元素有遮挡。有以下两种方式解决

1. 对变形元素设置 `pointer-events: none;` 使用其不接受点击事件
2. 删除父级的 `transform-style: preserve-3d` 属性
