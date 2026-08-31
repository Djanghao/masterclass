# [2797. Partial Function with Placeholders](https://leetcode.com/problems/partial-function-with-placeholders/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 11 | 4 |




## Description

Given a function `fn` and an array `args`, return a function `partialFn`. 

Placeholders `"_"` in the `args` should be replaced with values from `restArgs` starting from index `0`. Any remaining values in the `restArgs` should be added at the end of the `args`.

`partialFn` should return a result of `fn`. `fn` should be called with the elements of the modified `args` passed as separate arguments.

 

**Example 1:**

```

Input: fn = (...args) =&gt; args, args = [2,4,6], restArgs = [8,10]
Output: [2,4,6,8,10]
Explanation: 
const partialFn = partial(fn, args)
const result = partialFn(...restArgs) 
console.log(result) //&nbsp;[2,4,6,8,10]

There are no placeholders &quot;_&quot; in args therefore restArgs is just added at the end of args. Then the elements of the&nbsp;args&nbsp;are passed as separate arguments to fn, which returns passed arguments as an array.

```
**Example 2:**

```

Input: fn = (...args) =&gt; args, args = [1,2,&quot;_&quot;,4,&quot;_&quot;,6], restArgs = [3,5]
Output: [1,2,3,4,5,6]
Explanation: 
const partialFn = partial(fn, args) 
const result = partialFn(...restArgs) 
console.log(result) //&nbsp;[1,2,3,4,5,6] 

Placeholders &quot;_&quot; are replaced with values from the restArgs. Then the elements of the&nbsp;args&nbsp;are passed as separate arguments to fn, which returns passed arguments as an array.

```

**Example 3:**

```

Input: fn = (a, b, c) =&gt; b + a - c, args = [&quot;_&quot;, 5], restArgs = [5, 20]
Output: -10
Explanation: 
const partialFn = partial(fn, args)
const result = partialFn(...restArgs)
console.log(result) //&nbsp;-10

Placeholder &quot;_&quot; is replaced with 5 and 20 is added at the end of args. Then the elements of the&nbsp;args&nbsp;are passed as separate arguments to fn, which returns -10 (5 + 5 - 20).

```

 

**Constraints:**

	- `fn` is a function

	- `args` and `restArgs` are valid JSON arrays

	- `1 <= args.length <= 5 * 10^4`

	- `1 <= restArgs.length <= 5 * 10^4`

	- `0 <= number of placeholders <= restArgs.length`

---

**Links:** [Submissions](https://leetcode.com/problems/partial-function-with-placeholders/) | [Solutions](https://leetcode.com/problems/partial-function-with-placeholders/)
