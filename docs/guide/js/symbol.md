#  Symbol

:::warning

Symbol用于防止属性名冲突而产生的，比如向第三方对象中添加属性时。

Symbol 的值是唯一的，独一无二的不会重复的

:::

## Symbol

```js
let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1); //symbol
console.log(sym1 === sym2); //false
```

Symbol 不可以添加属性

```js
let sym1 = Symbol();
sym1.name = "后盾人";
console.log(sym1.name);// Cannot create property 'name' on symbol 'Symbol()'
```

## 描述参数

可传入字符串用于描述Symbol，方便在控制台分辨Symbol

```js
let sym1 = Symbol("is name");
let sym2 = Symbol("这是一个测试");

console.log(sym1); //Symbol(is name)
console.log(typeof sym2); //symbol
console.log(sym2.toString()); //Symbol(这是一个测试)
```

传入相同参数Symbol也是独立唯一的，因为参数只是描述而已，但使用 `Symbol.for`则不会

```js
let sym1 = Symbol("张三");
let sym2 = Symbol("张三");
console.log(sym1 === sym2); //false
```

使用`description`可以获取传入的描述参数

```js
let sym = Symbol("张三");
console.log(sym.description); //张三
```

## Symbol.for

**根据描述获取Symbol，如果不存在则新建一个Symbol**

- 使用Symbol.for会在系统中将Symbol登记
- 使用Symbol则不会登记

```js
let sym1 = Symbol.for("张三");
let sym2 = Symbol.for("张三");
console.log(sym1 === sym2); //true
```

## Symbol.keyFor

**`Symbol.keyFor` 根据使用`Symbol.for`登记的Symbol返回描述，如果找不到返回undefined**

```js
let sym1 = Symbol.for("张三");
console.log(Symbol.keyFor(sym1)); //张三
let sym2 = Symbol("name");
console.log(Symbol.keyFor(sym2)); //undefined
```

## 对象属性

**Symbol 是独一无二的所以可以保证对象属性的唯一**

- Symbol 声明和访问使用 `[]`（变量）形式操作
- 也不能使用 `.` 语法因为 `.`语法是操作字符串属性的

```js
//写法是错误的，会将symbol 当成字符串symbol处理
let symbol = Symbol("张三");
let obj = {
    symbol: "name"
};
console.log(obj);//{symbol: 'name'}
console.log(obj.symbol);//name

//正确写法是以[] 变量形式声明和访问
let symbol = Symbol("name");
let obj = {
    [symbol]: "张三"
};
console.log(obj[symbol]); //张三
```

## 缓存操作

**使用`Symbol`可以解决在保存数据时由于名称相同造成的耦合覆盖问题**

```js
class Cache {
    static data = {};

    static set(name, value) {
        this.data[name] = value
    }

    static get(name) {
        return this.data[name]
    }
}

let use = {
    name: "张三",
    key:Symbol("缓存")
}
let cart = {
    name:"李四",
    key:Symbol("李四")
}
Cache.set(use.key,use);
Cache.set(cart.key,cart);
console.log(Cache.get(use.key));//{name: '张三', key: Symbol(缓存)}
console.log(Cache.get(cart.key));//{name: '李四', key: Symbol(李四)}
```

## 遍历属性

**Symbol 不能使用 `for/in`、`for/of` 遍历操作**

```js
let symbol = Symbol("name");
let obj = {
    name: "李四",
    [symbol]: "张三"
};
for (const key in obj) {
    console.log(key); //name
}
for (const key of Object.keys(obj)) {
    console.log(key); //name
}
```

**可以使用 `Object.getOwnPropertySymbols` 获取所有`Symbol`属性**

```js
let symbol = Symbol("name");
let obj = {
    name: "李四",
    [symbol]: "张三"
};
for (const key of Object.getOwnPropertySymbols(obj)) {
    console.log(key);//Symbol(name)
}
```

**也可以使用 `Reflect.ownKeys(obj)` 获取所有属性包括`Symbol`**

```js
let symbol = Symbol("name");
let obj = {
    name: "李四",
    [symbol]: "张三"
};
for (const key of Reflect.ownKeys(obj)) {
    console.log(key); //name Symbol(name)
}
```

**如果对象属性不想被遍历，可以使用`Symbol`保护**

```js
const site = Symbol("name");
class User {
    constructor(name) {
        this[site] = "张三";
        this.name = name;
    }
    getName() {
        return `${this[site]}-${this.name}`;
    }
}
const use = new User("李四");
for (const key in use) {
    console.log(key);//name
}
```

