# [2014. Longest Subsequence Repeated k Times](https://leetcode.com/problems/longest-subsequence-repeated-k-times/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 820 | 116 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`greedy`](https://leetcode.com/tag/greedy), [`counting`](https://leetcode.com/tag/counting), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `google`, `facebook`

## Description

You are given a string `s` of length `n`, and an integer `k`. You are tasked to find the **longest subsequence repeated** `k` times in string `s`.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

A subsequence `seq` is **repeated** `k` times in the string `s` if `seq * k` is a subsequence of `s`, where `seq * k` represents a string constructed by concatenating `seq` `k` times.

	- For example, `"bba"` is repeated `2` times in the string `"bababcba"`, because the string `"bbabba"`, constructed by concatenating `"bba"` `2` times, is a subsequence of the string `"bababcba"`.

Return *the **longest subsequence repeated** *`k`* times in string *`s`*. If multiple such subsequences are found, return the **lexicographically largest** one. If there is no such subsequence, return an **empty** string*.

 

**Example 1:**

![image](./images/0.png)
```

Input: s = &quot;letsleetcode&quot;, k = 2
Output: &quot;let&quot;
Explanation: There are two longest subsequences repeated 2 times: &quot;let&quot; and &quot;ete&quot;.
&quot;let&quot; is the lexicographically largest one.

```

**Example 2:**

```

Input: s = &quot;bb&quot;, k = 2
Output: &quot;b&quot;
Explanation: The longest subsequence repeated 2 times is &quot;b&quot;.

```

**Example 3:**

```

Input: s = &quot;ab&quot;, k = 2
Output: &quot;&quot;
Explanation: There is no subsequence repeated 2 times. Empty string is returned.

```

 

**Constraints:**

	- `n == s.length`

	- `2 <= k <= 2000`

	- `2 <= n < min(2001, k * 8)`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-subsequence-repeated-k-times/) | [Solutions](https://leetcode.com/problems/longest-subsequence-repeated-k-times/)
