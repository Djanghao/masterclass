# [2083. Substrings That Begin and End With the Same Letter](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 137 | 12 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)


## Description

You are given a **0-indexed** string `s` consisting of only lowercase English letters. Return *the number of **substrings** in *`s` *that begin and end with the **same** character.*

A **substring** is a contiguous non-empty sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;abcba&quot;
Output: 7
Explanation:
The substrings of length 1 that start and end with the same letter are: &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;b&quot;, and &quot;a&quot;.
The substring of length 3 that starts and ends with the same letter is: &quot;bcb&quot;.
The substring of length 5 that starts and ends with the same letter is: &quot;abcba&quot;.

```

**Example 2:**

```

Input: s = &quot;abacad&quot;
Output: 9
Explanation:
The substrings of length 1 that start and end with the same letter are: &quot;a&quot;, &quot;b&quot;, &quot;a&quot;, &quot;c&quot;, &quot;a&quot;, and &quot;d&quot;.
The substrings of length 3 that start and end with the same letter are: &quot;aba&quot; and &quot;aca&quot;.
The substring of length 5 that starts and ends with the same letter is: &quot;abaca&quot;.

```

**Example 3:**

```

Input: s = &quot;a&quot;
Output: 1
Explanation:
The substring of length 1 that starts and ends with the same letter is: &quot;a&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/) | [Solutions](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/)
