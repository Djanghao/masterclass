# [2725. Interval Cancellation](https://leetcode.com/problems/interval-cancellation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 210 | 96 |




## Description

Given a function `fn`, an array of arguments `args`, and an interval time `t`, return a cancel function `cancelFn`.

After a delay of `cancelTimeMs`, the returned cancel function `cancelFn` will be invoked.

```

setTimeout(cancelFn, cancelTimeMs)

```

The function `fn` should be called with `args` immediately and then called again every `t` milliseconds until `cancelFn` is called at `cancelTimeMs` ms.

 

**Example 1:**

```

Input: fn = (x) =&gt; x * 2, args = [4], t = 35
Output: 
[
   {&quot;time&quot;: 0, &quot;returned&quot;: 8},
   {&quot;time&quot;: 35, &quot;returned&quot;: 8},
   {&quot;time&quot;: 70, &quot;returned&quot;: 8},
   {&quot;time&quot;: 105, &quot;returned&quot;: 8},
   {&quot;time&quot;: 140, &quot;returned&quot;: 8},
   {&quot;time&quot;: 175, &quot;returned&quot;: 8}
]
Explanation: 
const cancelTimeMs = 190;
const cancelFn = cancellable((x) =&gt; x * 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);

Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
1st fn call is at 0ms. fn(4) returns 8.
2nd fn call is at 35ms. fn(4) returns 8.
3rd fn call is at 70ms. fn(4) returns 8.
4th fn call is at&nbsp;105ms. fn(4) returns 8.
5th fn call is at 140ms. fn(4) returns 8.
6th fn call is at 175ms. fn(4) returns 8.
Cancelled at 190ms

```

**Example 2:**

```

Input: fn = (x1, x2) =&gt; (x1 * x2), args = [2, 5], t = 30
Output: 
[
   {&quot;time&quot;: 0, &quot;returned&quot;: 10},
   {&quot;time&quot;: 30, &quot;returned&quot;: 10},
   {&quot;time&quot;: 60, &quot;returned&quot;: 10},
   {&quot;time&quot;: 90, &quot;returned&quot;: 10},
   {&quot;time&quot;: 120, &quot;returned&quot;: 10},
   {&quot;time&quot;: 150, &quot;returned&quot;: 10}
]
Explanation: 
const cancelTimeMs = 165; 
const cancelFn = cancellable((x1, x2) =&gt; (x1 * x2), [2, 5], 30) 
setTimeout(cancelFn, cancelTimeMs)

Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.
1st fn call is at 0ms&nbsp;
2nd fn call is at 30ms&nbsp;
3rd fn call is at 60ms&nbsp;
4th fn call is at&nbsp;90ms&nbsp;
5th fn call is at 120ms&nbsp;
6th fn call is at 150ms
Cancelled at 165ms

```

**Example 3:**

```

Input: fn = (x1, x2, x3) =&gt; (x1 + x2 + x3), args = [5, 1, 3], t = 50
Output: 
[
   {&quot;time&quot;: 0, &quot;returned&quot;: 9},
   {&quot;time&quot;: 50, &quot;returned&quot;: 9},
   {&quot;time&quot;: 100, &quot;returned&quot;: 9},
   {&quot;time&quot;: 150, &quot;returned&quot;: 9}
]
Explanation: 
const cancelTimeMs = 180;
const cancelFn = cancellable((x1, x2, x3) =&gt; (x1 + x2 + x3), [5, 1, 3], 50)
setTimeout(cancelFn, cancelTimeMs)

Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled. 
1st fn call is at 0ms
2nd fn call is at 50ms
3rd fn call is at 100ms
4th fn call is at&nbsp;150ms
Cancelled at 180ms

```

 

**Constraints:**

	- `fn` is a function

	- `args` is a valid JSON array

	- `1 <= args.length <= 10`

	- `30 <= t <= 100`

	- `10 <= cancelTimeMs <= 500`

---

**Links:** [Submissions](https://leetcode.com/problems/interval-cancellation/) | [Solutions](https://leetcode.com/problems/interval-cancellation/)
