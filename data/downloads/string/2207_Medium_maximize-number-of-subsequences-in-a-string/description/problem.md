# [2207. Maximize Number of Subsequences in a String](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 528 | 35 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `amazon`

## Description

You are given a **0-indexed** string `text` and another **0-indexed** string `pattern` of length `2`, both of which consist of only lowercase English letters.

You can add **either** `pattern[0]` **or** `pattern[1]` anywhere in `text` **exactly once**. Note that the character can be added even at the beginning or at the end of `text`.

Return *the **maximum** number of times* `pattern` *can occur as a **subsequence** of the modified *`text`.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

 

**Example 1:**

```

Input: text = &quot;abdcdbc&quot;, pattern = &quot;ac&quot;
Output: 4
Explanation:
If we add pattern[0] = &#39;a&#39; in between text[1] and text[2], we get &quot;abadcdbc&quot;. Now, the number of times &quot;ac&quot; occurs as a subsequence is 4.
Some other strings which have 4 subsequences &quot;ac&quot; after adding a character to text are &quot;aabdcdbc&quot; and &quot;abdacdbc&quot;.
However, strings such as &quot;abdcadbc&quot;, &quot;abdccdbc&quot;, and &quot;abdcdbcc&quot;, although obtainable, have only 3 subsequences &quot;ac&quot; and are thus suboptimal.
It can be shown that it is not possible to get more than 4 subsequences &quot;ac&quot; by adding only one character.

```

**Example 2:**

```

Input: text = &quot;aabb&quot;, pattern = &quot;ab&quot;
Output: 6
Explanation:
Some of the strings which can be obtained from text and have 6 subsequences &quot;ab&quot; are &quot;aaabb&quot;, &quot;aaabb&quot;, and &quot;aabbb&quot;.

```

 

**Constraints:**

	- `1 <= text.length <= 10^5`

	- `pattern.length == 2`

	- `text` and `pattern` consist only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/) | [Solutions](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/)
