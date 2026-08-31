# [1960. Maximum Product of the Length of Two Palindromic Substrings](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 252 | 43 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`hash-function`](https://leetcode.com/tag/hash-function)


## Description

You are given a **0-indexed** string `s` and are tasked with finding two **non-intersecting palindromic **substrings of **odd** length such that the product of their lengths is maximized.

More formally, you want to choose four integers `i`, `j`, `k`, `l` such that `0 <= i <= j < k <= l < s.length` and both the substrings `s[i...j]` and `s[k...l]` are palindromes and have odd lengths. `s[i...j]` denotes a substring from index `i` to index `j` **inclusive**.

Return *the **maximum** possible product of the lengths of the two non-intersecting palindromic substrings.*

A **palindrome** is a string that is the same forward and backward. A **substring** is a contiguous sequence of characters in a string.

 

**Example 1:**

```

Input: s = &quot;ababbb&quot;
Output: 9
Explanation: Substrings &quot;aba&quot; and &quot;bbb&quot; are palindromes with odd length. product = 3 * 3 = 9.

```

**Example 2:**

```

Input: s = &quot;zaaaxbbby&quot;
Output: 9
Explanation: Substrings &quot;aaa&quot; and &quot;bbb&quot; are palindromes with odd length. product = 3 * 3 = 9.

```

 

**Constraints:**

	- `2 <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/) | [Solutions](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/)
