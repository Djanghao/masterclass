# [2795. Parallel Execution of Promises for Individual Results Retrieval](https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 15 | 5 |




## Description

Given an array `functions`, return a promise `promise`. `functions` is an array of functions that return promises `fnPromise.` Each `fnPromise` can be resolved or rejected.  

If `fnPromise` is resolved:

    `obj = { status: "fulfilled", value: resolved value}`

If `fnPromise` is rejected:

    `obj = { status: "rejected", reason: reason of rejection (catched error message)}`

The `promise` should resolve with an array of these objects `obj`. Each `obj` in the array should correspond to the promises in the original array function, **maintaining the same order**.

Try to implement it without using the built-in method `Promise.allSettled()`.

 

**Example 1:**

```

Input: functions = [
    () =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(15), 100))
]
Output: {&quot;t&quot;:100,&quot;values&quot;:[{&quot;status&quot;:&quot;fulfilled&quot;,&quot;value&quot;:15}]}
Explanation: 
const time = performance.now()
const promise = promiseAllSettled(functions);
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
promise.then(res =&gt; {
    const out = {t: Math.floor(performance.now() - time), values: res}
    console.log(out) // {&quot;t&quot;:100,&quot;values&quot;:[{&quot;status&quot;:&quot;fulfilled&quot;,&quot;value&quot;:15}]}
})

The returned promise resolves within 100 milliseconds. Since promise from the array functions is fulfilled, the resolved value of the returned promise is set to [{&quot;status&quot;:&quot;fulfilled&quot;,&quot;value&quot;:15}].

```

**Example 2:**

```

Input: functions = [
    () =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(20), 100)), 
    () =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(15), 100))
]
Output: 
{
    &quot;t&quot;:100,
    &quot;values&quot;: [
&nbsp;       {&quot;status&quot;:&quot;fulfilled&quot;,&quot;value&quot;:20},
&nbsp;       {&quot;status&quot;:&quot;fulfilled&quot;,&quot;value&quot;:15}
    ]
}
Explanation: The returned promise resolves within 100 milliseconds, because the resolution time is determined by the promise that takes the longest time to fulfill. Since promises from the array functions are fulfilled, the resolved value of the returned promise is set to [{&quot;status&quot;:&quot;fulfilled&quot;,&quot;value&quot;:20},{&quot;status&quot;:&quot;fulfilled&quot;,&quot;value&quot;:15}].

```

**Example 3:**

```

Input: functions = [
&nbsp;   () =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(30), 200)), 
&nbsp;   () =&gt; new Promise((resolve, reject) =&gt; setTimeout(() =&gt; reject(&quot;Error&quot;), 100))
]
Output:
{
    &quot;t&quot;:200,
    &quot;values&quot;: [
        {&quot;status&quot;:&quot;fulfilled&quot;,&quot;value&quot;:30},
        {&quot;status&quot;:&quot;rejected&quot;,&quot;reason&quot;:&quot;Error&quot;}
    ]
}
Explanation: The returned promise resolves within 200 milliseconds, as its resolution time is determined by the promise that takes the longest time to fulfill. Since one promise from the array function is fulfilled and another is rejected, the resolved value of the returned promise is set to an array containing objects in the following order: [{&quot;status&quot;:&quot;fulfilled&quot;,&quot;value&quot;:30}, {&quot;status&quot;:&quot;rejected&quot;,&quot;reason&quot;:&quot;Error&quot;}]. Each object in the array corresponds to the promises in the original array function, maintaining the same order.

```

 

**Constraints:**

	- `1 <= functions.length <= 10`

---

**Links:** [Submissions](https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/) | [Solutions](https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/)
