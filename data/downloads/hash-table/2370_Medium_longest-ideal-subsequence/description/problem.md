# [2370. Longest Ideal Subsequence](https://leetcode.com/problems/longest-ideal-subsequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1522 | 82 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`, `microsoft`, `makemytrip`

## Description

You are given a string `s` consisting of lowercase letters and an integer `k`. We call a string `t` **ideal** if the following conditions are satisfied:

	- `t` is a **subsequence** of the string `s`.

	- The absolute difference in the alphabet order of every two **adjacent** letters in `t` is less than or equal to `k`.

Return *the length of the **longest** ideal string*.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

**Note** that the alphabet order is not cyclic. For example, the absolute difference in the alphabet order of `'a'` and `'z'` is `25`, not `1`.

 

**Example 1:**

```

Input: s = &quot;acfgbd&quot;, k = 2
Output: 4
Explanation: The longest ideal string is &quot;acbd&quot;. The length of this string is 4, so 4 is returned.
Note that &quot;acfgbd&quot; is not ideal because &#39;c&#39; and &#39;f&#39; have a difference of 3 in alphabet order.
```

**Example 2:**

```

Input: s = &quot;abcd&quot;, k = 3
Output: 4
Explanation: The longest ideal string is &quot;abcd&quot;. The length of this string is 4, so 4 is returned.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `0 <= k <= 25`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-ideal-subsequence/) | [Solutions](https://leetcode.com/problems/longest-ideal-subsequence/)
