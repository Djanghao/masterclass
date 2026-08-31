# [940. Distinct Subsequences II](https://leetcode.com/problems/distinct-subsequences-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1815 | 39 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`, `google`

## Description

Given a string s, return *the number of **distinct non-empty subsequences** of* `s`. Since the answer may be very large, return it **modulo** `10^9 + 7`.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not.

 

**Example 1:**

```

Input: s = &quot;abc&quot;
Output: 7
Explanation: The 7 distinct subsequences are &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;ab&quot;, &quot;ac&quot;, &quot;bc&quot;, and &quot;abc&quot;.

```

**Example 2:**

```

Input: s = &quot;aba&quot;
Output: 6
Explanation: The 6 distinct subsequences are &quot;a&quot;, &quot;b&quot;, &quot;ab&quot;, &quot;aa&quot;, &quot;ba&quot;, and &quot;aba&quot;.

```

**Example 3:**

```

Input: s = &quot;aaa&quot;
Output: 3
Explanation: The 3 distinct subsequences are &quot;a&quot;, &quot;aa&quot; and &quot;aaa&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 2000`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/distinct-subsequences-ii/) | [Solutions](https://leetcode.com/problems/distinct-subsequences-ii/)
