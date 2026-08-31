# [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 10074 | 1073 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`graph`](https://leetcode.com/tag/graph), [`shortest-path`](https://leetcode.com/tag/shortest-path)

**Companies:** `amazon`, `bloomberg`, `uber`, `google`, `snapchat`, `tiktok`, `microsoft`, `goldman-sachs`, `facebook`, `citadel`, `ge-healthcare`, `flipkart`, `nuro`, `phonepe`, `stripe`, `rippling`, `yahoo`, `snowflake`, `makemytrip`

## Description

You are given an array of variable pairs `equations` and an array of real numbers `values`, where `equations[i] = [A_i, B_i]` and `values[i]` represent the equation `A_i / B_i = values[i]`. Each `A_i` or `B_i` is a string that represents a single variable.

You are also given some `queries`, where `queries[j] = [C_j, D_j]` represents the `j^th` query where you must find the answer for `C_j / D_j = ?`.

Return *the answers to all queries*. If a single answer cannot be determined, return `-1.0`.

**Note:** The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

**Note: **The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

 

**Example 1:**

```

Input: equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;]], values = [2.0,3.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;e&quot;],[&quot;a&quot;,&quot;a&quot;],[&quot;x&quot;,&quot;x&quot;]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
note: x is undefined =&gt; -1.0
```

**Example 2:**

```

Input: equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;],[&quot;bc&quot;,&quot;cd&quot;]], values = [1.5,2.5,5.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;c&quot;,&quot;b&quot;],[&quot;bc&quot;,&quot;cd&quot;],[&quot;cd&quot;,&quot;bc&quot;]]
Output: [3.75000,0.40000,5.00000,0.20000]

```

**Example 3:**

```

Input: equations = [[&quot;a&quot;,&quot;b&quot;]], values = [0.5], queries = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;c&quot;],[&quot;x&quot;,&quot;y&quot;]]
Output: [0.50000,2.00000,-1.00000,-1.00000]

```

 

**Constraints:**

	- `1 <= equations.length <= 20`

	- `equations[i].length == 2`

	- `1 <= A_i.length, B_i.length <= 5`

	- `values.length == equations.length`

	- `0.0 < values[i] <= 20.0`

	- `1 <= queries.length <= 20`

	- `queries[i].length == 2`

	- `1 <= C_j.length, D_j.length <= 5`

	- `A_i, B_i, C_j, D_j` consist of lower case English letters and digits.

---

**Links:** [Submissions](https://leetcode.com/problems/evaluate-division/) | [Solutions](https://leetcode.com/problems/evaluate-division/)
