# Official Solution

**Link:** [https://leetcode.com/problems/interval-cancellation/solution/](https://leetcode.com/problems/interval-cancellation/solution/)

---

[TOC]

## Overview:
You are given a function `fn`, an array of arguments `args`, and an interval time `t`. You need to implement a function `cancelFn` that calls `fn` immediately with `args` and then schedules subsequent calls to `fn` every `t` milliseconds until `cancelFn` is called.

---

## Use Cases:

* **Auto-Saving in Editing Applications:** When working with text editors, document processors, or other content creation tools, it's common to have an auto-save feature that periodically saves changes. You can use interval cancellation to schedule auto-saving at regular intervals. If the user explicitly saves the document or exits the application, you can cancel the interval to prevent unnecessary saving operations.

* **Animation and Slideshow Timings:** During development, you may want to create animations or slideshows that automatically transition between different states or images. Interval cancellation can be used to control the timing of these transitions. If the user interacts with the animation or slideshow, you can cancel the interval to pause or stop the automatic progression.

> Note:  For more complex or performance-critical animations, it's recommended to use the `requestAnimationFrame` method instead of `setInterval`, as it provides better performance and efficiency.

* **Time-based Reminders:** Consider a task management application where users can set reminders for specific tasks. Interval cancellation can be used to trigger reminders at specified intervals. Once the user acknowledges the reminder or the task is completed, you can cancel the interval to stop further reminders.

---

Before going any further, we need to learn two concepts: `setInterval` and `clearInterval`.

1. **`setInterval`:** 
The `setInterval` function is used to repeatedly execute a function or a code snippet with a fixed time delay between each call. It takes two arguments: the function or code snippet to be executed and the time delay specified in milliseconds.
```js
setInterval(function, delay);
```
* The `function` parameter represents the function or code snippet that will be executed at each interval.
* The `delay` parameter specifies the time delay in milliseconds between each execution of the function.

When `setInterval` is called, it schedules the first execution of the specified function after the initial delay. Subsequent executions will occur repeatedly based on the specified delay.
`setInterval` returns an interval ID, which is a unique numeric value. This ID can be used later to identify and control the interval schedule. Also, note that `setInterval` is not totally precise.

To gain a deeper understanding, you can review the explanation provided in the [Sleep editorial](https://leetcode.com/problems/sleep/editorial/).

2. **`clearInterval`:**
The `clearInterval` function is used to cancel a timed, repeating action that was previously established by a call to `setInterval`. It takes the interval ID returned by `setInterval` as an argument.

```js
clearInterval(intervalID);
```

* The `intervalID` parameter represents the unique ID returned by the `setInterval` function when the interval was created.
By calling `clearInterval` with the appropriate interval ID, you can effectively stop the subsequent executions of the function specified in `setInterval`. It cancels the scheduled interval and prevents any further calls to the specified function.

---

## Approach 1: Using `setInterval` & `clearInterval` 

To set an interval timer, we use the `setInterval` function. In the code snippet below, `setInterval` will repeatedly call `() => fn(...args)` every `t` milliseconds. It's important to note that `setInterval` does not immediately call the function before `t` milliseconds, which is why we manually call `fn(...args)` once before setting the interval.

Next, we define a function called `cancelFn` that clears the interval when it's called. We return `cancelFn` from the main function. It's worth mentioning that `cancelFn` is not called when our `cancellable` function is initially defined. However, whenever the `cancellable` function is called, it returns `cancelFn`. The `cancelFn` can then be called at a later time to clear the interval.

### Implementation:

<iframe src="https://leetcode.com/playground/7ik8UJHh/shared" frameBorder="0" width="100%" height="276" name="7ik8UJHh"></iframe>


### Complexity Analysis:

* **Time complexity:** $O(1)$

* **Space complexity:** $O(1)$

---

## Approach 2: Using Recursion

### Intuition:
We can set up a timed interval where the function is repeatedly executed. This will provide a way to cancel the interval execution when desired. In simpler words, each function will keep calling itself (after `t` ms, via a `timeout`), as long as the boolean flag is not flipped.

### Algorithm:
When we call the `cancellable` function, it first executes the provided function `(fn)` with the given arguments `(args)` i.e `(fn(...args))`. This ensures that the function is called at least once before we start the interval.

Next, we define an internal function called `startInterval`. This function will be held for setting up the interval by using `setTimeout`. It waits for the specified `t` and then executes the function `(fn)` again. It repeats this process until we decide to cancel the interval which will be decided by the boolean `isCancelled` that we declared at the start of the code.

To create this repeated execution, `startInterval` uses a clever trick. It calls itself recursively within the `setTimeout` callback function. This means that after each execution of the function, it schedules the next execution by calling `startInterval` again. This creates a loop-like behavior where the function is executed, and then `startInterval` is called again to schedule the next execution.

### Implementation 1:

<iframe src="https://leetcode.com/playground/S4FwosS2/shared" frameBorder="0" width="100%" height="446" name="S4FwosS2"></iframe>


### Implementation 2:

Implementation 1 is good, but it's more efficient to use `clearTimeout` to clear those recursive timeouts. This approach ensures that the callback isn't called unnecessarily:

<iframe src="https://leetcode.com/playground/WTBApZjr/shared" frameBorder="0" width="100%" height="497" name="WTBApZjr"></iframe>


### Complexity Analysis:

In the given implementations, the execution involves setting a `setTimeout` function with a delay of `t` milliseconds. However, it's important to note that the scheduling of the function call does not introduce recursion or affect the complexity in terms of the JavaScript engine's memory usage.

Let's dig a little deeper:

* The JavaScript engine initializes and creates the context for the `cancellable` function.
* The statements of the `cancellable` function, including the `setTimeout` call, are executed.
* The `setTimeout` function instructs the JavaScript engine to schedule a function call after a delay of `t` milliseconds.
* The context of the `cancellable` function is destroyed, and the JavaScript engine continues with other operations.
* At this point, in terms of memory usage, the JavaScript engine returns to its initial state without any additional memory allocation or recursion. The only remaining information is a reference to the function and the scheduled time for the future call.
* After the specified delay, the JavaScript engine executes the scheduled function without any impact on memory usage or recursion.
* Once the function execution is completed, any remaining references or data related to the scheduled call are cleared.

Considering this sequence of events, we can conclude that the complexity of this code is constant `O(1)`. The memory utilization does not grow with the duration of the delay, and there is no recursion or memory buildup as the JavaScript engine handles the scheduling and execution of the function independently.

* **Time complexity:** $O(1)$

* **Space complexity:** $O(1)$

---

## Interview Tips:

<details><summary><b>Can the interval time be dynamically changed after it has been set?</b></summary>
<ul>
    <li>Yes, the interval time can be dynamically changed by canceling the existing interval using <code>clearInterval</code> and then setting a new interval using <code>setInterval</code> with the updated time. This allows you to adjust the timing dynamically based on changing requirements or user interactions.</li>
    <blockquote>
        <p><i>Note: While it's true that you can create the illusion of a dynamic interval by clearing and resetting it, it's important to note that this doesn't truly change the original interval time dynamically. It rather cancels the previous interval and starts a new one.</i></p>
    </blockquote>
</ul>
</details>
<details><summary><b>Are there any limitations or performance considerations to keep in mind when using interval cancellation?</b></summary>
<ul>
    <li>When working with interval cancellation, it's important to consider the interval time and the potential impact on performance. Frequent and short intervals can consume significant CPU resources. Additionally, if the execution time of the <code>fn</code> function is longer than the interval time, the subsequent calls may overlap, leading to unexpected behavior. It's crucial to ensure the interval time and the execution time of <code>fn</code> are appropriately balanced. That's why in some situations it is highly recommended to use something else like <code>requestAnimationFrame</code>.</li>
    <li>The <code>requestAnimationFrame</code> accepts a single parameter, a function to execute. When the browser is ready to repaint the screen, the function you specify to <code>requestAnimationFrame</code> will be called. When this function runs, it depends on the CPU power of the computer executing the code, the refresh rate of the display the browser is on, and a few other criteria to guarantee the animation is as smooth as possible while taking as little resources as feasible.</li>
</ul>
</details>
<details><summary><b>What happens if the interval time `(t)` is set to a negative value or zero?</b></summary>
<ul>
    <li>It is going to execute immediately and continuously and will keep repeating for 0 or negative nums, potentially blocking the main thread and causing the browser to become unresponsive.</li>
</ul>
</details>
<details><summary><b>Is it possible to restart or reschedule the interval after it has been canceled?</b></summary>
<ul>
    <li>While you can't directly restart a canceled interval, you can create a new interval by calling <code>setInterval</code> again with the desired interval time and the function to be executed.</li>
</ul>
</details>

---