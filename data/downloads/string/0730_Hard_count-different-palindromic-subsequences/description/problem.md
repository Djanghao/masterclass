# [730. Count Different Palindromic Subsequences](https://leetcode.com/problems/count-different-palindromic-subsequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1996 | 103 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `uber`, `google`, `linkedin`

## Description

Given a string s, return *the number of different non-empty palindromic subsequences in* `s`. Since the answer may be very large, return it **modulo** `10^9 + 7`.

A subsequence of a string is obtained by deleting zero or more characters from the string.

A sequence is palindromic if it is equal to the sequence reversed.

Two sequences `a_1, a_2, ...` and `b_1, b_2, ...` are different if there is some `i` for which `a_i != b_i`.

 

**Example 1:**

```

Input: s = &quot;bccb&quot;
Output: 6
Explanation: The 6 different non-empty palindromic subsequences are &#39;b&#39;, &#39;c&#39;, &#39;bb&#39;, &#39;cc&#39;, &#39;bcb&#39;, &#39;bccb&#39;.
Note that &#39;bcb&#39; is counted only once, even though it occurs twice.

```

**Example 2:**

```

Input: s = &quot;abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba&quot;
Output: 104860361
Explanation: There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 109 + 7.

```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s[i]` is either `'a'`, `'b'`, `'c'`, or `'d'`.

---

**Links:** [Submissions](https://leetcode.com/problems/count-different-palindromic-subsequences/) | [Solutions](https://leetcode.com/problems/count-different-palindromic-subsequences/)
