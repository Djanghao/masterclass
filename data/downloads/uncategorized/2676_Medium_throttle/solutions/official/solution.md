# Official Solution

**Link:** [https://leetcode.com/problems/throttle/solution/](https://leetcode.com/problems/throttle/solution/)

---

[TOC]

## Solution
---

### Overview

This question asks you to implement the ***throttle*** higher-order function. The one-sentence description of throttle is that it should call the provided callback as frequently as possible but no more frequently than `t` milliseconds. This means that it should call the provided callback with the same arguments as soon as the throttled function is called. Then, 
after `t` milliseconds, we should check if the throttled function was called again. If it was, we should call the provided function with the last known arguments. If it wasn't, we wait until it is called again.

To give a concrete example of throttle in action:

```js
const start = Date.now();
function log(id) {
  console.log(id, Date.now() - start);
}

setTimeout(() => log(1), 10); // logs: 1, 10
setTimeout(() => log(2), 15); // logs: 2, 15
setTimeout(() => log(3), 20); // logs: 3, 20
setTimeout(() => log(4), 60); // logs: 4, 60
setTimeout(() => log(5), 70); // logs: 5, 70
```

As expected, the `log` function is called with the delay specified by `setTimeout`.

However, if we throttle the `log` function:

```js
const start = Date.now();
function log(id) {
  console.log(id, Date.now() - start);
}
const throttledLog = throttle(log, 20);

setTimeout(() => throttledLog(1), 10); // logs: 1, 10
setTimeout(() => throttledLog(2), 15); // cancelled
setTimeout(() => throttledLog(3), 20); // logs: 3, 30
setTimeout(() => throttledLog(4), 60); // logs: 4, 60
setTimeout(() => throttledLog(5), 70); // logs: 5, 80
```

In the above example, `log` is immediately called at `t=10ms` because that was the first time `throttledLog` was called. The call at `t=15ms` is cancelled by the call at `t=20ms`. The call at `t=20ms` is delayed until `t=10+20=30ms`. Similar to the first call, the call at `t=60ms` is immediately evaluated because there were no recent calls before that. And the call at `t=70ms` was also delayed by `10ms`.

It is recommended you also read the [Debounce Editorial](https://leetcode.com/problems/debounce/editorial/). Together, throttle and debounce make a powerful pair and are both used frequently in front-end development.

#### Use-cases for Throttle

Throttle is used when you want to perform an action as soon as possible, but also want to guarantee a limit on how frequently that action could be performed.

A use-case could be as simple as downloading data when a user clicks a button. You don't want there to be any delay when the user first clicks the button (why debounce wouldn't be suitable). But you also don't want to try to download dozens of copies if you user decided to start spam clicking the button. Adding a throttle of a few seconds to the download function elegantly achieve the desired result.

A simple way to think about when to use debounce and when to use throttle:

 - Debounce protects the user from unwanted events that could create lag (like trying to re-render a large grid of search results every time a character is typed). This is achieved by only executing code AFTER the user is done with their interaction.
- Throttle prevents code from being called more frequently than the infrastructure/app can handle (like the user trying to spam click download). This is achieved by guaranteeing a limit on how frequently some code can be called. It generally doesn't hurt to apply throttling to most network requests, provided `t` is reasonably small.

---

### Approach 1: Recursive setTimeout Calls

A good way to think of this problem is that there are two states the code can been in: ***looping*** and ***waiting***. If the code is in the ***waiting*** state, that means there haven't been any recent function calls, and the provided callback should be immediately called as soon as the throttled function is called. Once that happens, the code enters the ***looping*** state. Now the code should keep executing the provided callback every `t` milliseconds with the last known arguments. Once the the throttled function wasn't called for an entire loop, it goes back to the ***waiting*** state.

In the below code, the existence of `timeoutInProgress` represents if the code in the ***looping*** state or not. If the code is in the ***looping*** state, `argsToProcess` is just set to the most recent `args`. If the code is in the ***waiting*** state, `fn` is immediately called and a recursive loop is created. 

Inside this recursive loop, it first check if there were any function calls since the last time the loop was executed. If the answer is there were none, the code goes back to the ***waiting*** state. Otherwise, `fn` is executed with the last known arguments, `argsToProcess` is set to `null`, and `timeoutFunction` is recursively called with a delay.

<iframe src="https://leetcode.com/playground/b8kJVGCD/shared" frameBorder="0" width="100%" height="480" name="b8kJVGCD"></iframe>

---

### Approach 2: setInterval + clearInterval

The logic in Approach 1 lends itself nicely to using `setInterval` instead of `setTimeout`. To achieve the ***looping*** phase, we can essentially replace the recursive calls with a single interval.

The following changes need to be made to use `setInterval`.

- The ***looping*** phase is started with `setInterval` instead of `setTimeout`.
- There is no need for a recursive function call inside the interval. `setInterval` takes care of that.
- It's not enough to revert to the ***waiting*** phase by setting `intervalInProgress` to `null`. We also have to stop the loop by calling `clearInterval(intervalInProgress)`. Otherwise it will go on forever.

<iframe src="https://leetcode.com/playground/JhYox6iN/shared" frameBorder="0" width="100%" height="480" name="JhYox6iN"></iframe>

### Approach 3: Keep Track of Next Time to Call Function

We can keep track of a variable `nextTimeToCallFn` representing the point in time we should call `fn` next.

Every time the throttled function is called, we should create a new timeout such that it is executed at `nextTimeToCallFn`. In order to achieve this result, the formula for the delay passed to `setTimeout` is simply `nextTimeToCallFn - Date.now()`. Notice that if `fn` hadn't been called in a while, the delay becomes negative. In that situation, we should instead immediately call `fn` (delay is 0).

Every time `fn` is called, we should set `nextTimeToCallFn` to be `Date.now() + t`.

Also, before creating a new timeout, we need to clear the existing timeout if it exists. That way, at most one timeout is running at any given time.

<iframe src="https://leetcode.com/playground/Unwj6tvm/shared" frameBorder="0" width="100%" height="293" name="Unwj6tvm"></iframe>

---