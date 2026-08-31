# [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 8980 | 408 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy), [`recursion`](https://leetcode.com/tag/recursion)

**Companies:** `google`, `bloomberg`, `zoho`, `microsoft`, `amazon`, `walmart-labs`, `de-shaw`, `facebook`, `coupang`, `apple`, `adobe`, `instacart`, `tiktok`, `two-sigma`, `twitter`, `snapchat`

## Description

Given an input string (`s`) and a pattern (`p`), implement wildcard pattern matching with support for `'?'` and `'*'` where:

	- `'?'` Matches any single character.

	- `'*'` Matches any sequence of characters (including the empty sequence).

The matching should cover the **entire** input string (not partial).

 

**Example 1:**

```

Input: s = &quot;aa&quot;, p = &quot;a&quot;
Output: false
Explanation: &quot;a&quot; does not match the entire string &quot;aa&quot;.

```

**Example 2:**

```

Input: s = &quot;aa&quot;, p = &quot;*&quot;
Output: true
Explanation:&nbsp;&#39;*&#39; matches any sequence.

```

**Example 3:**

```

Input: s = &quot;cb&quot;, p = &quot;?a&quot;
Output: false
Explanation:&nbsp;&#39;?&#39; matches &#39;c&#39;, but the second letter is &#39;a&#39;, which does not match &#39;b&#39;.

```

 

**Constraints:**

	- `0 <= s.length, p.length <= 2000`

	- `s` contains only lowercase English letters.

	- `p` contains only lowercase English letters, `'?'` or `'*'`.

---

**Links:** [Submissions](https://leetcode.com/problems/wildcard-matching/) | [Solutions](https://leetcode.com/problems/wildcard-matching/)
