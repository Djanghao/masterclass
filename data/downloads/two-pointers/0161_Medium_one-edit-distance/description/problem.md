# [161. One Edit Distance](https://leetcode.com/problems/one-edit-distance/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1441 | 194 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `yandex`, `snapchat`, `facebook`, `twitter`, `uber`

## Description

Given two strings `s` and `t`, return `true` if they are both one edit distance apart, otherwise return `false`.

A string `s` is said to be one distance apart from a string `t` if you can:

	- Insert **exactly one** character into `s` to get `t`.

	- Delete **exactly one** character from `s` to get `t`.

	- Replace **exactly one** character of `s` with **a different character** to get `t`.

 

**Example 1:**

```

Input: s = &quot;ab&quot;, t = &quot;acb&quot;
Output: true
Explanation: We can insert &#39;c&#39; into s&nbsp;to get&nbsp;t.

```

**Example 2:**

```

Input: s = &quot;&quot;, t = &quot;&quot;
Output: false
Explanation: We cannot get t from s by only one step.

```

 

**Constraints:**

	- `0 <= s.length, t.length <= 10^4`

	- `s` and `t` consist of lowercase letters, uppercase letters, and digits.

---

**Links:** [Submissions](https://leetcode.com/problems/one-edit-distance/) | [Solutions](https://leetcode.com/problems/one-edit-distance/)
