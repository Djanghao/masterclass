# [1297. Maximum Number of Occurrences of a Substring](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1213 | 424 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `facebook`, `salesforce`, `hubspot`, `addepar`, `roblox`

## Description

Given a string `s`, return the maximum number of occurrences of **any** substring under the following rules:

	- The number of unique characters in the substring must be less than or equal to `maxLetters`.

	- The substring size must be between `minSize` and `maxSize` inclusive.

 

**Example 1:**

```

Input: s = &quot;aababcaab&quot;, maxLetters = 2, minSize = 3, maxSize = 4
Output: 2
Explanation: Substring &quot;aab&quot; has 2 occurrences in the original string.
It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).

```

**Example 2:**

```

Input: s = &quot;aaaa&quot;, maxLetters = 1, minSize = 3, maxSize = 3
Output: 2
Explanation: Substring &quot;aaa&quot; occur 2 times in the string. It can overlap.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `1 <= maxLetters <= 26`

	- `1 <= minSize <= maxSize <= min(26, s.length)`

	- `s` consists of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/) | [Solutions](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/)
