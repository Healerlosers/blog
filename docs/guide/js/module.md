# 模块设计

## 实现原理

在过去 JS 不支持模块时我们使用`AMD/CMD（浏览器端使用）`、`CommonJS（Node.js使用）`、`UMD(两者都支持)`等形式定义模块

AMD 代表性的是 `require.js`，CMD 代表是淘宝的 `seaJS` 框架

```js
let module = (function() {
    //模块列表集合
    const moduleLists = {};
    function define(name, modules, action) {
        modules.map((m, i) => {
            modules[i] = moduleLists[m];
        });
        //执行并保存模块
        moduleLists[name] = action.apply(null, modules);
    }

    return { define };
})();
//声明模块不依赖其它模块
module.define("vue", [], function() {
    return {
        show() {
            console.log("vue module show");
        }
    };
});
//声明模块时依赖其它模块
module.define("js", ["vue"], function(hd) {
    hd.show();//vue module show
});
```

## 标签使用

在 html 文件中导入模块，需要定义属性 `type="module"`

```html
<script type="module"></script>
```

## 模块路径

在浏览器中引用模块必须添加路径如`./` ，但在打包工具如`webpack`中则不需要，因为他们有自己的存放方式

```html
<script type="module">
    import { vue } from "./hd.js";
</script>
```

##  延迟解析

模块总是会在所有 html 解析后才执行，下面的模块代码可以看到后加载的 `button` 按钮元素

- 建议为用户提供加载动画提示，当模块运行时再去掉动画

```html
<body>
    <script type="module">
        console.log(document.querySelector("button")); //Button
    </script>
    <script>
        console.log(document.querySelector("button")); //undefined
    </script>
    <button>后盾人</button>
</body>
```

## 严格模式

**模块默认运行在严格模式**

```html
<script type="module">
    module = "vue"; // Error
</script>
<script>
    console.log(this); //Window
</script>
<script type="module">
    console.log(this); //undefiend
</script>
```

## 作用域

模块都有独立的顶级作用域

```html
<script type="module">
    let name = "张三";
</script>
<script type="module">
    alert(hdname // Error
</script>
```

单独文件作用域也是独立的,模块不能互相访问

```html
<script type="module" src="1.1.js"></script>
<script type="module" src="1.2.js"></script>
```

## 预解析

模块在导入时只执行一次解析，之后的导入不会再执行模块代码，而使用第一次解析结果，并共享数据

- 可以在首次导入时完成一些初始化工作
- 如果模块内有后台请求，也只执行一次即可

导入多次 `vue.js` 时只解析一次

```html
<script type="module">
    import "./vue.js";
    import "./vue.js";
</script>
```

## 导入导出

ES6 使用基于文件的模块，即一个文件一个模块

- 使用`export` 将开发的接口导出
- 使用`import` 导入模块接口
- 使用`*`可以导入全部模块接口
- 导出是以引用方式导出，无论是标量还是对象，即模块内部变量发生变化将影响已经导入的变量

##  导出模块

使用 `export` 导出模块接口，没有导出的变量都是模块私有的

```js
//分别导出
export const age = 18;
export const func = function() {
    return "is a module function";
};
export class User {
    show() {
        console.log("user.show");
    }
}
//使用指量导出
const age = 18;
const func = function() {
    return "is a module function";
};
class User {
    show() {
        console.log("user.show");
    }
}
export { age, func, User };
```

## 具名导入

```html
<script type="module">
    import { User, site, func } from "./vue.js";
    console.log(site);
    console.log(User);
</script>
```

像下面这样在 `{}` 中导入是错误的，模块默认是在顶层静态导入，这是为了分析使用的模块方便打包

```js
if (true) {
    import { site, func } from "./vue.js"; // Error
}
```

## 批量导入

如果要导入的内容比较多，可以使用 `*` 来批量导入

```html
<script type="module">
    import * as api from "./hd.js";
    console.log(api.site);
    console.log(api.User);
</script>
```

## 导入建议

- 使用`webpack` 构建工具时，没有导入的功能会删除节省文件大小
- 可以更清晰知道都使用了其他模块的哪些功能

## 导入别名

可以为导入的模块重新命名

- 有些导出的模块命名过长，起别名可以理简洁
- 本模块与导入模块重名时，可以通过起别名防止错误

```js
const age = 18;
const func = function() {
    return "is a module function";
};
class User {
    show() {
        console.log("user.show");
    }
}
export { age, func, User };
```

模块导入使用 `as` 对接口重命名，本模块中已经存在 `func` 变量，需要对导入的模块重命名防止重名错误

```html
<script type="module">
    import { User as user, func as action, site as name } from "./vue.js";
    let func = "houdunren";
    console.log(name);
    console.log(user);
    console.log(action);
</script>
```

## 导出别名

模块可以对导出给外部的功能起别名

```js
const age = 18;
const func = function() {
    console.log("is a module function");
};
class User {
    show() {
        console.log("user.show");
    }
}
export { age, func as action, User as user };

//导入
import { user, action } from "./vue.js";
action();
```

## 默认导出

很多时候模块只是一个类，也就是说只需要导入一个内容，这地可以使用默认导入

使用`default` 定义默认导出的接口，导入时不需要使用 `{}`

- 可以为默认导出自定义别名
- 只能有一个默认导出
- 默认导出可以没有命名

### 单一导出

默认只导出一个类。并且没有对类命名，这是可以的

```js
export default class {
    static show() {
        console.log("User.method");
    }
}
```

从程序来讲如果将一个导出命名为 `default` 也算默认导出

```js
class User {
    static show() {
        console.log("User.method");
    }
}
export { User as default };
```

导入时就不需要使用 `{}` 来导入了

```html
<script type="module">
    import User from "./vue.js";
    User.show();
</script>
```

默认导出的功能可以使用任意变量接收

```html
<script type="module">
    import func from "./vue.js";
    func.show();
</script>
```

###  混合导出

模块可以存在默认导出与命名导出

使用`export default` 导出默认接口，使用 `export {}` 导入普通接口

```js
const age = 18;
const func = function() {
    console.log("is a module function");
};
export default class {
    static show() {
        console.log("user.show");
    }
}
export { age, func };
```

也可以使用以下方式导出模块

```js
const age = 18;
const func = function() {
    console.log("is a module function");
};
class User {
    static show() {
        console.log("user.show");
    }
}
export { age, func, User as default };
```

**导入默认接口时不需要使用 `{}` ，普通接口还用 `{}` 导入**

```html
<script type="module">
    //可以将 hd 替换为任何变量
    import Func from "./func.js";
    import { age } from "./vue.js";
    console.log(age);
    Func.show();
</script>
```

可以使用一条语句导入默认接口与常规接口

```js
import show, { name } from "/modules/vue.js";
```

也可以使用别名导入默认导出

```js
import { age, default as func } from "./vue.js";
console.log(age);
func.show();
```

如果是批量导入时，使用 `default` 获得默认导出

```html
<script type="module">
    import * as api from "./vue.js";
    console.log(api.site);
    api.default.show();
</script>
```

### 使用建议

对于默认导出和命名导出有以下建议

- 不建议使用默认导出，会让开发者导入时随意命名

```js
import vue1 from "./vue.js";
import vue2 from "./vue.js";
```

- 如果使用默认导入最好以模块的文件名有关联，会使用代码更易阅读

```js
import vue from "./vue.js";
```

## 导出合并

### 解决问题

可以将导入的模块重新导出使用，比如项目模块比较多如下所示，这时可以将所有模块合并到一个入口文件中

这样只需要使用一个模块入口文件，而不用关注多个模块文件

```
|--vue1.js
|--vue2.js
...
```

### 实际使用

模块1内容

```js
const age = 18;
const func = function() {
    console.log("is a module function");
};
export { age, func };
```

模块2内容

```js
export default class {
    static get() {
        console.log("houdunren.js.get");
    }
}
```

 `index.js` 模块内容

```js
export * as module1 from "./module1.js";
// 默认模块需要单独导出
export { default as module2 } from "./module2.js";
// 以下方式导出默认模块是错误的
// export houdunren from "./houdunren.js";
```

```html
<script type="module">
    import * as api from "./index.js";
    console.log(api);
    api.module2.get();
    console.log(api.module1.site);
</script>
```

## 动态加载

**使用 `import` 必须在顶层静态导入模块，而使用`import()` 函数可以动态导入模块，它返回一个 `promise` 对象**

###  静态导入

使用 `import` 顶层静态导入，像下面这样在 `{}` 中导入是错误的，这是为了分析使用的模块方便打包，所以系统禁止这种行为

```js
if (true) {
    import { site, func } from "./hd.js"; // Error
}
```

###  动态使用

模块module1内容

```js
const age = 18;
const func = function() {
    console.log("is a module function");
};
export { age, func };
```

**使用 `import()` 函数可以动态导入，实现按需加载**

```js
if (true) {
    let nodule = import("./nodule1").then(module => {
        console.log(module.age);
    });
}
```

## 指令总结

| 表达式                                           | 说明             |
| ------------------------------------------------ | ---------------- |
| export function show(){}                         | 导出函数         |
| export const name='后盾人'                       | 导出变量         |
| export class User{}                              | 导出类           |
| export default show                              | 默认导出         |
| const name = '后盾人' export {name}              | 导出已经存在变量 |
| export {name as hd_name}                         | 别名导出         |
| import defaultVar from 'houdunren.js'            | 导入默认导出     |
| import {name,show} from 'a.j'                    | 导入命名导出     |
| Import {name as hdName,show} from 'houdunren.js' | 别名导入         |
| Import * as api from 'houdunren.js'              | 导入全部接口     |

## 编译打包

### 安装配置

使用以下命令生成配置文件 `package.json`

```js
npm init -y
```

修改`package.json`添加打包命令

```json
"main": "index.js",
"scripts": {
    "dev": "webpack --mode development --watch"
},
```

安装 webpack 工具包

```js
npm i webpack webpack-cli --save-dev
```

### 目录结构

```text
index.html
--dist #压缩打包后的文件
--src
----index.js  #入口
----style.js //模块
```

### 执行打包

运行以下命令将生成打包文件到 `dist`目录，因为在命令中添加了 `--watch`参数，所以源文件编辑后自动生成打包文件

```text
npm run dev
```