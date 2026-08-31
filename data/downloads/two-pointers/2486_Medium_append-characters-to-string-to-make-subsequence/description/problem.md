# [2486. Append Characters to String to Make Subsequence](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1167 | 90 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `amazon`, `google`

## Description

You are given two strings `s` and `t` consisting of only lowercase English letters.

Return *the minimum number of characters that need to be appended to the end of *`s`* so that *`t`* becomes a **subsequence** of *`s`.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

 

**Example 1:**

```

Input: s = &quot;coaching&quot;, t = &quot;coding&quot;
Output: 4
Explanation: Append the characters &quot;ding&quot; to the end of s so that s = &quot;coachingding&quot;.
Now, t is a subsequence of s (&quot;coachingding&quot;).
It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

```

**Example 2:**

```

Input: s = &quot;abcde&quot;, t = &quot;a&quot;
Output: 0
Explanation: t is already a subsequence of s (&quot;abcde&quot;).

```

**Example 3:**

```

Input: s = &quot;z&quot;, t = &quot;abcde&quot;
Output: 5
Explanation: Append the characters &quot;abcde&quot; to the end of s so that s = &quot;zabcde&quot;.
Now, t is a subsequence of s (&quot;zabcde&quot;).
It can be shown that appending any 4 characters to the end of s will never make t a subsequence.

```

 

**Constraints:**

	- `1 <= s.length, t.length <= 10^5`

	- `s` and `t` consist only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/) | [Solutions](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/)
