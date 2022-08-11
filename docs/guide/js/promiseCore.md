# Promise核心

## 起步构建

本章来自己开发一个 Promise 实现，提升异步编程的能力

首先声明定义类并声明 Promise 状态与值，有以下几个细节需要注意

- executor 为执行者
- 当执行者出现异常时触发**拒绝**状态
- 使用静态属性保存状态值
- 状态只能改变一次，所以在 resolve 与 reject 添加条件判断
- 因为 `resolve`或`rejected`方法在 executor 中调用，作用域也是 executor 作用域，这会造成 this 指向 window，现在我们使用的是 class 定义，this 为 undefined

```js
class Pro {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";
    constructor(executor) {
        this.status = Pro.PENDING;
        this.value = null;
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }
    resolve(value) {
        if (this.status === Pro.PENDING) {
            this.status = Pro.FULFILLED;
            this.value = value;
        }
    }
    reject(value) {
        if (this.status === Pro.PENDING) {
            this.status = Pro.REJECTED;
            this.value = value;
        }
    }
}
```

测试结果

```js
let p = new Pro((resolve, reject) => {
    resolve("张三");
});
console.log(p);//Pro{status: 'fulfilled', value: '张三'}
```

##  THEN

现在添加 then 方法来处理状态的改变，有以下几点说明

1. then 可以有两个参数，即成功和错误时的回调函数
2. then 的函数参数都不是必须的，所以需要设置默认值为函数，用于处理当没有传递时情况
3. 当执行 then 传递的函数发生异常时，统一交给 onRejected 来处理错误

### 基础构建

```js
then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
        onFulfilled = value => value;
    }
    if (typeof onRejected != "function") {
        onRejected = value => value;
    }
    if (this.status == Pro.FULFILLED) {
        try {
            onFulfilled(this.value);
        } catch (error) {
            onRejected(error);
        }
    }
    if (this.status == Pro.REJECTED) {
        try {
            onRejected(this.value);
        } catch (error) {
            onRejected(error);
        }
    }
}
```

测试 then 方法的，结果正常输出`张三`

```js
let p = new Pro((resolve, reject) => {
    resolve("张三");
}).then(value => {
    console.log(value);
},reason => {
    console.log(reason);
}
       );
console.log("李四");
```

### 异步任务

代码产生的 Promise 并不是异步的，使用 setTimeout 来将 onFulfilled 与 onRejected 做为异步宏任务执行

```js
then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
        onFulfilled = value => value;
    }
    if (typeof onRejected != "function") {
        onRejected = value => value;
    }
    if (this.status == Pro.FULFILLED) {
        setTimeout(() => {
            try {
                onFulfilled(this.value);
            } catch (error) {
                onRejected(error);
            }
        });
    }
    if (this.status == Pro.REJECTED) {
        setTimeout(() => {
            try {
                onRejected(this.value);
            } catch (error) {
                onRejected(error);
            }
        });
    }
}
```

现在再执行代码，已经有异步效果了，先输出了`李四`

```js
let p = new Pro((resolve, reject) => {
  resolve("张三");
}).then(
  value => {
    console.log(value);
  },
  reason => {
    console.log(reason);
  }
);
console.log("李四");
```

### PENDING 状态

目前 then 方法无法处理 promise 为 pending 时的状态

```js
let p = new Pro((resolve, reject) => {
    setTimeout(() => {
        resolve("张三");
    });
})
```

1. 在构造函数中添加 callbacks 来保存 pending 状态时处理函数，当状态改变时循环调用

   ```js
   constructor(executor) {
       ...
       this.callbacks = [];
       ...
   }
   ```

2. 将 then 方法的回调函数添加到 callbacks 数组中，用于异步执行

   ```js
   then(onFulfilled, onRejected) {
       if (typeof onFulfilled != "function") {
           onFulfilled = value => value;
       }
       if (typeof onRejected != "function") {
           onRejected = value => value;
       }
       if (this.status == Pro.PENDING) {
           this.callbacks.push({
               onFulfilled: value => {
                   try {
                       onFulfilled(value);
                   } catch (error) {
                       onRejected(error);
                   }
               },
               onRejected: value => {
                   try {
                       onRejected(value);
                   } catch (error) {
                       onRejected(error);
                   }
               }
           });
       }
   
   }
   ```

3. resovle 与 reject 中添加处理 callback 方法的代码

   ```js
   resolve(value) {
       if (this.status == Pro.PENDING) {
           this.status = Pro.FULFILLED;
           this.value = value;
           this.callbacks.map(callback => {
               callback.onFulfilled(value);
           });
       }
   }
   reject(value) {
       if (this.status == Pro.PENDING) {
           this.status = Pro.REJECTED;
           this.value = value;
           this.callbacks.map(callback => {
               callback.onRejected(value);
           });
       }
   }
   ```

   ### PENDING 异步

执行以下代码发现并不是异步操作，应该先输出 `张三` 然后是`李四

```js
let p = new Pro((resolve, reject) => {
    setTimeout(() => {
        resolve("李四");
        console.log("张三");
    });
}).then(
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);
```

只需要将 resolve 与 reject 执行通过 setTimeout 定义为异步任务

```js
resolve(value) {
    if (this.status == Pro.PENDING) {
        this.status = Pro.FULFILLED;
        this.value = value;
        setTimeout(() => {
            this.callbacks.map(callback => {
                callback.onFulfilled(value);
            });
        });
    }
}
reject(value) {
    if (this.status == Pro.PENDING) {
        this.status = Pro.REJECTED;
        this.value = value;
        setTimeout(() => {
            this.callbacks.map(callback => {
                callback.onRejected(value);
            });
        });
    }
}
```

## 链式操作

Promise 中的 then 是链式调用执行的，所以 then 也要返回 Promise 才能实现

1. then 的 onReject 函数是对前面 Promise 的 rejected 的处理
2. 但该 Promise 返回状态要为 fulfilled，所以在调用 onRejected 后改变当前 promise 为 fulfilled 状态

```js
then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
        onFulfilled = value => value;
    }
    if (typeof onRejected != "function") {
        onRejected = value => value;
    }
    return new Pro((resolve, reject) => {
        if (this.status == Pro.PENDING) {
            this.callbacks.push({
                onFulfilled: value => {
                    try {
                        let result = onFulfilled(value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: value => {
                    try {
                        let result = onRejected(value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                }
            });
        }
        if (this.status == Pro.FULFILLED) {
            setTimeout(() => {
                try {
                    let result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }
        if (this.status == Pro.REJECTED) {
            setTimeout(() => {
                try {
                    let result = onRejected(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }
    });
}
```

链式操作已经有效了

```js
let p = new Pro((resolve, reject) => {
  resolve("张三");
  console.log("李四");
}).then(
  value => {
    console.log(value);
    return "王五";
  },
  reason => {
    console.log(reason);
  }
).then(
  value => {
    console.log(value);
  },
  reason => {
    console.log(reason);
  }
);
console.log("promise");
```

## 返回类型

如果 then 返回的是 Promise 呢？所以我们需要判断分别处理返回值为 Promise 与普通值的情况

###  基本实现

```js
then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
        onFulfilled = value => value;
    }
    if (typeof onRejected != "function") {
        onRejected = value => value;
    }
    return new Pro((resolve, reject) => {
        if (this.status == Pro.PENDING) {
            this.callbacks.push({
                onFulfilled: value => {
                    try {
                        let result = onFulfilled(value);
                        if (result instanceof Pro) {
                            result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: value => {
                    try {
                        let result = onRejected(value);
                        if (result instanceof Pro) {
                            result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            });
        }
        if (this.status == Pro.FULFILLED) {
            setTimeout(() => {
                try {
                    let result = onFulfilled(this.value);
                    if (result instanceof Pro) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            });
        }
        if (this.status == Pro.REJECTED) {
            setTimeout(() => {
                try {
                    let result = onRejected(this.value);
                    if (result instanceof Pro) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            });
        }
    });
}
```

### 代码复用

现在发现 pendding、fulfilled、rejected 状态的代码非常相似，所以可以提取出方法 Parse 来复用

```js
then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
        onFulfilled = value => value;
    }
    if (typeof onRejected != "function") {
        onRejected = value => value;
    }
    return new Pro((resolve, reject) => {
        if (this.status == Pro.PENDING) {
            this.callbacks.push({
                onFulfilled: value => {
                    this.parse(onFulfilled(this.value), resolve, reject);
                },
                onRejected: value => {
                    this.parse(onRejected(this.value), resolve, reject);
                }
            });
        }
        if (this.status == Pro.FULFILLED) {
            setTimeout(() => {
                this.parse(onFulfilled(this.value), resolve, reject);
            });
        }
        if (this.status == Pro.REJECTED) {
            setTimeout(() => {
                this.parse(onRejected(this.value), resolve, reject);
            });
        }
    });
}
parse(result, resolve, reject) {
    try {
        if (result instanceof Pro) {
            result.then(resolve, reject);
        } else {
            resolve(result);
        }
    } catch (error) {
        reject(error);
    }
}
```

### 返回约束

then 的返回的 promise 不能是 then 相同的 Promise，下面是原生 Promise 的示例将产生错误

```js
let promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("张三");
    });
});
let p = promise.then(value => {
    return p;
});
```

解决上面的问题来完善代码，添加当前 promise 做为 parse 的第一个参数与函数结果比对

```js
then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
        onFulfilled = value => value;
    }
    if (typeof onRejected != "function") {
        onRejected = value => value;
    }
    let promise = new Pro((resolve, reject) => {
        if (this.status == Pro.PENDING) {
            this.callbacks.push({
                onFulfilled: value => {
                    this.parse(promise, onFulfilled(this.value), resolve, reject);
                },
                onRejected: value => {
                    this.parse(promise, onRejected(this.value), resolve, reject);
                }
            });
        }
        if (this.status == Pro.FULFILLED) {
            setTimeout(() => {
                this.parse(promise, onFulfilled(this.value), resolve, reject);
            });
        }
        if (this.status == Pro.REJECTED) {
            setTimeout(() => {
                this.parse(promise, onRejected(this.value), resolve, reject);
            });
        }
    });
    return promise;
}
parse(promise, result, resolve, reject) {
    if (promise == result) {
        throw new TypeError("Chaining cycle detected for promise");
    }
    try {
        if (result instanceof Pro) {
            result.then(resolve, reject);
        } else {
            resolve(result);
        }
    } catch (error) {
        reject(error);
    }
}
```

现在进行测试也可以得到原生一样效果了

```js
let p = new Pro((resolve, reject) => {
    resolve("张三");
});
p = p.then(value => {
    return p;
});
```

## RESOLVE

实现 Promise 的 resolve 方法

```js
static resolve(value) {
    return new HD((resolve, reject) => {
        if (value instanceof HD) {
            value.then(resolve, reject);
        } else {
            resolve(value);
        }
    });
}
```

## REJEDCT

```js
static reject(reason) {
    return new HD((_, reject) => {
        reject(reason);
    });
}
```

##  ALL

```js
static all(promises) {
    let resolves = [];
    return new HD((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then(
                value => {
                    resolves.push(value);
                    if (resolves.length == promises.length) {
                        resolve(resolves);
                    }
                },
                reason => {
                    reject(reason);
                }
            );
        });
    });
}
```

## RACE

```js
static race(promises) {
    return new HD((resolve, reject) => {
        promises.map(promise => {
            promise.then(value => {
                resolve(value);
            });
        });
    });
}
```

**完整代码**

```js
class Pro {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";
    constructor(executor) {
        this.status = Pro.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }
    resolve(value) {
        if (this.status == Pro.PENDING) {
            this.status = Pro.FULFILLED;
            this.value = value;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onFulfilled(value);
                });
            });
        }
    }
    reject(reason) {
        if (this.status == Pro.PENDING) {
            this.status = Pro.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onRejected(reason);
                });
            });
        }
    }
    then(onFulfilled, onRejected) {
        if (typeof onFulfilled != "function") {
            onFulfilled = () => this.value;
        }
        if (typeof onRejected != "function") {
            onRejected = () => this.value;
        }
        let promise = new Pro((resolve, reject) => {
            if (this.status == Pro.PENDING) {
                this.callbacks.push({
                    onFulfilled: value => {
                        this.parse(promise, onFulfilled(value), resolve, reject);
                    },
                    onRejected: value => {
                        this.parse(promise, onRejected(value), resolve, reject);
                    }
                });
            }
            if (this.status == Pro.FULFILLED) {
                setTimeout(() => {
                    this.parse(promise, onFulfilled(this.value), resolve, reject);
                });
            }
            if (this.status == Pro.REJECTED) {
                setTimeout(() => {
                    this.parse(promise, onRejected(this.value), resolve, reject);
                });
            }
        });
        return promise;
    }
    parse(promise, result, resolve, reject) {
        if (promise == result) {
            throw new TypeError("Chaining cycle detected");
        }
        try {
            if (result instanceof Pro) {
                result.then(resolve, reject);
            } else {
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    }
    static resolve(value) {
        return new Pro((resolve, reject) => {
            if (value instanceof Pro) {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        });
    }
    static reject(value) {
        return new Pro((resolve, reject) => {
            reject(value);
        });
    }
    static all(promises) {
        const values = [];
        return new Pro((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(
                    value => {
                        values.push(value);
                        if (values.length == promises.length) {
                            resolve(values);
                        }
                    },
                    reason => {
                        reject(reason);
                    }
                );
            });
        });
    }
    static race(promises) {
        return new Pro((resolve, reject) => {
            promises.map(promise => {
                promise.then(
                    value => {
                        resolve(value);
                    },
                    reason => {
                        reject(reason);
                    }
                );
            });
        });
    }
}
```