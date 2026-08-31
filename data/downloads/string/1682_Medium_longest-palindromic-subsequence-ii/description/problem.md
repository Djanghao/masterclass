# [1682. Longest Palindromic Subsequence II](https://leetcode.com/problems/longest-palindromic-subsequence-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 158 | 30 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

A subsequence of a string `s` is considered a **good palindromic subsequence** if:

	- It is a subsequence of `s`.

	- It is a palindrome (has the same value if reversed).

	- It has an **even** length.

	- No two consecutive characters are equal, except the two middle ones.

For example, if `s = "abcabcabb"`, then `"abba"` is considered a **good palindromic subsequence**, while `"bcb"` (not even length) and `"bbbb"` (has equal consecutive characters) are not.

Given a string `s`, return *the **length** of the **longest good palindromic subsequence** in *`s`.

 

**Example 1:**

```

Input: s = &quot;bbabab&quot;
Output: 4
Explanation: The longest good palindromic subsequence of s is &quot;baab&quot;.

```

**Example 2:**

```

Input: s = &quot;dcbccacdb&quot;
Output: 4
Explanation: The longest good palindromic subsequence of s is &quot;dccd&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 250`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-palindromic-subsequence-ii/) | [Solutions](https://leetcode.com/problems/longest-palindromic-subsequence-ii/)
