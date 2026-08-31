# [1653. Minimum Deletions to Make String Balanced](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2165 | 69 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `google`, `microsoft`, `redbus`

## Description

You are given a string `s` consisting only of characters `'a'` and `'b'`​​​​.

You can delete any number of characters in `s` to make `s` **balanced**. `s` is **balanced** if there is no pair of indices `(i,j)` such that `i < j` and `s[i] = 'b'` and `s[j]= 'a'`.

Return *the **minimum** number of deletions needed to make *`s`* **balanced***.

 

**Example 1:**

```

Input: s = &quot;aababbab&quot;
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 (&quot;aababbab&quot; -&gt; &quot;aaabbb&quot;), or
Delete the characters at 0-indexed positions 3 and 6 (&quot;aababbab&quot; -&gt; &quot;aabbbb&quot;).

```

**Example 2:**

```

Input: s = &quot;bbaaaaabb&quot;
Output: 2
Explanation: The only solution is to delete the first two characters.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s[i]` is `'a'` or `'b'`​​.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/) | [Solutions](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/)
