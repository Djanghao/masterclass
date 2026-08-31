# [474. Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 6034 | 505 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`, `facebook`, `bloomberg`, `uber`

## Description

You are given an array of binary strings `strs` and two integers `m` and `n`.

Return *the size of the largest subset of `strs` such that there are **at most** *`m`* *`0`*'s and *`n`* *`1`*'s in the subset*.

A set `x` is a **subset** of a set `y` if all elements of `x` are also elements of `y`.

 

**Example 1:**

```

Input: strs = [&quot;10&quot;,&quot;0001&quot;,&quot;111001&quot;,&quot;1&quot;,&quot;0&quot;], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0&#39;s and 3 1&#39;s is {&quot;10&quot;, &quot;0001&quot;, &quot;1&quot;, &quot;0&quot;}, so the answer is 4.
Other valid but smaller subsets include {&quot;0001&quot;, &quot;1&quot;} and {&quot;10&quot;, &quot;1&quot;, &quot;0&quot;}.
{&quot;111001&quot;} is an invalid subset because it contains 4 1&#39;s, greater than the maximum of 3.

```

**Example 2:**

```

Input: strs = [&quot;10&quot;,&quot;0&quot;,&quot;1&quot;], m = 1, n = 1
Output: 2
Explanation: The largest subset is {&quot;0&quot;, &quot;1&quot;}, so the answer is 2.

```

 

**Constraints:**

	- `1 <= strs.length <= 600`

	- `1 <= strs[i].length <= 100`

	- `strs[i]` consists only of digits `'0'` and `'1'`.

	- `1 <= m, n <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/ones-and-zeroes/) | [Solutions](https://leetcode.com/problems/ones-and-zeroes/)
