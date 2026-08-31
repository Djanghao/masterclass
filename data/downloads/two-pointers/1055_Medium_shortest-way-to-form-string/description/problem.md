# [1055. Shortest Way to Form String](https://leetcode.com/problems/shortest-way-to-form-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1329 | 75 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `pinterest`, `facebook`, `google`

## Description

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

Given two strings `source` and `target`, return *the minimum number of **subsequences** of *`source`* such that their concatenation equals *`target`. If the task is impossible, return `-1`.

 

**Example 1:**

```

Input: source = &quot;abc&quot;, target = &quot;abcbc&quot;
Output: 2
Explanation: The target &quot;abcbc&quot; can be formed by &quot;abc&quot; and &quot;bc&quot;, which are subsequences of source &quot;abc&quot;.

```

**Example 2:**

```

Input: source = &quot;abc&quot;, target = &quot;acdbc&quot;
Output: -1
Explanation: The target string cannot be constructed from the subsequences of source string due to the character &quot;d&quot; in target string.

```

**Example 3:**

```

Input: source = &quot;xyz&quot;, target = &quot;xzyxz&quot;
Output: 3
Explanation: The target string can be constructed as follows &quot;xz&quot; + &quot;y&quot; + &quot;xz&quot;.

```

 

**Constraints:**

	- `1 <= source.length, target.length <= 1000`

	- `source` and `target` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-way-to-form-string/) | [Solutions](https://leetcode.com/problems/shortest-way-to-form-string/)
