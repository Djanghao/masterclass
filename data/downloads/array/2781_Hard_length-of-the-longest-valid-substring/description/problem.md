# [2781. Length of the Longest Valid Substring](https://leetcode.com/problems/length-of-the-longest-valid-substring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 608 | 32 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `google`, `amazon`

## Description

You are given a string `word` and an array of strings `forbidden`.

A string is called **valid** if none of its substrings are present in `forbidden`.

Return *the length of the **longest valid substring** of the string *`word`.

A **substring** is a contiguous sequence of characters in a string, possibly empty.

 

**Example 1:**

```

Input: word = &quot;cbaaaabc&quot;, forbidden = [&quot;aaa&quot;,&quot;cb&quot;]
Output: 4
Explanation: There are 11 valid substrings in word: &quot;c&quot;, &quot;b&quot;, &quot;a&quot;, &quot;ba&quot;, &quot;aa&quot;, &quot;bc&quot;, &quot;baa&quot;, &quot;aab&quot;, &quot;ab&quot;, &quot;abc&quot; and &quot;aabc&quot;. The length of the longest valid substring is 4. 
It can be shown that all other substrings contain either &quot;aaa&quot; or &quot;cb&quot; as a substring. 
```

**Example 2:**

```

Input: word = &quot;leetcode&quot;, forbidden = [&quot;de&quot;,&quot;le&quot;,&quot;e&quot;]
Output: 4
Explanation: There are 11 valid substrings in word: &quot;l&quot;, &quot;t&quot;, &quot;c&quot;, &quot;o&quot;, &quot;d&quot;, &quot;tc&quot;, &quot;co&quot;, &quot;od&quot;, &quot;tco&quot;, &quot;cod&quot;, and &quot;tcod&quot;. The length of the longest valid substring is 4.
It can be shown that all other substrings contain either &quot;de&quot;, &quot;le&quot;, or &quot;e&quot; as a substring. 

```

 

**Constraints:**

	- `1 <= word.length <= 10^5`

	- `word` consists only of lowercase English letters.

	- `1 <= forbidden.length <= 10^5`

	- `1 <= forbidden[i].length <= 10`

	- `forbidden[i]` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/length-of-the-longest-valid-substring/) | [Solutions](https://leetcode.com/problems/length-of-the-longest-valid-substring/)
