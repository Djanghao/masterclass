# [761. Special Binary String](https://leetcode.com/problems/special-binary-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 789 | 242 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`recursion`](https://leetcode.com/tag/recursion)

**Companies:** `adobe`, `nvidia`, `microsoft`, `google`, `amazon`, `grammarly`, `quip`, `coursera`

## Description

**Special binary strings** are binary strings with the following two properties:

	- The number of `0`'s is equal to the number of `1`'s.

	- Every prefix of the binary string has at least as many `1`'s as `0`'s.

You are given a **special binary** string `s`.

A move consists of choosing two consecutive, non-empty, special substrings of `s`, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.

Return *the lexicographically largest resulting string possible after applying the mentioned operations on the string*.

 

**Example 1:**

```

Input: s = &quot;11011000&quot;
Output: &quot;11100100&quot;
Explanation: The strings &quot;10&quot; [occuring at s[1]] and &quot;1100&quot; [at s[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.

```

**Example 2:**

```

Input: s = &quot;10&quot;
Output: &quot;10&quot;

```

 

**Constraints:**

	- `1 <= s.length <= 50`

	- `s[i]` is either `'0'` or `'1'`.

	- `s` is a special binary string.

---

**Links:** [Submissions](https://leetcode.com/problems/special-binary-string/) | [Solutions](https://leetcode.com/problems/special-binary-string/)
