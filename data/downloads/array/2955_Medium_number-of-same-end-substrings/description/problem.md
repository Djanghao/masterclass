# [2955. Number of Same-End Substrings](https://leetcode.com/problems/number-of-same-end-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 86 | 18 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `sprinklr`

## Description

You are given a **0-indexed** string `s`, and a 2D array of integers `queries`, where `queries[i] = [l_i, r_i]` indicates a substring of `s` starting from the index `l_i` and ending at the index `r_i` (both **inclusive**), i.e. `s[l_i..r_i]`.

Return *an array *`ans`* where* `ans[i]` *is the number of **same-end** substrings of* `queries[i]`.

A **0-indexed** string `t` of length `n` is called **same-end** if it has the same character at both of its ends, i.e., `t[0] == t[n - 1]`.

A substring is a contiguous non-empty sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;abcaab&quot;, queries = [[0,0],[1,4],[2,5],[0,5]]
Output: [1,5,5,10]
Explanation: Here is the same-end substrings of each query:
1st query: s[0..0] is &quot;a&quot; which has 1 same-end substring: &quot;a&quot;.
2nd query: s[1..4] is &quot;bcaa&quot; which has 5 same-end substrings: &quot;bcaa&quot;, &quot;bcaa&quot;, &quot;bcaa&quot;, &quot;bcaa&quot;, &quot;bcaa&quot;.
3rd query: s[2..5] is &quot;caab&quot; which has 5 same-end substrings: &quot;caab&quot;, &quot;caab&quot;, &quot;caab&quot;, &quot;caab&quot;, &quot;caab&quot;.
4th query: s[0..5] is &quot;abcaab&quot; which has 10 same-end substrings: &quot;abcaab&quot;, &quot;abcaab&quot;, &quot;abcaab&quot;, &quot;abcaab&quot;, &quot;abcaab&quot;, &quot;abcaab&quot;, &quot;abcaab&quot;, &quot;abcaab&quot;, &quot;abcaab&quot;, &quot;abcaab&quot;.

```

**Example 2:**

```

Input: s = &quot;abcd&quot;, queries = [[0,3]]
Output: [4]
Explanation: The only query is s[0..3] which is &quot;abcd&quot;. It has 4 same-end substrings: &quot;abcd&quot;, &quot;abcd&quot;, &quot;abcd&quot;, &quot;abcd&quot;.

```

 

**Constraints:**

	- `2 <= s.length <= 3 * 10^4`

	- `s` consists only of lowercase English letters.

	- `1 <= queries.length <= 3 * 10^4`

	- `queries[i] = [l_i, r_i]`

	- `0 <= l_i <= r_i < s.length`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-same-end-substrings/) | [Solutions](https://leetcode.com/problems/number-of-same-end-substrings/)
