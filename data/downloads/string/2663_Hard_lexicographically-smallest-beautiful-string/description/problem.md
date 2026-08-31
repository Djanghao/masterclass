# [2663. Lexicographically Smallest Beautiful String](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 223 | 28 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`, `amazon`

## Description

A string is **beautiful** if:

	- It consists of the first `k` letters of the English lowercase alphabet.

	- It does not contain any substring of length `2` or more which is a palindrome.

You are given a beautiful string `s` of length `n` and a positive integer `k`.

Return *the lexicographically smallest string of length *`n`*, which is larger than *`s`* and is **beautiful***. If there is no such string, return an empty string.

A string `a` is lexicographically larger than a string `b` (of the same length) if in the first position where `a` and `b` differ, `a` has a character strictly larger than the corresponding character in `b`.

	- For example, `"abcd"` is lexicographically larger than `"abcc"` because the first position they differ is at the fourth character, and `d` is greater than `c`.

 

**Example 1:**

```

Input: s = &quot;abcz&quot;, k = 26
Output: &quot;abda&quot;
Explanation: The string &quot;abda&quot; is beautiful and lexicographically larger than the string &quot;abcz&quot;.
It can be proven that there is no string that is lexicographically larger than the string &quot;abcz&quot;, beautiful, and lexicographically smaller than the string &quot;abda&quot;.

```

**Example 2:**

```

Input: s = &quot;dc&quot;, k = 4
Output: &quot;&quot;
Explanation: It can be proven that there is no string that is lexicographically larger than the string &quot;dc&quot; and is beautiful.

```

 

**Constraints:**

	- `1 <= n == s.length <= 10^5`

	- `4 <= k <= 26`

	- `s` is a beautiful string.

---

**Links:** [Submissions](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/) | [Solutions](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/)
