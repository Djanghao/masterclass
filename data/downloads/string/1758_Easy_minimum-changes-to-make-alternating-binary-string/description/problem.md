# [1758. Minimum Changes To Make Alternating Binary String](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1491 | 43 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `adobe`, `tesla`

## Description

You are given a string `s` consisting only of the characters `'0'` and `'1'`. In one operation, you can change any `'0'` to `'1'` or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string `"010"` is alternating, while the string `"0100"` is not.

Return *the **minimum** number of operations needed to make* `s` *alternating*.

 

**Example 1:**

```

Input: s = &quot;0100&quot;
Output: 1
Explanation: If you change the last character to &#39;1&#39;, s will be &quot;0101&quot;, which is alternating.

```

**Example 2:**

```

Input: s = &quot;10&quot;
Output: 0
Explanation: s is already alternating.

```

**Example 3:**

```

Input: s = &quot;1111&quot;
Output: 2
Explanation: You need two operations to reach &quot;0101&quot; or &quot;1010&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 10^4`

	- `s[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/) | [Solutions](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/)
