# Official Solution

**Link:** [https://leetcode.com/problems/allow-one-function-call/solution/](https://leetcode.com/problems/allow-one-function-call/solution/)

---

[TOC]

## Solution
---

### Overview

This question asks you to write a function that modifies a function such that it can only be called once. This is an example of a ***higher-order function***.

#### Example Use-cases of Functions That Modify Functions

Functions that modify or extends the behavior of functions are extremely common in JavaScript and are a key concept in [functional programming](https://en.wikipedia.org/wiki/Functional_programming). It is critical to fully understand them to be an effective developer.

They are very useful for writing elegant, reusable code, and have a variety of use-cases, a few of which will be discussed.

##### Throttle

Imagine you were implementing a search field. Querying the database for results every single time a character is typed could put unnecessary load on the database and the user interface. To prevent this, you could employ a technique known as [throttling](https://lodash.com/docs/4.17.15#throttle). By throttling the function responsible for sending requests to the database, we ensure that only a limited number of requests are sent per second, thereby optimizing system performance.

##### Memoize

A common optimization is to never call a [pure function](https://en.wikipedia.org/wiki/Pure_function) with the same inputs twice. Instead you can avoid the computation by just returning the previously cached result. This is also an important concept in dynamic programming. Benefitting from this optimization could be as simple calling `memoize()` on the function. [memoizee](https://www.npmjs.com/package/memoizee) is popular package for this.

##### Time Limit

Suppose you have a long running process that repeats itself (like syncing data from a database to an in-memory cache). If for some reason, an asynchronous function never returns a value (or takes a very long time), that process will become frozen. To guarantee that never happens, you could wrap the asynchronous functions used with time limits.

---

#### Use-cases for Only Allowing One Function Call

The simple answer is it useful for initialization logic. You may have a function that initializes a cache (for example, load a file into memory) and you want to guarantee it only loads once.

You might be wondering, why not just simply avoid calling the function more than once, it's your code after all? Well for one, it's still nice to have that guarantee. But there are also cases where you may want perform the initialization logic ***lazily***.

```js
let json;
function loadJsonFromFile() {
  // logic to load file
  json = loadFile();
}

const loadFileOnce = once(loadJsonFromFile);

function getValue(key) {
  loadFileOnce();
  return json[key];
}
```

In this example, you may only want to do the expensive operation of loading the file AFTER `getValue` is called. For example, `getValue` might be part of a library and may never be called.

Another example of a common use-case is showing a welcome message or introduction when a user first clicks a button.

```js
const button = document.querySelector('#start-button');
button.addEventListener('click', once(function() {
  displayWelcomeMessage();
}));
```

The popular library ***lodash*** includes an implementation of [once](https://lodash.com/docs/4.17.15#once).

---

#### Syntax Required for Transforming Functions

##### Rest Syntax

In JavaScript, you can access all passed arguments as an array using ***rest*** syntax. You can then ***spread*** the array of arguments and pass them back into a function.

```js
function sum(...nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}
sum(1, 2, 3); // 6
```
In the above example, the variable `nums` is `[1, 2, 3]`.

But more importantly, you can use this syntax to transform arbitrary functions.

```js
function withLogging(fn) {
  return function(...args) {
    console.log('Arguments', args);
    const result = fn(...args);
    console.log('Result', result);
    return result;
  }
}
const add = withLogging((a, b) => a + b);
add(1, 2); // Logs: Arguments [1, 2] Result 3
```
In this example, all the arguments, no matter what they are or how many, will be passed to `fn`.

##### Argument Syntax

If you use `function` syntax (not arrow function), you have access to the `arguments` variable.

```js
function sum() {
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  return sum
}
sum(1, 2, 3); // 6
```

`arguments` is a special ***iterable*** value bound to the function. It's good to understand for reading older codebases, however is has been largely replaced with rest syntax. One reason for this is that it can lead to confusion when you don't document the input values upfront. This is especially problematic if you want to annotate your functions with TypeScript.

### Approach 1: Rest Syntax

We can declare a boolean which tracks whether the function has been called or not. Then we can use rest and spread syntax to pass the arguments if it has not been called yet.

<iframe src="https://leetcode.com/playground/MjzcUjK6/shared" frameBorder="0" width="100%" height="259" name="MjzcUjK6"></iframe>

---

### Approach 2: Implicitly Return Undefined

If you don't return any value from a function, it will implicitly return `undefined`. We can use this fact to shorten the code slightly.

<iframe src="https://leetcode.com/playground/KbKLqw4n/shared" frameBorder="0" width="100%" height="225" name="KbKLqw4n"></iframe>

---

### Approach 3: Bind Function to a Context

JavaScript functions are sometimes bound to a `this` context. The most technically correct way to implement a higher-order function is to ensure the provided function is bound to the same context as the returned function.

The following code showcases how functions can behave differently depending on which `this` context they are bound to.

```js
const context = { Name: 'Alice' };

function getName() {
  return this.Name;
}
const boundGetName = getName.bind(context);

getName(); // undefined
getName.apply(context, []); // "Alice"
```

In the above example `getName` is NOT bound to `context` so it returns `undefined`. However you can use the `Function.apply` method to call `getName()` AND set `this` to be `context`. You can read more about `Function.apply` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply).

Now suppose you wanted to apply `once` to a method on a prototype.

```js
const Person = function(name) {
  this.name = name;
}

Person.prototype.getName = once(function() {
  return this.name;
});

const alice = new Person('Alice');
alice.getName(); // Expected Output: "Alice"
```
In order to get this behavior, you need to use the `Function.apply` method to ensure `getName` is provided with the appropriate context (the `alice` object in this case). Without this, `getName` will always return `undefined`.

Note that this functionality is fairly niche, and isn't required in the problem. But it may be expected in a professional implementation.

<iframe src="https://leetcode.com/playground/gG6hdngd/shared" frameBorder="0" width="100%" height="225" name="gG6hdngd"></iframe>

---