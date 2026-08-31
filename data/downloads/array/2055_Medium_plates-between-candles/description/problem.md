# [2055. Plates Between Candles](https://leetcode.com/problems/plates-between-candles/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1340 | 70 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `amazon`, `adobe`

## Description

There is a long table with a line of plates and candles arranged on top of it. You are given a **0-indexed** string `s` consisting of characters `'*'` and `'|'` only, where a `'*'` represents a **plate** and a `'|'` represents a **candle**.

You are also given a **0-indexed** 2D integer array `queries` where `queries[i] = [left_i, right_i]` denotes the **substring** `s[left_i...right_i]` (**inclusive**). For each query, you need to find the **number** of plates **between candles** that are **in the substring**. A plate is considered **between candles** if there is at least one candle to its left **and** at least one candle to its right **in the substring**.

	- For example, `s = "||**||**|*"`, and a query `[3, 8]` denotes the substring `"*||**|"`. The number of plates between candles in this substring is `2`, as each of the two plates has at least one candle **in the substring** to its left **and** right.

Return *an integer array* `answer` *where* `answer[i]` *is the answer to the* `i^th` *query*.

 

**Example 1:**

![image](./images/0.png)
```

Input: s = &quot;**|**|***|&quot;, queries = [[2,5],[5,9]]
Output: [2,3]
Explanation:
- queries[0] has two plates between candles.
- queries[1] has three plates between candles.

```

**Example 2:**

![image](./images/1.png)
```

Input: s = &quot;***|**|*****|**||**|*&quot;, queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
Output: [9,0,0,0,0]
Explanation:
- queries[0] has nine plates between candles.
- The other queries have zero plates between candles.

```

 

**Constraints:**

	- `3 <= s.length <= 10^5`

	- `s` consists of `'*'` and `'|'` characters.

	- `1 <= queries.length <= 10^5`

	- `queries[i].length == 2`

	- `0 <= left_i <= right_i < s.length`

---

**Links:** [Submissions](https://leetcode.com/problems/plates-between-candles/) | [Solutions](https://leetcode.com/problems/plates-between-candles/)
