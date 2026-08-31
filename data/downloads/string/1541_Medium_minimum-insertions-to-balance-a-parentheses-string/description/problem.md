# [1541. Minimum Insertions to Balance a Parentheses String](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1241 | 292 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `facebook`, `google`, `tiktok`, `amazon`

## Description

Given a parentheses string `s` containing only the characters `'('` and `')'`. A parentheses string is **balanced** if:

	- Any left parenthesis `'('` must have a corresponding two consecutive right parenthesis `'))'`.

	- Left parenthesis `'('` must go before the corresponding two consecutive right parenthesis `'))'`.

In other words, we treat `'('` as an opening parenthesis and `'))'` as a closing parenthesis.

	- For example, `"())"`, `"())(())))"` and `"(())())))"` are balanced, `")()"`, `"()))"` and `"(()))"` are not balanced.

You can insert the characters `'('` and `')'` at any position of the string to balance it if needed.

Return *the minimum number of insertions* needed to make `s` balanced.

 

**Example 1:**

```

Input: s = &quot;(()))&quot;
Output: 1
Explanation: The second &#39;(&#39; has two matching &#39;))&#39;, but the first &#39;(&#39; has only &#39;)&#39; matching. We need to add one more &#39;)&#39; at the end of the string to be &quot;(())))&quot; which is balanced.

```

**Example 2:**

```

Input: s = &quot;())&quot;
Output: 0
Explanation: The string is already balanced.

```

**Example 3:**

```

Input: s = &quot;))())(&quot;
Output: 3
Explanation: Add &#39;(&#39; to match the first &#39;))&#39;, Add &#39;))&#39; to match the last &#39;(&#39;.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of `'('` and `')'` only.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/) | [Solutions](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/)
