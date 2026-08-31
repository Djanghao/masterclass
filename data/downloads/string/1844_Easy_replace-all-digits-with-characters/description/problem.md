# [1844. Replace All Digits with Characters](https://leetcode.com/problems/replace-all-digits-with-characters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 884 | 116 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

You are given a **0-indexed** string `s` that has lowercase English letters in its **even** indices and digits in its **odd** indices.

You must perform an operation `shift(c, x)`, where `c` is a character and `x` is a digit, that returns the `x^th` character after `c`.

	- For example, `shift('a', 5) = 'f'` and `shift('x', 0) = 'x'`.

For every **odd** index `i`, you want to replace the digit `s[i]` with the result of the `shift(s[i-1], s[i])` operation.

Return `s`* *after replacing all digits. It is **guaranteed** that* *`shift(s[i-1], s[i])`* *will never exceed* *`'z'`.

**Note** that `shift(c, x)` is **not** a preloaded function, but an operation *to be implemented* as part of the solution.

 

**Example 1:**

```

Input: s = &quot;a1c1e1&quot;
Output: &quot;abcdef&quot;
Explanation: The digits are replaced as follows:
- s[1] -&gt; shift(&#39;a&#39;,1) = &#39;b&#39;
- s[3] -&gt; shift(&#39;c&#39;,1) = &#39;d&#39;
- s[5] -&gt; shift(&#39;e&#39;,1) = &#39;f&#39;
```

**Example 2:**

```

Input: s = &quot;a1b2c3d4e&quot;
Output: &quot;abbdcfdhe&quot;
Explanation: The digits are replaced as follows:
- s[1] -&gt; shift(&#39;a&#39;,1) = &#39;b&#39;
- s[3] -&gt; shift(&#39;b&#39;,2) = &#39;d&#39;
- s[5] -&gt; shift(&#39;c&#39;,3) = &#39;f&#39;
- s[7] -&gt; shift(&#39;d&#39;,4) = &#39;h&#39;
```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consists only of lowercase English letters and digits.

	- `shift(s[i-1], s[i]) <= 'z'` for all **odd** indices `i`.

---

**Links:** [Submissions](https://leetcode.com/problems/replace-all-digits-with-characters/) | [Solutions](https://leetcode.com/problems/replace-all-digits-with-characters/)
