# Official Solution

**Link:** [https://leetcode.com/problems/promise-pool/solution/](https://leetcode.com/problems/promise-pool/solution/)

---

[TOC]

## Solution
---

### Overview

This question asks you to write a function that manages a pool of promises such that the amount of code running in parallel at a given time is below some threshold.

It is recommended you first read the [Sleep Editorial](https://leetcode.com/problems/sleep/editorial/) as it covers topics on asynchronous programming not discussed here.

#### Use-case for Promise Pool

Imagine you have a long list of files you have to download, and you can only download them one at a time. If you requested all of them at once in parallel (using `Promise.all`), several bad things could happen:

1. The environment may cancel requests because it detects that there are too many to handle.
2. The database may become unresponsive under the heavy load.
3. Too much network traffic could cause higher priority requests to get delayed.
4. The app could become unresponsive trying to process all the data at once.

An alternative approach could be to process one file at a time:

```js
for (const filename of files) {
  await download(filename);
}
```

However, this is slow and doesn't take advantage of parallelization.

The optimal approach is to decide on a reasonable limit on the number of concurrent requests and use a ***promise pool***. Using the implementation asked for in this problem, it would look like this:

```js
const files = ["data.json", "data2.json", "data3.json"];

// weird double arrow function because we want to create functions
// but we don't want to execute them until later
const functions = files.map(filename => () => download(filename));

const POOL_LIMIT = 2;
await promisePool(functions, POOL_LIMIT);
```

You can look at popular JavaScript packages that implement promise pools [here](https://www.npmjs.com/package/@supercharge/promise-pool) and [here](https://www.npmjs.com/package/es6-promise-pool).

### Approach 1: Recursive Helper Function

We can keep track of current index in the functions array (`functionIndex`) and the current number of promises being executed (`inProgressCount`). We define a recursive function `helper` which will allow us to execute code asynchronously. All this code is wrapped in the returned promise's callback.

1. Every time we execute a new function, we increment `functionIndex` and we increment `inProgressCount`.
2. Every time a promise resolves, we decrement `inProgressCount`, and repeat step 1 while `inProgressCount < n` and there are still functions left to execute
3. If at any point, `functionIndex == functions.length` and `inProgressCount == 0`, we are done and should resolve the returned promise.

<iframe src="https://leetcode.com/playground/g4rcwCPw/shared" frameBorder="0" width="100%" height="480" name="g4rcwCPw"></iframe>

---

### Approach 2: Async/Await + Promise.all() + Array.shift()

We can use async/await syntax to greatly simplify the code from approach 1.

We can define a recursive function `evaluateNext` that:

1. Immediately returns if there are no functions to execute (the base case).
2. Removes the first function from the list of functions (using `Array.shift`).
3. Executes that same first function and waits for its completion.
4. Recursively calls itself and waits for its own completion. That way as soon as any function finishes, the next function in the queue is processed.

If we just call this code once, it wouldn't work (unless `n = 1`) because it will execute each function one-at-a-time in series. We need to initially execute `evaluateNext` `n` times in parallel to achieve the desired promise pool size. We could do this with a `for` loop, but that would make it hard to know when all `n` promises have resolved. Instead we use `await Promise.all` to execute `n` promises in parallel and wait for their completion.

On a side note, You may wonder why we can't simply write `Array(n).map(evaluateNext)` when initially creating the promises. This is because `Array(n)` creates an array of `empty` values which can't be mapped over. `.fill()` adds "real" values of `undefined` which can be mapped over.

On another side note, it's generally not good practice to mutate arguments within a function as the user of the function may not expect that. In a real implementation, it may be wise to clone the array initially with `functions = [...functions];`.

<iframe src="https://leetcode.com/playground/avqZ2jVn/shared" frameBorder="0" width="100%" height="259" name="avqZ2jVn"></iframe>

---
### Approach 3: 2-Liner

We can modify the general idea from Approach 2 and make it very short with some syntax trickery.

- Instead of removing the first element of the array via `Array.shift`, we can instead use the variable `n` as the current index.
- Instead of checking if there are functions left to execute with an `if` statement, we can use ***optional chaining*** on the function call (`functions[n++]?.()`). This syntax immediately returns undefined if `functions[n++]` is `null` or `undefined`. Without this syntax, an error would be thrown.
- Instead of using `await` on a different line, we can use promise chaining (`.then(evaluateNext)`). 
- When initially executing the first `n` promises in parallel, we need to write `functions.slice(0, n).map(f => f().then(evaluateNext))` instead of simply `functions.slice(0, n).map(evaluateNext)`. That way the first `n` promises are executed immediately outside of the helper function so we can correctly use `n` as the index variable.

<iframe src="https://leetcode.com/playground/kzxoTWyk/shared" frameBorder="0" width="100%" height="157" name="kzxoTWyk"></iframe>


---