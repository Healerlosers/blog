# 帧动画

## @keyframes

使用`@keyframes` 规则配置动画中的各个帧

- from 表示起始点
- to 表示终点
- 可以使用百分数如 20%动画运行到 20%时间时

### 基本使用

使用 `@keyframes` 定义了动画叫 `ke` 并配置了两个帧动作`from/to` ，然后在 div 元素中使用`animation-name` 引用了动画并使用`animation-duration`声明执行三秒

```css
@keyframes ke {
    from {
        opacity: 0;
        transform: scale(.1);
    }
    to {
        opacity: 1;
    }
}
```

### 时间点

帧动画需要定义在不同时间执行的动作，开始与结束可以使用 `form/to` 或 `0%/100%` 声明。

- 必须添加百分号，25%是正确写法
- 时间点没有顺序要求，即 100%写在 25%前也可以
- 未设置`0%`与`100%` 时将使用元素原始状态

```css
@keyframes key {
    0% {}
    25% {
        transform: translateX(300%);
    }
    50% {
        transform: translate(300%, 300%);
    }
    75% {
        transform: translate(0, 300%);
    }
    to {}
}
```

## animation-name

使用`animation-name` 规则可以在元素身上同时使用多个动画。

- 使用多个动画时用逗号分隔
- 多个动画有相同属性时，后面动画的属性优先使用

```css
animation-name: key, scale;
animation-duration: 3s;
```

## animation-duration

使用 `animation-duration` 可以声明动画播放的时间，即把所有帧执行一遍所需要的时间。

- 可以使用 m 秒，ms 毫秒时间单位
- 可为不同动画单独设置执行时间
- 如果动画数量大于时间数量，将重新从时间列表中计算

## 动画属性

不是所有 css 属性都有过渡效果，[查看支持动画的 CSS 属性 (opens new window)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)，一般来讲有中间值的属性都可以设置动画如宽度、透明度等

## animation-iteration-count

使用`animation-iteration-count` 规则设置动画重复执行次数，设置值为 `infinite` 表示无限循环执行。

- 可同时设置元素的多个动画重复，使用逗号分隔
- 如果动画数量大于重复数量定义，后面的动画将重新计算重复

## animation-direction

使用 `animation-direction` 控制动画运行的方向

| 选项              | 说明                             |
| ----------------- | -------------------------------- |
| normal            | 从 0%到 100%运行动画             |
| reverse           | 从 100%到 0%运行动画             |
| alternate         | 先从 0%到 100%，然后从 100%到 0% |
| alternate-reverse | 先从 100%到 0%，然后从 0%到 100% |

## animation-delay

使用 `animation-delay` 规则定义动画等待多长时间后执行

## 动画速率

### 系统属性

| 值                            | 描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| linear                        | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。 |
| ease                          | 开始慢，然后快，慢下来，结束时非常慢（cubic-bezier(0.25,0.1,0.25,1)） |
| ease-in                       | 开始慢，结束快（等于 cubic-bezier(0.42,0,1,1)）              |
| ease-out                      | 开始快，结束慢（等于 cubic-bezier(0,0,0.58,1)）              |
| ease-in-out                   | 中间快，两边慢（等于 cubic-bezier(0.42,0,0.58,1)）           |
| cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中定义自己的值                           |

- 可以在帧中单独定义，将影响当前帧的速率

### 贝塞尔曲线

需要设置四个值 `cubic-bezier(<x1>, <y1>, <x2>, <y2>)`，来控制曲线速度，可在 [https://cubic-bezier.com (opens new window)](https://cubic-bezier.com/)网站在线体验效果

<img :src="$withBase('/images/flex/05.png')" alt="foo">

## 步进速度

过渡使用阶梯化呈现，有点像现实生活中的机械舞，下面是把过渡分五步完成。

| 选项           | 说明                                        |
| -------------- | ------------------------------------------- |
| steps(n,start) | 设置 n 个时间点，第一时间点变化状态         |
| steps(n,end)   | 设置 n 个时间点，第一时间点初始状态         |
| step-start     | 等于 steps(1,start)，可以理解为从下一步开始 |
| step-end       | 等于 steps(1,end)，可以理解为从当前步开始   |

### steps

`steps(n,start)` 可以简单理解为从第二个开始，`steps(n,end)` 从第一个开始

### step-start

`step-start` 效果等于 `steps(1,start)` ,`step-end` 效果等同于 `steps(1,end)`

## animation-play-state

使用 `animation-play-state` 可以控制动画的暂停与运行

| 选项    | 说明 |
| ------- | ---- |
| paused  | 暂停 |
| running | 运行 |

## animation-fill-mode

`animation-fill-mode` 用于定义动画播放结束后的处理模式，是回到原来状态还是停止在动画结束状态

| 选项      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| none      | 需要等延迟结束，起始帧属性才应用                             |
| backwards | 动画效果在起始帧，不等延迟结束                               |
| forwards  | 结束后停留动画的最后一帧                                     |
| both      | 包含 backwards 与 forwards 规则，即动画效果在起始帧，不等延迟结束，并且在结束后停止在最后一帧 |

## 组合定义

和 CSS 中的其他属性一样，可以使用`animation`组合定义帧动画。animation 属性是一个简写属性，用于设置六个动画属性：

- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction

必须存在 `animation-duration`属性，否则过渡时间为 0 没有动画效果