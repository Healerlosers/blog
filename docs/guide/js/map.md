

# Map

**Map是一组键值对的结构，用于解决以往不能用对象做为键的问题**

- 具有极快的查找速度
- 函数、对象、基本类型都可以做为键或值

## 定义

可以接受一个数组作为参数，该数组的成员是一个表示键值对的数组

```js
let map = new Map([
    ['name1', '李四'],
    ['name2','王五']
]);
console.log(map);//{'name1' => '李四', 'name2' => '王五'}
console.log(map.get('name2')); //王五
```

使用`set` 方法添加元素，支持链式操作

```js
let map = new Map();
let obj = {
    name: "张三"
};
map.set(obj, "王五").set("name", "李四");
console.log(map.entries()); //MapIterator{{name: "张三"} => '王五', 'name' => '李四'}
```

使用构造函数`new Map`创建

```js
const map = new Map();
const arr = [["name1", "张三"], ["name2", "李四"]];
arr.forEach(([key, value]) => {
    map.set(key, value);
});
console.log(map);//Map(2){'name1' => '张三', 'name2' => '李四'}
```

对于键是对象的`Map`， 键保存的是内存地址，值相同但内存地址不同的视为两个键

```js
let arr = ["张三"];
const map = new Map();
map.set(arr, "李四");
console.log(map.get(arr)); //李四
console.log(map.get(["张三"])); //undefined

```

## 获取数量Sizq

```js
console.log(map.size);
```

## 元素检测has

```js
console.log(map.has(obj1));
```

## 读取元素get

```js
let map = new Map();
let obj = {
    name: '张三'
}
map.set(obj, '李四');
console.log(map.get(obj));//李四
```

## 删除元素

**使用 `delete()` 方法删除单个元素**

```js
let map = new Map();
let obj = {
    name: '张三'
}
map.set(obj, '李四');
console.log(map.get(obj));//李四
map.delete(obj);
console.log(map.get(obj));//undefined
```

**使用`clear`方法清除Map所有元素**

```js
let map = new Map();
let obj1 = {
    name: '张三'
}
map.set(obj1, {
    title: '李四'
});
console.log(map.size);//1
map.clear()
console.log(map.size);//0
```



##  遍历数据

**使用 `keys()/values()/entries()` 都可以返回可遍历的迭代对象**

```js
let map = new Map([["name1", "张三"], ["name2", "李四"]]);
console.log(map.keys()); //MapIterator{'name1', 'name2'}
console.log(map.values()); //MapIterator{'张三', '李四'}
console.log(map.entries()); //MapIterator {'name1' => '张三', 'name2' => '李四'}
```

**可以使用`keys/values` 函数遍历键与值**

```js
let map = new Map([["name1", "张三"], ["name2", "李四"]]);
for (const key of map.keys()) {
    console.log(key);// name1   name2
}
for (const value of map.values()) {
    console.log(value);//张三   李四
}
```

**使用`for/of`遍历操作，直播遍历Map 等同于使用`entries()` 函数**

```js
let map = new Map([["name1", "张三"], ["name2", "李四"]]);
for (const [key, value] of map) {
    console.log(`${key}=>${value}`);  //name1=>张三  name2=>李四
}
```

**使用`forEach`遍历操作**

```js
let map = new Map([["name1", "张三"], ["name2", "李四"]]);
map.forEach((value, key) => {
    console.log(`${key}=>${value}`);//name1=>张三  name2=>李四
});
```

## 数组转换

**可以使用`展开语法` 或 `Array.form` 静态方法将Set类型转为数组，这样就可以使用数组处理函数了**

```js
let map = new Map([["name1", "张三"], ["name2", "李四"]]);
console.log(...map); //['name1', '张三'] ['name2', '李四']
console.log(...map.entries()); //['name1', '张三'] (2) ['name2', '李四']
console.log(...map.values()); //张三 李四
console.log(...map.keys()); //name1 name2
```

**检索包含张三的值组成新Map**

```js
let map = new Map([["name1", "张三"], ["name2", "李四"]]);
let newArr = [...map].filter(function(item) {
console.log(item);//['name1', '张三']  ['name2', '李四']
return item[1].includes("张三");
});
map = new Map(newArr);
console.log(...map.keys());//name1
```

## WeakMap

**WeakMap** 对象是一组键/值对的集

- 键名必须是对象
- WeaMap对键名是弱引用类型，键值是正常引用
- 垃圾回收不考虑WeaMap的键名，不会改变引用计数器，键在其他地方不被引用时即删除
- 因为WeakMap 是弱引用，由于其他地方操作成员可能会不存在，所以不可以进行`forEach( )`遍历等操作
- 也是因为弱引用，WeaMap 结构没有keys( )，values( )，entries( )等方法和 size 属性
- 当键的外部引用删除时，希望自动删除数据时使用 `WeakMap`

### 声明定义

```js
//以下操作由于键不是对象类型将产生错误
new WeakSet("张三"); //TypeError: Invalid value used in weak set
```

将DOM节点保存到`WeakSet`

```html
<body>
    <div>张三</div>
    <div>李四</div>
</body>
<script>
    const hd = new WeakMap();
    document.querySelectorAll("div").forEach(item => hd.set(item, item.innerHTML));
    console.log(hd); //WeakMap {div => "张三", div => "李四"}
</script>
```

### 基本操作

```js
const map = new WeakMap();
const arr = ["张三"];
//添加操作
map.set(arr, "李四");
console.log(map.has(arr)); //true
//删除操作
map.delete(arr);
//检索判断
console.log(map.has(arr)); //false
```

### 垃圾回收

WakeMap的键名对象不会增加引用计数器，如果一个对象不被引用了会自动删除

- 下例当`obj`删除时内存即清除，因为WeakMap是弱引用不会产生引用计数
- 当垃圾回收时因为对象被删除，这时WakeMap也就没有记录了

```js
let map = new WeakMap();
let obj = {};
map.set(obj, "张三");
obj = null;
console.log(map);//WeakMap{{...} => '张三'}

setTimeout(() => {
    console.log(map);//WeakMap{}
}, 1000);
```

```html
<style>
    * {
        padding: 0;
        margin: 0;
    }
    body {
        padding: 20px;
        width: 100vw;
        display: flex;
        box-sizing: border-box;
    }
    div {
        border: solid 2px #ddd;
        padding: 10px;
        flex: 1;
    }
    div:last-of-type {
        margin-left: -2px;
    }
    ul {
        list-style: none;
        display: flex;
        width: 200px;
        flex-direction: column;
    }
    li {
        height: 30px;
        border: solid 2px #e67e22;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        color: #333;
        transition: 1s;
    }
    a {
        border-radius: 3px;
        width: 20px;
        height: 20px;
        text-decoration: none;
        text-align: center;
        background: #16a085;
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }
    .remove {
        border: solid 2px #eee;
        opacity: 0.8;
        color: #eee;
    }
    .remove a {
        background: #eee;
    }
    p {
        margin-top: 20px;
    }
    p span {
        display: inline-block;
        background: #16a085;
        padding: 5px;
        color: white;
        margin-right: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
    }
</style>
<div>
    <ul>
        <li><span>php</span> <a href="javascript:;">+</a></li>
        <li><span>js</span> <a href="javascript:;">+</a></li>
        <li><span>向军讲编程</span><a href="javascript:;">+</a></li>
    </ul>
</div>
<div>
    <strong id="count">共选了0门课</strong>
    <p id="lists"></p>
</div>
<script>
    "use strict";  //张三  李四  王五 set  set1  set2

    class Lesson  {
        constructor() {
            this.lis = document.querySelectorAll("ul>li");
            this.countELem = document.getElementById("count");
            this.listElem = document.getElementById("lists");
            this.map = new WeakMap();
        }
        run(){
            this.lis.forEach(item=>{
                item.querySelector("a").addEventListener("click",event=>{
                    const elem = event.target;
                    const state = elem.getAttribute("select");
                    if (state){
                        elem.removeAttribute("select");
                        this.map.delete(elem.parentElement)
                        elem.innerHTML = "";
                        elem.style.backgroundColor = "green";
                    }else {
                        elem.setAttribute("select", true);
                        this.map.set(elem.parentElement, true);
                        elem.innerHTML = "-";
                        elem.style.backgroundColor = "red";
                    }
                    this.render();
                })

            })
        }
        render() {
            this.countELem.innerHTML = `共选了${this.count()}课`;
            this.listElem.innerHTML = this.lists().join("");
        }
        count() {
            return [...this.lis].reduce((count, item) => {
                return (count += this.map.has(item) ? 1 : 0);
            }, 0);
        }
        lists() {
            return [...this.lis]
                .filter(item => {
                return this.map.has(item);
            })
                .map(item => {
                return `<span>${item.querySelector("span").innerHTML}</span>`;
            });
        }
    }
    new Lesson().run()
</script>
```

