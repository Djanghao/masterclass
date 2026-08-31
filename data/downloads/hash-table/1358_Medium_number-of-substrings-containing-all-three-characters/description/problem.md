# [1358. Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4311 | 81 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `amazon`, `google`, `facebook`, `bloomberg`, `microsoft`, `tiktok`, `de-shaw`

## Description

Given a string `s` consisting only of characters *a*, *b* and *c*.

Return the number of substrings containing at least one occurrence of all these characters *a*, *b* and *c*.

 

**Example 1:**

```

Input: s = &quot;abcabc&quot;
Output: 10
Explanation: The substrings containing&nbsp;at least&nbsp;one occurrence of the characters&nbsp;a,&nbsp;b&nbsp;and&nbsp;c are &quot;abc&quot;, &quot;abca&quot;, &quot;abcab&quot;, &quot;abcabc&quot;, &quot;bca&quot;, &quot;bcab&quot;, &quot;bcabc&quot;, &quot;cab&quot;, &quot;cabc&quot; and &quot;abc&quot; (again). 

```

**Example 2:**

```

Input: s = &quot;aaacb&quot;
Output: 3
Explanation: The substrings containing&nbsp;at least&nbsp;one occurrence of the characters&nbsp;a,&nbsp;b&nbsp;and&nbsp;c are &quot;aaacb&quot;, &quot;aacb&quot; and &quot;acb&quot;. 

```

**Example 3:**

```

Input: s = &quot;abc&quot;
Output: 1

```

 

**Constraints:**

	- `3 <= s.length <= 5 x 10^4`

	- `s` only consists of *a*, *b* or *c *characters.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) | [Solutions](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/)
