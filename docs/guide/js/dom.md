# DOM

## 文档渲染

浏览器会将 HTML 文本内容进行渲染，并生成相应的 JS 对象，同时会对不符规则的标签进行处理

- 浏览器会将标签规范后渲染页面
- 目的一让页面可以正确呈现
- 目的二可以生成统一的 JS 可操作对象

### 表格处理

表格 tabel 中不允许有内容，浏览器在渲染过程中会进行处理

```html
<table>
  张三
  <tr>
    <td>张三</td>
  </tr>
</table>
```

### 标签移动

所有内容要写在 BODY 标签中，下面的 SCRIPT 标签写在了 BODY 后面，浏览器渲染后也会进行处理

```html
<body></body>
<script>
  console.dir('张三')
</script>

//渲染后处理的结果
<body>
<script>
  console.dir('张三')
</script>
</body>
```

##  操作时机

需要保证浏览器已经渲染了内容才可以读取的节点对象,可以将脚本通过事件放在页面渲染完执行

```js
window.onload = () => {
  const node = document.getElementById('app')
  console.log(node)
}
```

或使用定时器将脚本设置为异步执行

```js
setTimeout(() => {
    const node = document.getElementById('app')
    console.log(node)
})
```

也可以放在文档加载后的事件处理函数中

```js
window.onload = function () {
    let app = document.getElementById('app')
    console.log(app)
}
```

或将脚本设置在外部文件并使用 defer 属性加载，defer 即会等到 DOM 解析后迟延执行

```html
<script defer="defer" src="app.js"></script>
<div id="app"></div>
```

##  节点对象

JS 中操作 DOM 的内容称为节点对象（node)，即然是对象就包括操作 NODE 的属性和方法

- 包括12中类型的节点对象
- 常用的节点为`document、标签元素节点、文本节点、注释节点`
- 节点均继承自Node类型，所以拥有相同的属性或方法
- `document`是DOM操作的起始节点

```js
// document节点 noteType为9
console.log(document.nodeType)

// 第一个子节点为<!DOCTYPE html>，且nodeType为10
console.log(document.childNodes.item(0).nodeType)

// body 是标签节点 nodeType为1
console.log(document.body.nodeType)

// body的属性节点 nodeType 为2
console.log(document.body.attributes[0].nodeType)

// body的第一个节点为文本节点，nodeType为3
console.log(document.body.childNodes.item(0).nodeType)

// body的第二个节点为注释，nodeType类型为8
console.log(document.body.childNodes[1].nodeType)
```

## 原型链

- 不同类型节点由专有的构造函数创建对象
- 使用`console.dir`可以打印出`DOM`节点对象结构
- 节点也是对象所以也具有JS对象的特征

```js
function prototype(el) {
    console.dir(el.__proto__)
    el.__proto__ ? prototype(el.__proto__) : ''
}
const node = document.getElementById('app')
prototype(node)
```

最终得到的节点的原型链为

| 原型               | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| Object             | 根对象，提供`hasOwnPrototype`等基本对象操作支持              |
| EventTarget        | 提供 `addEventListener`、`removeEventListener` 等事件支持方法 |
| Node               | 提供 firstChild、parentNode 等节点操作方法                   |
| Element            | 提供 getElementsByTagName、querySelector 等方法              |
| HTMLElement        | 所有元素的基础类，提供 childNodes、nodeType、nodeName、className、nodeName 等方法 |
| HTMLHeadingElement | Head 标题元素类                                              |

提取节点原型链的数组

```js
function prototype(el) {
    const prototypes = []
    prototypes.push(el.__proto__)
    prototypes.push(...(el.__proto__ ? prototype(el.__proto__) : []))
    return prototypes
}
const app = document.querySelector('#app')
console.log(prototype(app))
//[HTMLHeadingElement, HTMLElement, Element, Node, EventTarget, {…}, null]
```

为标题元素增加两个原型方法，改变颜色与隐藏元素

```js
const h2 = document.querySelector('h2')
HTMLHeadingElement.prototype = Object.assign(HTMLHeadingElement.prototype, {
    color(color) {
        this.style.color = color
    },
    hide() {
        this.style.display = 'none'
    },
})
```

## 对象特征

即然 DOM 与我们其他 JS 创建的对象特征相仿，所以也可以为 DOM 对象添加属性或方法

**对于系统应用的属性，应该明确含义不应该随意使用，比如 ID 是用于标识元素唯一属性，不能用于其他目地**

- 后面会讲到其他解决方案，来自定义属性，ID 属性可以直接修改但是不建议这么做

```js
let app = document.getElementById('app')
app.id = 'react'
console.log(app)
```

title 用于显示提示文档也不应该用于其他目地

```js
let app = document.getElementById('app')
app.title = 'react'
console.log(app)
```

对象合并属性的示例

```js
let app = document.getElementById('app')

Object.assign(app, {
    //设置标签内容
    innerHTML: '李四',
    color: 'red',
    change() {
        this.innerHTML = '王五'
        this.style.color = this.color
    },
    onclick() {
        this.change()
    },
})
```

使用对象特性更改样式属性

```js
let app = document.getElementById('app')
Object.assign(app.style, {
    color: 'white',
    backgroundColor: 'red',
})
```

## 常用节点

| 方法                     | 说明                        |
| ------------------------ | --------------------------- |
| document                 | document是DOM操作的起始节点 |
| document.documentElement | 文档节点即html标签节点      |
| document.body            | body 标签节点               |
| document.head            | head 标签节点               |
| document.links           | 超链接集合                  |
| document.anchors         | 所有锚点集合                |
| document.forms           | form 表单集合               |
| document.images          | 图片集合                    |

### DOCUMENT

document是window对象的属性，是由HTMLDocument类实现的实例

- document包含DocumentType（唯一）或html（元素）或comment等元素

原型链中也包含Node，所以可以使用有关节点的方法如nodeType / NodeName等

```js
console.dir(document.nodeType)//9
console.dir(document.nodeName)//#document
```

使用 title 获取和设置文档标题

```js
//获取文档标题
console.log(document.title)
//设置文档标签
document.title = 'DOM'
```

获取当前 URL

```js
console.log(document.URL)
```

获取域名

```js
document.domain
```

获取来源地址

```js
console.log(document.referrer)
```

*系统针对特定标签提供了快速选择的方式*

###  ID

直接使用 ID 获取元素（这是非标准操作，对浏览器有挑剔）

```js
 //直接通过 ID 获取元素（非标准操作）
  console.dir(app)
```

###  links

```js
const nodes = document.links
console.dir(nodes)
```

### anchors

```js
// 通过锚点获取元素
console.dir(document.anchors.n2)
```

### images

```js
console.dir(document.images)
```

##  节点属性

不同类型的节点拥有不同属性

### nodeType

nodeType 指以数值返回节点类型

| nodeType | 说明         |
| -------- | ------------ |
| 1        | 元素节点     |
| 2        | 属性节点     |
| 3        | 文本节点     |
| 8        | 注释节点     |
| 9        | document对象 |

### Prototype

- section 、main、aslide 标签的原型对象为 HTMLElement
- 其他非系统标签的原型对象为 HTMLUnknownElement

```js
let h1 = document.querySelector('h1')
let p = document.querySelector('p')
console.log(h1 instanceof HTMLHeadingElement) //true
console.log(p instanceof HTMLHeadingElement) //false
console.log(p instanceof HTMLParagraphElement) //true
console.log(p instanceof Element) //true
```

通过构建函数获取节点的示例

```html
<div id="app">
    <ul>
        <li>
            <span></span>
            <span>
                <!-- app -->
            </span>
        </li>
        <li><span></span><span></span></li>
        <li><span></span><span></span></li>
    </ul>
</div>
<script>
    function all(el, prototype) {
        const nodes = []
        Array.from(el.childNodes).map(node => {
            if (node instanceof prototype) nodes.push(node)

            if (node.nodeType == 1) nodes.push(...all(node, prototype))
        })
        return nodes
    }
    console.log(all(document.body, HTMLSpanElement))
</script>
```

### nodeName

**nodeName 指定节点的名称**

- 获取值为大写形式

| nodeType | nodeName       |
| -------- | -------------- |
| 1        | 元素名称如 DIV |
| 2        | 属性名称       |
| 3        | #text          |
| 8        | #comment       |

```html
<div id="app">
  <div class="text">text</div>
  <div class="empty"><!-- 向军大叔 --></div>
  <span> 张三</span>
</div>
<script>
  const app = document.querySelector(`#app`)
  const span = document.querySelector('span')
  // 标签节点为大写的标签名DIV
  console.log(app.nodeName)//DIV
  console.log(span.nodeName)//SPAN
  // 文本节点为 #text
  console.log(app.firstChild.nodeName)
  //属性节点为属性名
  console.log(app.attributes.id.nodeName)//id
  // 注释节点为#comment
  const empty = document.querySelector('.empty')
  console.log(empty.childNodes[0].nodeName)//#comment
</script>
```

### tagName

nodeName 可以获取不限于元素的节点名，tagName **仅能用于获取标签节点的名称**

- tagName 存在于 Element 类的原型中
- 文本、注释节点值为 undefined
- 获取的值为大写的标签名

### nodeValue

使用 nodeValue 或 data 函数获取节点值，也可以使用节点的 data 属性获取节点内容

| nodeType | nodeValue |
| -------- | --------- |
| 1        | null      |
| 2        | 属性值    |
| 3        | 文本内容  |
| 8        | 注释内容  |

```html
<div id="app">
  <div class="text">text</div>
  <div class="notes"><!-- notes --></div>
</div>
<script>
  const app = document.querySelector(`#app`)
  //标签的 nodeValue 值为 null
  console.log(app.nodeValue)
  //属性的 nodeVale 值为属性值
  console.log(app.attributes.id.nodeValue)//app
  //文本的 nodeValue 值为文本内容
  const text = document.querySelector('.text')
  console.log(text.firstChild.nodeValue)//text
  //注释的 nodeValue 值为注释内容
  const notes = document.querySelector('.notes')
  console.log(notes.childNodes[0].nodeValue)//notes
</script>
```

使用 data 属性可以获取文本与注释内容

```js
<div id="app">
  张三
  <!-- 李四 注释内容-->
</div>
const app = document.querySelector('#app')
console.log(app.childNodes[0].data)// 张三
console.log(app.childNodes[1].data)//李四 注释内容
```

### 树状节点

```js
<div id="app">
  <ul>
    <li><span></span><span></span></li>
    <li><span></span><span></span></li>
    <li><span></span><span></span></li>
  </ul>
</div>
<script>
function tree(el) {
  return Array.from(el.childNodes)
    .filter(node =>node.tagName)
    .map(node => ({
      name: node.nodeName,
      children: tree(node),
    }))
}
console.log(tree(document.getElementById('app'))
//结果            
Array(2)
0: {name: 'HEAD', children: Array(4)}
1: {name: 'BODY', children: Array(2)}            
```

## 节点集合

Nodelist 与 HTMLCollection 都是包含多个节点标签的集合，大部分功能也是相同的

- getElementsBy...等方法返回的是 HTMLCollection
- querySelectorAll 返回的是 NodeList
- NodeList 节点列表是动态的，即内容添加后会动态更新

```js
//结果为NodeList
console.log(document.querySelectorAll('div'))//NodeList(2)[div, div]
//结果为HTMLCollection
console.log(document.getElementsByTagName('div'));//HTMLCollection(2)[div, div]
```

### length

Nodelist 与 HTMLCollection 包含 length 属性，记录了节点元素的数量

### item

Nodelist 与 HTMLCollection 提供了 item()方法来根据索引获取元素

### namedItem

HTMLCollection 具有 namedItem 方法可以按 name 或 id 属性来获取元素

```js
const nodes = document.getElementsByTagName('div')
console.dir(nodes.namedItem('zs'))
console.dir(nodes.namedItem('ls'))
```

也可以使用数组或属性方式获取

```js
const nodes = document.getElementsByTagName('div')
console.dir(nodes['zs']);
console.dir(nodes.ls)
```

数字索引时使用 item 方法，字符串索引时使用 namedItem 或 items 方法

```js
<h1 id="app">app</h1>
<h1 name="zs">张三</h1>
let items = document.getElementsByTagName('h1')
console.log(items[0])
console.log(items['zs'])
```

## 动态与静态

通过 getElementsByTagname 等 getElementsBy... 函数获取的 Nodelist 与 HTMLCollection 集合是动态的，即有元素添加或移动操作将实时反映最新状态

- 使用 getElement...返回的都是动态的集合
- 使用 querySelectorAll 返回的是静态集合

### 使用静态

如果需要保存静态集合，则需要对集合进行复制

```js
const nodes = document.getElementsByTagName('div')
const clone = Array.prototype.slice.call(nodes)
console.log(nodes.length);//2
document.body.appendChild(document.createElement('div'))
console.log(nodes.length);//3
console.log(clone.length);//2
```

## 遍历节点

### forOf

Nodelist 与 HTMLCollection 是类数组的可迭代对象所以可以使用 for...of 进行遍历

### forEach

Nodelist 节点列表也可以使用 forEach 来进行遍历，**但 HTMLCollection 则不可以**

### call/apply

节点集合对象原型中不存在 map 方法，但可以借用 Array 的原型 map 方法实现遍历

```js
const nodes = document.querySelectorAll('div')
Array.prototype.map.call(nodes, (node, index) => {
    console.log(node, index)
})

;[].filter.call(nodes, node => {
	console.log(node)
})
```

### Array.from

Array.from 用于将类数组转为数组，并提供第二个迭代函数。所以可以借用 Array.from 实现遍历

```js
const nodes = document.getElementsByTagName('div')
Array.from(nodes, (node, index) => {
    console.log(node, index)
})
```

###  展开语法

```js
let elements = document.getElementsByTagName('h1')
console.log(elements)
;[...elements].map((item) => {
  item.addEventListener('click', function () {
    this.style.textTransform = 'uppercase'
  })
})
```

## 节点关系

节点是父子级嵌套与前后兄弟关系，使用 DOM 提供的 API 可以获取这种关系的元素

- 文本和注释也是节点，所以也在匹配结果中

### 基础知识

节点是根据 HTML 内容产生的，所以也存在父子、兄弟、祖先、后代等节点关系

- h1 与 ul 是兄弟关系
- span 与 li 是父子关系
- ul 与 span 是后代关系
- span 与 ul 是祖先关系

```html
<h1></h1>
<ul>
  <li>
    <span></span>
    <strong></strong>
  </li>
</ul>
```

| 节点属性        | 说明           |
| --------------- | -------------- |
| childNode       | 获取所有子节点 |
| parentNode      | 获取父节点     |
| firstChild      | 第一个子节点   |
| lastChild       | 最后一个子节点 |
| nextSibling     | 下一个兄弟节点 |
| previousSibling | 上一个兄弟节点 |

子节点集合与首、尾节点获取

- 文本也是 node 所以也会在匹配当中
- document 是顶级节点 html 标签的父节点是 document

```js
console.log(document.documentElement.parentNode === document)//true
```

### 父节点集合

```js
function parentNodes(node) {
    let nodes = []
    while ((node = node.parentNode)) nodes.push(node)
    return nodes
}
const el = document.getElementById('app')
const nodes = parentNodes(el)
console.log(nodes)
```

使用递归获取所有父级节点

```js
const span = document.querySelector('span')
function parentNodes(node) {
  const nodes = new Array(node.parentNode)
  if (node.parentNode) nodes.push(...parentNodes(node.parentNode))
  return nodes
}
const nodes = parentNodes(document.querySelector('span'))
console.log(nodes)
```

###  后代节点集合

```js
function getChildNodeByName(el, name) {
  const items = []
  Array.from(el.children).forEach(node => {
    if (node.tagName === name.toUpperCase()) items.push(node)
    items.push(...getChildNodeByName(node, name))
  })
  return items
}
const nodes = getChildNodeByName(document, 'span')
console.log(nodes)
```

## 标签关系

使用 childNodes 等获取的节点包括文本与注释，但这不是我们常用的，为此系统也提供了只操作元素的关系方法

### 基础知识

| 节点属性               | 说明                                             |
| ---------------------- | ------------------------------------------------ |
| parentElement          | 获取父元素                                       |
| children               | 获取所有子元素                                   |
| childElementCount      | 子标签元素的数量                                 |
| firstElementChild      | 第一个子标签                                     |
| lastElementChild       | 最后一个子标签                                   |
| previousElementSibling | 上一个兄弟标签                                   |
| nextElementSibling     | 下一个兄弟标签                                   |
| contains               | 返回布尔值，判断传入的节点是否为该节点的后代节点 |

html 标签的父节点是 document，但父标签节点不存在

```js
console.log(document.documentElement.parentNode === document) //true
console.log(document.documentElement.parentElement) //null
```

### 按类名获取标签

```js
function getTagByClassName(className, tag = document) {
  const items = []
  Array.from(tag.children).map(el => {
    if (el.className.includes(className)) items.push(el)
    items.push(...getTagByClassName(className, el))
  })
  return items
}
console.log(getTagByClassName('class'))
```

## 标签获取

### getElementById

使用 ID 选择是非常方便的选择具有 ID 值的节点元素，但注意 ID 应该是唯一的

```js
const node = document.getElementById('app')
console.dir(node)
```

###  getElementsByName

使用 getElementByName 获取设置了 name 属性的元素，虽然在 DIV 等元素上同样有效，但一般用来对表单元素进行操作时使用

- 返回 NodeList 节点列表对象
- NodeList 顺序为元素在文档中的顺序
- 需要在 document 对象上使用

### getElementsByTagName

使用 getElementsByTagName 用于按标签名获取元素

- 返回 HTMLCollection 节点列表对象
- 是不区分大小的获取

**通配符**

可以使用通配符 ***** 获取所有元素

```js
const nodes = document.getElementsByTagName('*')
console.dir(nodes)
```

### getElementsByClassName

getElementsByClassName 用于按 class 样式属性值获取元素集合

- 设置多个值时顺序无关，指包含这些 class 属性的元素

##  样式选择器

### querySelectorAll

使用 querySelectorAll 根据 CSS 选择器获取 Nodelist 节点列表

- 获取的 NodeList 节点列表是静态的，添加或删除元素后不变

### querySelector

querySelector 使用 CSS 选择器获取一个元素

###  matches

用于检测元素是否是指定的样式选择器匹配

### closest

查找最近的符合选择器的祖先元素（包括自身）

## 标准属性

元素的标准属性具有相对应的 DOM 对象属性

- 操作属性区分大小写
- 多个单词属性命名规则为第一个单词小写，其他单词大写
- 属性值是多类型并不全是字符串，也可能是对象等
- 事件处理程序属性值为函数
- style 属性为 CSSStyleDeclaration 对象
- DOM 对象不同生成的属性也不同

### 属性别名

| 属性  | 别名      |
| ----- | --------- |
| class | className |
| for   | htmlFor   |

### 多类型

大部分属性值是都是字符串，但并不是全部

```js
let input = document.getElementsByName('age').item(0)
input.value = parseInt(input.value) + 100
```

表单 checked 属性值为 Boolean 类型

```js
const node = document.querySelector(`[name='hot']`)
node.addEventListener('change', function () {
    console.log(this.checked)
})
```

属性值并都与 HTML 定义的值一样，下面返回的 href 属性值是完整链接

```js
const node = document.querySelector(`#home`)
console.log(node.href)
```

## 元素特征

对于标准的属性可以使用 DOM 属性的方式进行操作，但对于标签的非标准的定制属性则不可以。但 JS 提供了方法来控制标准或非标准的属性

可以理解为元素的属性分两个地方保存，DOM 属性中记录标准属性，特征中记录标准和定制属性

- 使用特征操作时属性名称不区分大小写
- 特征值都为字符串类型

| 方法            | 说明     |
| --------------- | -------- |
| getAttribute    | 获取属性 |
| setAttribute    | 设置属性 |
| removeAttribute | 删除属性 |
| hasAttribute    | 属性检测 |

###  attributes

元素提供了 attributes 属性可以只读的获取元素的属性

```js
<div id="app" class="class" data-name="zs">张三</div>
let app = document.querySelector('#app')
console.dir(app.attributes['class'].nodeValue) //class
console.dir(app.attributes['data-name'].nodeValue) //zs
```

### 自定义特征

虽然可以随意定义特征并使用 getAttribute 等方法管理，但很容易造成与标签的现在或未来属性重名。建议使用以 data-为前缀的自定义特征处理，针对这种定义方式 JS 也提供了接口方便操作

- 元素中以 data-为前缀的属性会添加到属性集中
- 使用元素的 dataset 可获取属性集中的属性
- 改变 dataset 的值也会影响到元素上

```js
<div id="app" class="class" data-name="zs" data-color="red">张三</div>
let app = document.querySelector('#app')
console.log(app.dataset.name) //zs
console.log(app.dataset.color) //red
```

多个单词的特征使用驼峰命名方式读取

```js
<div id="app" class="class" data-title-color="red" data-name="zs" >张三</div>
let app = document.querySelector('#app')
console.log(app.dataset.titleColor) //red
```

### 属性同步

特征和属性是记录元素属性的两个不同场所，大部分更改会进行同步操作

更改了 className，会自动同步到了特征集中，反之亦然

```js
const app = document.querySelector('#app')
app.className = 'ls'
console.log(app.getAttribute('class')) //ls
app.setAttribute('class', 'blue')
console.log(app.className) //blue
```

对 input 值使用属性设置，但并没有同步到特征

```js
<input type="text" name="package" value="李四" />
const package = document.querySelector(`[name='package']`)
package.value = '张三'
console.log(package.getAttribute('value'))//李四
```

但改变 input 的特征 value 会同步到 DOM 对象属性

```js
<input type="text" name="package" value="李四" />
const package = document.querySelector(`[name='package']`)
package.setAttribute('value', '张三')
console.log(package.value) //张三
```

## 创建节点

创建节点的就是构建出 DOM 对象，然后根据需要添加到其他节点中

###  append

append 也是用于添加元素，同时他也可以直接添加文本等内容

```js
document.body.append((document.createElement('div').innerText = '张三'))
document.body.append('李四')
```

### createTextNode

创建文本对象并添加到元素中

```js
let app = document.querySelector('#app')
let text = document.createTextNode('李四')
app.append(text)
```

### createElement

使用 createElement 方法可以标签节点对象

```js
let app = document.querySelector('#app')
let span = document.createElement('span')
span.innerHTML = 'houdunren'
app.append(span)
```

使用 PROMISE 结合节点操作来加载外部 JAVASCRIPT 文件

```js
function js(file) {
  return new Promise((resolve, reject) => {
    let js = document.createElement('script')
    js.type = 'text/javascript'
    js.src = file
    js.onload = resolve
    js.onerror = reject
    document.head.appendChild(js)
  })
}

js('1.js').then(() => console.log('加载成功')).catch((error) => console.log(`${error.target.src} 加载失败`))
```

使用同样的逻辑来实现加载 CSS 文件

```js
function css(file) {
  return new Promise((resolve, reject) => {
    let css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = file
    css.onload = resolve
    css.onerror = reject
    document.head.appendChild(css)
  })
}
css('1.css').then(() => {
  console.log('加载成功')
})
```

### cloneNode&importNode

**使用 cloneNode 和 document.importNode 用于复制节点对象操作**

- cloneNode 是节点方法
- cloneNode 参数为 true 时递归复制子节点即深拷贝
- importNode 是 documet 对象方法

**document.importNode 方法是部分 IE 浏览器不支持的，也是复制节点对象的方法**

- 第一个参数为节点对象
- 第二个参数为 true 时递归复制

## 节点内容

###  innerHTML

inneHTML 用于向标签中添加 html 内容，同时触发浏览器的解析器重绘 DOM

nnerHTML 中只解析 HTML 标签语法，所以其中的 script 不会做为 JS 处理

**重绘节点**

使用 innertHTML 操作会重绘元素，下面在点击第二次就没有效果了

- 因为对#app 内容进行了重绘，即删除原内容然后设置新内容
- 重绘后产生的 button 对象没有事件
- 重绘后又产生了新 img 对象，所以在控制台中可看到新图片在加载

### outerHTML

outerHTML 与 innerHTML 的区别是包含父标签

- outerHTML 不会删除原来的旧元素
- 只是用新内容替换替换旧内容，旧内容（元素）依然存在

### textContent 与 innerText

textContent 与 innerText 是访问或添加文本内容到元素中

- textContentb 部分 IE 浏览器版本不支持
- innerText 部分 FireFox 浏览器版本不支持
- 获取时忽略所有标签,只获取文本内容
- 设置时将内容中的标签当文本对待不进行标签解

### outerText

与 innerText 差别是会影响所操作的标签

###  insertAdjacentText

将文本插入到元素指定位置，不会对文本中的标签进行解析，包括以下位置

| 选项        | 说明         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

##  节点管理

###  推荐方法

| 方法        | 说明                       |
| ----------- | -------------------------- |
| append      | 节点尾部添加新节点或字符串 |
| prepend     | 节点开始添加新节点或字符串 |
| before      | 节点前面添加新节点或字符串 |
| after       | 节点后面添加新节点或字符串 |
| replaceWith | 将节点替换为新节点或字符串 |

###  insertAdjacentHTML

将 html 文本插入到元素指定位置，浏览器会对文本进行标签解析，包括以下位置

| 选项        | 说明         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

### insertAdjacentElement

insertAdjacentElement() 方法将指定元素插入到元素的指定位置，包括以下位置

- 第一个参数是位置
- 第二个参数为新元素节点

| 选项        | 说明         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

### 古老方法

下面列表过去使用的操作节点的方法，现在不建议使用了。但在阅读老代码时可来此查看语法

| 方法         | 说明                           |
| ------------ | ------------------------------ |
| appendChild  | 添加节点                       |
| insertBefore | 用于插入元素到另一个元素的前面 |
| removeChild  | 删除节点                       |
| replaceChild | 进行节点的替换操作             |

### DocumentFragment

当对节点进行添加、删除等操作时，都会引起页面回流来重新渲染页面,即重新渲染颜色，尺寸，大小、位置等等。所以会带来对性能的影响

**解决以上问题可以使用以下几种方式**

1. 可以将 DOM 写成 html 字符串，然后使用 innerHTML 添加到页面中，但这种操作会比较麻烦，且不方便使用节点操作的相关方法。
2. 使用 createDocumentFragment 来管理节点时，此时节点都在内存中，而不是 DOM 树中。对节点的操作不会引发页面回流,带来比较好的性能体验。

**DocumentFragment 特点**

- createDocumentFragment 父节点为 null
- 继承自 node 所以可以使用 NODE 的属性和方法
- createDocumentFragment 创建的是文档碎片，节点类型 nodeType 为 11。因为不在 DOM 树中所以只能通过 JS 进行操作
- 添加 createDocumentFragment 添加到 DOM 后,就不可以再操作 createDocumentFragment 元素了,这与 DOM 操作是不同的
- 将文档 DOM 添加到 createDocumentFragment 时,会移除文档中的 DOM 元素
- createDocumentFragment 创建的节点添加到其他节点上时，会将子节点一并添加
- createDocumentFragment 是虚拟节点对象，不直接操作 DOM 所以性能更好
- 在排序/移动等大量 DOM 操作时建议使用 createDocumentFragment

## 表单控制

表单是高频操作的元素，下面来掌握表单项的 DOM 操作

### 表单查找

JS 为表单的操作提供了单独的集合控制

- 使用 document.forms 获取表单集合
- 使用 form 的 name 属性获取指定 form 元素
- 根据表单项的 name 属性使用 form.elements.title 获取表单项，
- 也可以直接写成 form.name 形式，不需要 form.elements.title
- 针对 radio/checkbox 获取的表单项是一个集合

## 样式管理

通过 DOM 修改样式可以通过更改元素的 class 属性或通过 style 对象设置行样式来完成

- 建议使用 class 控制样式，将任务交给 CSS 处理，更简单高效

### 批量设置

使用 JS 的 className 可以批量设置样式

```js
let app = document.getElementById('app')
app.className = 'class'
```

也可以通过特征的方式来更改

```js
let app = document.getElementById('app')
app.setAttribute('class', 'class1')
```

### classList

如果对类单独进行控制使用 classList 属性操作

| 方法                    | 说明     |
| ----------------------- | -------- |
| node.classList.add      | 添加类名 |
| node.classList.remove   | 删除类名 |
| node.classList.toggle   | 切换类名 |
| node.classList.contains | 类名检测 |

### 设置行样式

使用 style 对象可以对样式属性单独设置，使用 cssText 可以批量设置行样式

**样式属性设置**

使用节点的 style 对象来设置行样式

- 多个单词的属性使用驼峰进行命名

```js
let app = document.getElementById('app')
app.style.backgroundColor = 'red'
app.style.color = 'yellow'
```

**批量设置行样式**

使用 cssText 属性可以批量设置行样式，属性名和写 CSS 一样不需要考虑驼峰命名

```js
let app = document.getElementById('app')
app.style.cssText = `background-color:red;color:yellow`
```

也可以通过 setAttribute 改变 style 特征来批量设置样式

```js
let app = document.getElementById('app')
app.setAttribute('style', `background-color:red;color:yellow;`)
```

### 获取样式

**可以通过 style 对象，window.window.getComputedStyle 对象获取样式属性**

**style**

可以使用 DOM 对象的 style 属性读取行样式

- style 对象不能获取行样式外定义的样式

**getComputedStyle**

使用 window.getComputedStyle 可获取所有应用在元素上的样式属性

- 函数第一个参数为元素
- 第二个参数为伪类
- 这是计算后的样式属性，所以取得的单位和定义时的可能会有不同

```js
let app = document.getElementById('app')
let fontSize = window.getComputedStyle(app).fontSize
console.log(fontSize.slice(0, -2))
console.log(parseInt(fontSize))
```