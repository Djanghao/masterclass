# [2564. Substring XOR Queries](https://leetcode.com/problems/substring-xor-queries/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 401 | 84 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `trilogy`

## Description

You are given a **binary string** `s`, and a **2D** integer array `queries` where `queries[i] = [first_i, second_i]`.

For the `i^th` query, find the **shortest substring** of `s` whose **decimal value**, `val`, yields `second_i` when **bitwise XORed** with `first_i`. In other words, `val ^ first_i == second_i`.

The answer to the `i^th` query is the endpoints (**0-indexed**) of the substring `[left_i, right_i]` or `[-1, -1]` if no such substring exists. If there are multiple answers, choose the one with the **minimum** `left_i`.

*Return an array* `ans` *where* `ans[i] = [left_i, right_i]` *is the answer to the* `i^th` *query.*

A **substring** is a contiguous non-empty sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;101101&quot;, queries = [[0,5],[1,2]]
Output: [[0,2],[2,3]]
Explanation: For the first query the substring in range [0,2] is &quot;101&quot; which has a decimal value of 5, and 5 ^ 0 = 5, hence the answer to the first query is [0,2]. In the second query, the substring in range [2,3] is &quot;11&quot;, and has a decimal value of 3, and 3 ^ 1 = 2.&nbsp;So, [2,3] is returned for the second query. 


```

**Example 2:**

```

Input: s = &quot;0101&quot;, queries = [[12,8]]
Output: [[-1,-1]]
Explanation: In this example there is no substring that answers the query, hence [-1,-1] is returned.

```

**Example 3:**

```

Input: s = &quot;1&quot;, queries = [[4,5]]
Output: [[0,0]]
Explanation: For this example, the substring in range [0,0] has a decimal value of 1, and 1 ^ 4 = 5. So, the answer is [0,0].

```

 

**Constraints:**

	- `1 <= s.length <= 10^4`

	- `s[i]` is either `'0'` or `'1'`.

	- `1 <= queries.length <= 10^5`

	- `0 <= first_i, second_i <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/substring-xor-queries/) | [Solutions](https://leetcode.com/problems/substring-xor-queries/)
