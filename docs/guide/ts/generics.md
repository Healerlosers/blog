# 泛型

## 泛型Geberics

泛型指使用时才定义类型，即类型可以像参数一样定义，主要解决类、接口、函数的复用性，让它们可以处理多种类型

## 基本使用

```ts
function use(arg: any) {
  return arg;
}
let use1 = use('张三') //类型为 any
let use2 = use(true) //类型为 any
```

使用了泛型定义后，返回值即为明确的类型

```ts
function use<T>(arg: T):T {
  return arg;
}
let use1 = use<string>('张三') //类型为 string
let use2 = use<number>(1) //类型为 number
let use3 = use<boolean>(true) //类型为 boolean
```

如果调用时不指定类型系统也会自动推断类型

```ts
function use<T>(arg: T):T {
  return arg;
}
let use1 = use('张三') // use1 类型为 string
```

## 类型继承

下面的代码是不严谨的，我们不需要处理数字，因为数字没有 length 属性，同时我们希望返回类型不是 any

```ts
function getLength(arg: any) {
  return arg.length;
}
console.log(getLength('张三')); //2
console.log(getLength(['张三'])); //1
console.log(getLength(18)); //undefined
```

泛型是不确定的类型，所以下面读取 length 属性将报错

```ts
function getLength<T>(arg: T): number {
  return arg.length; //类型“T”上不存在属性“length”
}
```

可以通过继承来解决这个问题

```ts
function getLength<T extends string>(arg: T): number {
  return arg.length;
}
```

可以通过继承 extends 继承，让泛型定义包含 length 属性

```ts
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
//或使用 interface 或 type
type LengthType = { length: number }
function getLengthAttribute<T extends LengthType>(arg: T): number {
  return arg.length;
}
```

如果你的类型只是字符串或数组，也可以使用联合类型

```ts
function getLength<T extends string | any[]>(arg: T): number {
  return arg.length
}
console.log(getLength('张三'))
console.log(getLength([true]))
```

TS 也会自动推断，比如下面参数是 T[]，TS 会推断为数组类型，所以这时候是存在 length 的，不会报错

```ts
function getLength<T>(arg: T[]): number {
  return arg.length;
}
```

将泛型理解为动态类型，他最终也会是一个类型，所以使用方式与我们其他类型一样的。比如下面的返回值类型，我们就返回了一个元组，包括泛型与数值类型

```ts
function getLength<T extends string>(arg: T): [T, number] {
  return [arg, arg.length];
}
let arr = getLength<string>('张三')
```

## 类

**使用泛型复用类**

对数值与字符串类型的集合进行管理，因为业务是一样的，所以下面的实现是重复的

```ts
class CollectionNumber {
  data: number[] = []
  public push(...items: number[]) {
    this.data.push(...items)
  }
  public shift() {
    return this.data.shift()
  }
}
class CollectionString {
  data: string[] = []
  public push(...items: string[]) {
    this.data.push(...items)
  }
  public shift() {
    return this.data.shift()
  }
}
const numberCollection = new CollectionNumber()
numberCollection.push(1)
const stringCollection = new CollectionString()
stringCollection.push('张三', '李四')
console.log(stringCollection.shift())
```

使用泛型来控制就好多了

```ts
class Collection<T> {
  data: T[] = []
  public push(...items: T[]) {
    this.data.push(...items)
  }
  public shift() {
    return this.data.shift()
  }
}
const collections = new Collection<number>()
type User = { name: string, age: number }
const use: User = { name: "张三", age: 18 }
const userCollection = new Collection<User>()
userCollection.push(use)
console.log(userCollection.shift());
```

**接口结合泛型**

对类使用泛型处理后，可以保证传递与返回值的类型，并具有良好的代码提示

```ts
class User<T>{
  constructor(protected _user: T) { }
  public get(): T {
    return this._user
  }
}

interface UserInterface {
  name: string, age: number
}
const instance = new User<UserInterface>({ name: '张三', age: 18 })
console.log(instance.get().age);
```

## 接口

对接口的类型使用泛型定义，比如 isLock 可以为 `number` 或`boolean`，并对文章的评论内容进行定义

```ts
//文章接口
interface articleInterface<T, B> {
  title: string,
  isLock: B,
  comments: T[],
}
//评论类型
type CommentType = {
  comment: string
}
//定义文章数据包含评论内容
const obj: articleInterface<CommentType, boolean> = {
  title: '后盾人官网',
  isLock: true,
  comments: [
    { comment: '这是一个评论' }
  ]
}

console.log(obj);
```

## 值类型

解构得到的变量类型不是具体类型，而是数组类型，比如变量 y 的类型是 *string* | (() => *void*)

这在写项目时是不安全的，因为可以将 y 随时修改为字符串，同时也不会有友好的代码提示

```ts
function func() {
  let a = '张三'
  let b = (x: number, y: number): number => x + y
  return [a, b]
}

const [x, y] = func() //变量 y 的类型为 string | (() => void)
```

使用 as const 就可以很高效的解决上面的问题，可以得到具体的类型，来得到更安全的代码，同时会有更好的代码提示

```ts
function func() {
  let a = '张三'
  let b = (x: number, y: number): number => x + y
  return [a, b] as const
}

const [x, y] = func() //变量 y 的类型为 string | (() => void)
```

也可以使用泛型来得到具体的值类型

```ts
function func() {
  const a: string = '张三'
  const b: number = 18
  return f(a, b)
}
function f<T extends any[]>(...args: T): T {
  return args;
}
const [r, e] = func()
```