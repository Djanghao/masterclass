# [2914. Minimum Number of Changes to Make Binary String Beautiful](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 673 | 117 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `facebook`, `google`

## Description

You are given a **0-indexed** binary string `s` having an even length.

A string is **beautiful** if it's possible to partition it into one or more substrings such that:

	- Each substring has an **even length**.

	- Each substring contains **only** `1`'s or **only** `0`'s.

You can change any character in `s` to `0` or `1`.

Return *the **minimum** number of changes required to make the string *`s` *beautiful*.

 

**Example 1:**

```

Input: s = &quot;1001&quot;
Output: 2
Explanation: We change s[1] to 1 and s[3] to 0 to get string &quot;1100&quot;.
It can be seen that the string &quot;1100&quot; is beautiful because we can partition it into &quot;11|00&quot;.
It can be proven that 2 is the minimum number of changes needed to make the string beautiful.

```

**Example 2:**

```

Input: s = &quot;10&quot;
Output: 1
Explanation: We change s[1] to 1 to get string &quot;11&quot;.
It can be seen that the string &quot;11&quot; is beautiful because we can partition it into &quot;11&quot;.
It can be proven that 1 is the minimum number of changes needed to make the string beautiful.

```

**Example 3:**

```

Input: s = &quot;0000&quot;
Output: 0
Explanation: We don&#39;t need to make any changes as the string &quot;0000&quot; is beautiful already.

```

 

**Constraints:**

	- `2 <= s.length <= 10^5`

	- `s` has an even length.

	- `s[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/) | [Solutions](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/)
