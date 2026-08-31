# 🤓O(1) SC, O(1) TC | 4 Diff Method | Solution in JS and TypeScript | Day-8 ✅🏃

**Author:** vermaamanmr
**Votes:** 256
**Link:** [https://leetcode.com/problems/allow-one-function-call/solutions/3514065/](https://leetcode.com/problems/allow-one-function-call/solutions/3514065/)

---

# Intuition
The problem is asking us to return a `new function` that behaves differently depending on whether it has been called before. If it has not been called before, it should call the original function and return its result. If it has been called before, it should return `undefined` without calling the original function again.

# Approach
To solve this problem, we can return a `new function `that keeps track of whether it has been called before. We can do this by using a `closure `to store a `boolean flag` that is initially set to false. The first time the new function is called, we call the original function and set the flag to `true`. We also store the result of the original function. Subsequent calls to the new function simply return `undefined `without calling the original function again.

# Complexity
- Time complexity:
O(1) for both the first and subsequent calls to the returned function. This is because checking the hasBeenCalled flag and returning either the result or undefined are constant-time operations.

- Space complexity:
O(1) as well. This is because we only use a constant amount of extra space to store the hasBeenCalled flag and the result of the original function. 

# Learning 
The key idea behind this problem is to use a closure to store the state of the returned function. By doing this, we can keep track of whether the function has been called before and behave accordingly.

# Code In JS
```
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {

  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  }

};

let fn = (a,b,c) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // undefined
```

# Code In TypeScript
```
type Func<T, U> = (...args: T[]) => U;

function once<T, U>(fn: Func<T, U>): Func<T, U | undefined> {
  let hasBeenCalled = false;
  let result: U;

  return function (...args: T[]): U | undefined {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  }
}

// Example usage:
let fn = (a: number, b: number, c: number) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined

```

# Using a closure and an arrow function

In this approach, we use an `arrow function` to create the returned function. We store the` hasBeenCalled flag` and result in a closure, and use an if statement to check whether the function has already been called.

```
function once(fn) {
  let hasBeenCalled = false;
  let result;

  return (...args) => {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
}

```

# Using a class

In this approach, we define a `Once class` that has a call method that behaves like the returned function in the previous approaches. We use a class property to store the hasBeenCalled flag and result.

```
class Once {
  hasBeenCalled = false;
  result;

  call(fn, ...args) {
    if (!this.hasBeenCalled) {
      this.result = fn(...args);
      this.hasBeenCalled = true;
      return this.result;
    } else {
      return undefined;
    }
  }
}

function once(fn) {
  const instance = new Once();
  return instance.call.bind(instance, fn);
}

```
# Using a traditional function and an object

we use a` traditional function` to create the returned function. Instead of using a `closure`, we store the `hasBeenCalled flag` and result in an object that is passed as an argument to the returned function.

```
function once(fn) {
  return function(...args) {
    const state = {
      hasBeenCalled: false,
      result: undefined
    };

    if (!state.hasBeenCalled) {
      state.result = fn(...args);
      state.hasBeenCalled = true;
      return state.result;
    } else {
      return undefined;
    }
  };
}

```
![upvote-2.png](./images/0.png)

