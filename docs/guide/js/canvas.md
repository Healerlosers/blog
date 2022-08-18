# Canvas

## 基础知识

获取元素

```js
const el = document.getElementById("canvas");
```

然后，创建 context 对象

*getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法*

```js
const ctx = el.getContext("2d")
```

设置fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）

```js
ctx.fillStyle = "red"
```

fillRect(*x,y,width,height*) 方法定义了矩形当前的填充方式

```js
ctx.fillRect(0,0,175,200)
```



## 项目模板

因为使用到了 Typescript，所以我们使用 vite 创建 typescript 项目，并选择使用 `vanilla` 模板来开发

```text
$ yarn create vite
```

项目安装执行结果

```text
执行结果
✔ Project name: 
✔ Select a framework: › vanilla
✔ Select a variant: › vanilla-ts
```

目录结构

```text
├── images				 		//图片文件
│   └── p2.jpeg
├── index.html				//项目模板文件
├── package.json			//项目配置文件
├── src
│   ├── main.ts				//项目主文件，我们在这里编码
│   ├── style.css			//公共样式
│   └── vite-env.d.ts	//TS类型声明文件
├── tsconfig.json			//TS配置文件
└── yarn.lock					//扩展包版本锁定文件
```

##  矩形绘制

使用 strokeRect 方法绘制边框矩形

### 实心矩形