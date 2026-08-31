# [1526. Minimum Number of Increments on Subarrays to Form a Target Array](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2112 | 108 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy), [`monotonic-stack`](https://leetcode.com/tag/monotonic-stack)

**Companies:** `google`, `microsoft`, `oracle`, `amazon`, `dream11`

## Description

You are given an integer array `target`. You have an integer array `initial` of the same size as `target` with all elements initially zeros.

In one operation you can choose **any** subarray from `initial` and increment each value by one.

Return *the minimum number of operations to form a *`target`* array from *`initial`.

The test cases are generated so that the answer fits in a 32-bit integer.

 

**Example 1:**

```

Input: target = [1,2,3,2,1]
Output: 3
Explanation: We need at least 3 operations to form the target array from the initial array.
[0,0,0,0,0] increment 1 from index 0 to 4 (inclusive).
[1,1,1,1,1] increment 1 from index 1 to 3 (inclusive).
[1,2,2,2,1] increment 1 at index 2.
[1,2,3,2,1] target array is formed.

```

**Example 2:**

```

Input: target = [3,1,1,2]
Output: 4
Explanation: [0,0,0,0] -&gt; [1,1,1,1] -&gt; [1,1,1,2] -&gt; [2,1,1,2] -&gt; [3,1,1,2]

```

**Example 3:**

```

Input: target = [3,1,5,4,2]
Output: 7
Explanation: [0,0,0,0,0] -&gt; [1,1,1,1,1] -&gt; [2,1,1,1,1] -&gt; [3,1,1,1,1] -&gt; [3,1,2,2,2] -&gt; [3,1,3,3,2] -&gt; [3,1,4,4,2] -&gt; [3,1,5,4,2].

```

 

**Constraints:**

	- `1 <= target.length <= 10^5`

	- `1 <= target[i] <= 10^5`

	- ​​​​​​​The input is generated such that the answer fits inside a 32 bit integer.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/) | [Solutions](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/)
