# [1234. Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1273 | 224 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `accolite`, `amazon`

## Description

You are given a string s of length `n` containing only four kinds of characters: `'Q'`, `'W'`, `'E'`, and `'R'`.

A string is said to be **balanced*** *if each of its characters appears `n / 4` times where `n` is the length of the string.

Return *the minimum length of the substring that can be replaced with **any** other string of the same length to make *`s`* **balanced***. If s is already **balanced**, return `0`.

 

**Example 1:**

```

Input: s = &quot;QWER&quot;
Output: 0
Explanation: s is already balanced.

```

**Example 2:**

```

Input: s = &quot;QQWE&quot;
Output: 1
Explanation: We need to replace a &#39;Q&#39; to &#39;R&#39;, so that &quot;RQWE&quot; (or &quot;QRWE&quot;) is balanced.

```

**Example 3:**

```

Input: s = &quot;QQQW&quot;
Output: 2
Explanation: We can replace the first &quot;QQ&quot; to &quot;ER&quot;. 

```

 

**Constraints:**

	- `n == s.length`

	- `4 <= n <= 10^5`

	- `n` is a multiple of `4`.

	- `s` contains only `'Q'`, `'W'`, `'E'`, and `'R'`.

---

**Links:** [Submissions](https://leetcode.com/problems/replace-the-substring-for-balanced-string/) | [Solutions](https://leetcode.com/problems/replace-the-substring-for-balanced-string/)
