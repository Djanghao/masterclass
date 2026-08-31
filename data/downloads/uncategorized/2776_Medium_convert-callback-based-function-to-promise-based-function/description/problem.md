# [2776. Convert Callback Based Function to Promise Based Function](https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 19 | 12 |




## Description

Write a function that accepts another function `fn` and converts the callback-based function into a promise-based function. 

The function `fn` takes a callback as its first argument, along with any additional arguments `args` passed as separate inputs.

The `promisify` function returns a new function that should return a promise. The promise should resolve with the argument passed as the first parameter of the callback when the callback is invoked without error, and reject with the error when the callback is called with an error as the second argument.

The following is an example of a function that could be passed into `promisify`.

```

function sum(callback, a, b) {
  if (a &lt; 0 || b &lt; 0) {
&nbsp;   const err = Error(&#39;a and b must be positive&#39;);
    callback(undefined, err);
&nbsp; } else {
    callback(a + b);
&nbsp; }
}

```

This is the equivalent code based on promises:

```

async function sum(a, b) {
  if (a &lt; 0 || b &lt; 0) {
    throw Error(&#39;a and b must be positive&#39;);
&nbsp; } else {
    return a + b;
&nbsp; }
}

```

 

**Example 1:**

```

Input: 
fn = (callback, a, b, c) =&gt; {
    callback(a * b * c);
}
args = [1, 2, 3]
Output: {&quot;resolved&quot;: 6}
Explanation: 
const asyncFunc = promisify(fn);
asyncFunc(1, 2, 3).then(console.log); // 6

fn is called with a callback as the first argument and args as the rest. The promise based version of fn resolves a value of 6 when called with (1, 2, 3).

```

**Example 2:**

```

Input: 
fn = (callback, a, b, c) =&gt; {
    callback(a * b * c, &quot;Promise Rejected&quot;);
}
args = [4, 5, 6]
Output: {&quot;rejected&quot;: &quot;Promise Rejected&quot;}
Explanation: 
const asyncFunc = promisify(fn);
asyncFunc(4, 5, 6).catch(console.log); // &quot;Promise Rejected&quot;

fn is called with a callback as the first argument and args as the rest. As the second argument, the callback accepts an error message, so when fn is called, the promise is rejected with a error message provided in the callback. Note that it did not matter what was passed as the first argument into the callback.

```

 

**Constraints:**

	- `1 <= args.length <= 100`

	- `0 <= args[i] <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/) | [Solutions](https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/)
