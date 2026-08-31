# [1638. Count Substrings That Differ by One Character](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1192 | 356 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `microsoft`

## Description

Given two strings `s` and `t`, find the number of ways you can choose a non-empty substring of `s` and replace a **single character** by a different character such that the resulting substring is a substring of `t`. In other words, find the number of substrings in `s` that differ from some substring in `t` by **exactly** one character.

For example, the underlined substrings in `"computer"` and `"computation"` only differ by the `'e'`/`'a'`, so this is a valid way.

Return *the number of substrings that satisfy the condition above.*

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;aba&quot;, t = &quot;baba&quot;
Output: 6
Explanation: The following are the pairs of substrings from s and t that differ by exactly 1 character:
(&quot;aba&quot;, &quot;baba&quot;)
(&quot;aba&quot;, &quot;baba&quot;)
(&quot;aba&quot;, &quot;baba&quot;)
(&quot;aba&quot;, &quot;baba&quot;)
(&quot;aba&quot;, &quot;baba&quot;)
(&quot;aba&quot;, &quot;baba&quot;)
The underlined portions are the substrings that are chosen from s and t.

```
​​**Example 2:**

```

Input: s = &quot;ab&quot;, t = &quot;bb&quot;
Output: 3
Explanation: The following are the pairs of substrings from s and t that differ by 1 character:
(&quot;ab&quot;, &quot;bb&quot;)
(&quot;ab&quot;, &quot;bb&quot;)
(&quot;ab&quot;, &quot;bb&quot;)
​​​​The underlined portions are the substrings that are chosen from s and t.

```

 

**Constraints:**

	- `1 <= s.length, t.length <= 100`

	- `s` and `t` consist of lowercase English letters only.

---

**Links:** [Submissions](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/) | [Solutions](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/)
