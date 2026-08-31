# [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 13103 | 2360 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`recursion`](https://leetcode.com/tag/recursion)

**Companies:** `amazon`, `google`, `bloomberg`, `facebook`, `microsoft`, `apple`, `zoho`, `tiktok`, `snowflake`, `coupang`, `bytedance`, `turing`, `citadel`, `makemytrip`, `uber`, `twitter`, `airbnb`

## Description

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:

	- `'.'` Matches any single character.​​​​

	- `'*'` Matches zero or more of the preceding element.

The matching should cover the **entire** input string (not partial).

 

**Example 1:**

```

Input: s = &quot;aa&quot;, p = &quot;a&quot;
Output: false
Explanation: &quot;a&quot; does not match the entire string &quot;aa&quot;.

```

**Example 2:**

```

Input: s = &quot;aa&quot;, p = &quot;a*&quot;
Output: true
Explanation: &#39;*&#39; means zero or more of the preceding element, &#39;a&#39;. Therefore, by repeating &#39;a&#39; once, it becomes &quot;aa&quot;.

```

**Example 3:**

```

Input: s = &quot;ab&quot;, p = &quot;.*&quot;
Output: true
Explanation: &quot;.*&quot; means &quot;zero or more (*) of any character (.)&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 20`

	- `1 <= p.length <= 20`

	- `s` contains only lowercase English letters.

	- `p` contains only lowercase English letters, `'.'`, and `'*'`.

	- It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.

---

**Links:** [Submissions](https://leetcode.com/problems/regular-expression-matching/) | [Solutions](https://leetcode.com/problems/regular-expression-matching/)
