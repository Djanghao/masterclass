# Official Solution

**Link:** [https://leetcode.com/problems/promise-time-limit/solution/](https://leetcode.com/problems/promise-time-limit/solution/)

---

[TOC]

## Solution
---

### Overview

This question asks you to enhance an asynchronous function such that the promise it returns will automatically reject if the time limit elapses.

It is recommended you first read the [Sleep Editorial](https://leetcode.com/problems/sleep/editorial/) as it covers topics on asynchronous programming not discussed here. You may also want to read up on the topic of functions that returns functions: [Allow One Function Call Editorial](https://leetcode.com/problems/allow-one-function-call/editorial/) and [Memoize Editorial](https://leetcode.com/problems/memoize/editorial/).

#### Use-cases for Time Limit

##### Long Running Processes

You may have code which repeats over and over again. A common example of this would be loading data into a cache and keeping it in sync with the data source.

```js
async function repeatProcessIndefinitely() {
  while (true) {
    try {
      await someProcess();
    } catch (e) {
      console.error(e);
    }
  }
}
```
If `someProcess` were to ever never fulfill, the loop would get frozen and nothing would happen. Forcing `someProcess` to throw an error would unfreeze the process.

An important consideration is that code in `someProcess` can still continue executing even if the promise was rejected. So you might have multiple blocks of code executing in parallel. A better solution may be fix the underlying issue which caused the freeze or to implement proper cancellation. Consider solving [Design Cancellable Function](https://leetcode.com/problems/design-cancellable-function/) to implement true cancellation.

To force the promise `someProcess()` returns to reject after an hour:

```js
const ONE_HOUR_IN_MS = 3600 * 1000;
const timeLimitedProcess = timeLimit(someProcess, ONE_HOUR_IN_MS);
``` 

##### Notify Users of Failure

Imagine a user requested to download a file which you expect should take less than 10 seconds to download. If the download is taking too long, rather than let the user wait, it may be better to just give up and show the user an error message.

Similar to the first use-case, this really should only be done as a last resort. It's likely better to implement a loading indicator and/or fix the underlying issue causing the slowness.

### Approach 1: Call Function Inside New Promise

We can create a new Promise that resolves as soon as the passed function resolves or rejects. This essentially emulates the passed function without effecting it at all. To satisfy the requirement, all we have to do is add a `setTimeout` which can force the promise to reject prematurely.

<iframe src="https://leetcode.com/playground/hyovYVnQ/shared" frameBorder="0" width="100%" height="259" name="hyovYVnQ"></iframe>

---

### Approach 2: Handle Clearing Timeout

In the above example, if the function's promise fulfills ***before*** the time limit elapses, the reject logic will still be triggered unnecessarily at some point in the future. This has no effect on the external behavior of the function because a promise can only resolve or reject once. Rejecting a resolved promise does nothing.

However, imagine if the time limit was set for a very long time. These blocks of code will have to be stored in memory for a long time until they are eventually executed by the JavaScript event loop. This could be considered a memory leak and a professional implementation should avoid this. However it isn't a requirement for this problem.

To achieve this, we can use the fact that `setTimeout` returns an integer id which is effectively a reference to the block of code to be executed. You can then use the built-in `clearTimeout(id)` to abort the execution of that code.

We can also take advantage of the `Promise.finally` method. The callback passed to it will be executed when the promise resolves ***or*** rejects.

<iframe src="https://leetcode.com/playground/LyvfVVKY/shared" frameBorder="0" width="100%" height="310" name="LyvfVVKY"></iframe>

---

### Approach 3: Promise Race

We can simplify the code by using the `Promise.race` function. It accepts an array of promises and returns a new promise. The returned promise resolves or rejects with the first value one of the promises resolves or rejects with.

<iframe src="https://leetcode.com/playground/d7Reuc7n/shared" frameBorder="0" width="100%" height="242" name="d7Reuc7n"></iframe>

### Approach 4: Async/Await + Clearing Timeout

We can modify approach 2 to use async/await syntax. You can only use the `await` keyword inside an `async` function, so we must add the `async` keyword to the callback passed to `new Promise`. Now the callback returns a promise, instead of `undefined`. Note that this acceptable because the `Promise` constructor doesn't look at what is returned by the callback. However, a common mistake is inappropriately making code async.

```js
const filteredList = [1, 2, 3].filter(async n => n > 2);
console.log(filteredList); // [1, 2, 3]
```

You may expect the above code to evaluate the async function and return `[3]`. However, all async functions return promises and all promises are truthy, therefore nothing is filtered from the list.

In the following code, we refactor the `.then().catch().finally()` from approach 2 into a `try catch` block.

<iframe src="https://leetcode.com/playground/NfxEGURe/shared" frameBorder="0" width="100%" height="378" name="NfxEGURe"></iframe>

---