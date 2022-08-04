# Set

**用于存储任何类型的唯一值，无论是基本类型还是对象引用**

- 只能报错值没有键名
- 严格类型检测如字符串数组不等于数值型数字
- 值是唯一的
- 变量顺序是添加的顺序，方便保存回调函数

## 基本使用

对象可以属性最终都会转为字符串

```js
let obj = { 1: "张三", "1": "李四" };
console.log(obj); //{1: '李四'}
```

使用对象做为键名时，会将对象转为字符串后使用

```js
let obj = { 1: "张三", "1": "李四" };
console.log(obj);//{1: '李四'}
let obj1 = { [obj]: "王五" };//{[object Object]: '王五'}
console.log(obj1);
console.log(obj1[obj.toString()]);//王五
console.log(obj1["[object Object]"]);//王五
```

使用数组做初始数据

```js
let hd = new Set(['张三', '李四']);
console.log(hd.values()); //SetIterator{'张三', '李四'}
```

**Set 中是严格类型约束的，下面的数值`1`与字符串`1`属于两个不同的值**

```js
let set = new Set();
set.add(1);
set.add("1");
console.log(set); //Set(2) {1, "1"}
```

**使用 `add` 添加元素，不允许重复添加`hdcms`值**

```js
let set = new Set();
set.add(1);
set.add(2);
set.add(2)
console.log(set.values()); //SetIterator {1", 2"}
```

## 获取数量size

```js
let set = new Set(['张三', '李四',"李四"]);
console.log(set.size); //2
```

## 元素检测has

```js
let set = new Set(['张三', '李四',"李四"]);
console.log(set.has("张三")); //true
```

## 删除元素delete

**使用 `delete` 方法删除单个元素，返回值为`boolean`类型**

```js
let set = new Set(['张三', '李四', "王五"]);
set.delete("张三");
console.log(set);//Set(2){'李四', '王五'}
```

## 删除所有clear

```js
let set = new Set(['张三', '李四', "王五"]);
set.clear();
console.log(set);//Set(0){size: 0}
```

## 数组转换

**可以使用`点语法` 或 `Array.form` 静态方法将Set类型转为数组，这样就可以使用数组处理函数了**

```js
const set = new Set(["张三", "李四"]);
console.log(set);//Set(2){'张三', '李四'}
console.log([...set]); //['张三', '李四']
console.log(Array.from(set)); //['张三', '李四']
```

移除Set中大于5的数值

```js
let set = new Set("123456789");
set = new Set([...set].filter(item => item < 5));
console.log(set);//Set(4){'1', '2', '3', '4'}
```

## 去除重复

```js
//去除字符串重复
console.log([...new Set("https://www.baidu.com/")].join(""));//htps:/w.baiducom
//去除数组重复
const arr = [1, 2, 3, 5, 2, 3];
console.log(...new Set(arr)); // 1 2 3 5
```

## 遍历数据

**使用 `keys()/values()/entries()` 都可以返回迭代对象，因为`set`类型只有值所以 `keys与values` 方法结果一致**

```js
const hd = new Set(["张三", "李四", "王五"]);
console.log(hd.values()); //SetIterator{'张三', '李四', '王五'}
console.log(hd.keys()); //SetIterator{'张三', '李四', '王五'}
console.log(hd.entries()); //{'张三' => '张三', '李四' => '李四', '王五' => '王五'}
```

**可以使用 `forEach` 遍历Set数据，默认使用 `values` 方法创建迭代器**

```js
//为了保持和遍历数组参数统一，函数中的value与key是一样的
let arr = [7, 6, 2, 8, 2, 6];
let set = new Set(arr);
//使用forEach遍历
set.forEach((item,key) => console.log(item,key));//77  66  22  88
```

**也可以使用 `forof` 遍历Set数据，默认使用 `values` 方法创建迭代器**

```js
let set = new Set([7, 6, 2, 8, 2, 6]);
for (const iterator of set) {
    console.log(iterator); //7  6  2  8
}
```

## 交集

获取两个集合中共同存在的元素

```js
let set1 = new Set(['张三', '李四']);
let set2 = new Set(['王五', '张三']);
let newSet = new Set(
    [...set1].filter(item => set2.has(item))
);
console.log(newSet); //Set(1){'张三'}
```

## 差集

在集合a中出现但不在集合b中出现元素集合

```js
let set1 = new Set(['张三', '李四']);
let set2 = new Set(['王五', '张三']);
let newSet = new Set(
    [...set1].filter(item => !set2.has(item))
);
console.log(newSet); //Set(1){'李四'}
```

## 并集

将两个集合合并成一个新的集合，由于Set特性当然也不会产生重复元素

```js
let set1 = new Set(['张三', '李四']);
let set2 = new Set(['张三', '王五']);
let newSet = [...set1, ...set2];
console.log(newSet);//['张三', '李四', '张三', '王五']
```

## WeakSet

**WeakSet结构同样不会存储重复的值，它的成员必须只能是对象类型的值**

- 垃圾回收不考虑WeakSet，即被WeakSet引用时引用计数器不加一，所以对象不被引用时不管WeakSet是否在使用都将删除
- 因为WeakSet 是弱引用，由于其他地方操作成员可能会不存在，所以不可以进行`forEach( )`遍历等操作
- 也是因为弱引用，WeakSet 结构没有keys( )，values( )，entries( )等方法和size属性
- 因为是弱引用所以当外部引用删除时，希望自动删除数据时使用 `WeakMap`

### 声明定义

```js
// 数据不是对象类型将产生错误
new WeakSet(["张三", "李四"]); //nvalid value used in weak set
new WeakSet("王五"); //nvalid value used in weak set
```

**WeakSet的值必须为对象类型**

```js
let set= new WeakSet([["张三"], ["李四"]]);
console.log(set);//WeakSet{[value:["张三"],[value:["李四"]]}
```

**将DOM节点保存到`WeakSet`**

```js
document.querySelectorAll("button").forEach(item => Wset.add(item));
```

### 基本操作

```js
const set = new WeakSet();
const arr = ["张三"];
//添加操作
set.add(arr);
console.log(set.has(arr));//true
//删除操作
set.delete(arr);
//检索判断
console.log(set.has(arr));//false
```

### 垃圾回收

WeaSet保存的对象不会增加引用计数器，如果一个对象不被引用了会自动删除

- 下例中的数组被 `arr` 引用了，引用计数器+1
- 数据又添加到了 set 的WeaSet中，引用计数还是1
- 当 `arr` 设置为null时，引用计数-1 此时对象引用为0
- 当垃圾回收时对象被删除，这时WakeSet也就没有记录了

```js
const set = new WeakSet();
let arr = ["张三"];
set.add(arr);
console.log(set.has(arr));//true
arr = null;
console.log(set); // WeakSet{[value:["张三"]]}
setTimeout(() => {
    console.log(set); //WeakSet {}
}, 1000);
```

