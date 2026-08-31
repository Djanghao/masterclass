# [1247. Minimum Swaps to Make Strings Equal](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1456 | 251 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `microsoft`, `google`, `jpmorgan`

## Description

You are given two strings `s1` and `s2` of equal length consisting of letters `"x"` and `"y"` **only**. Your task is to make these two strings equal to each other. You can swap any two characters that belong to **different** strings, which means: swap `s1[i]` and `s2[j]`.

Return the minimum number of swaps required to make `s1` and `s2` equal, or return `-1` if it is impossible to do so.

 

**Example 1:**

```

Input: s1 = &quot;xx&quot;, s2 = &quot;yy&quot;
Output: 1
Explanation: Swap s1[0] and s2[1], s1 = &quot;yx&quot;, s2 = &quot;yx&quot;.

```

**Example 2:**

```

Input: s1 = &quot;xy&quot;, s2 = &quot;yx&quot;
Output: 2
Explanation: Swap s1[0] and s2[0], s1 = &quot;yy&quot;, s2 = &quot;xx&quot;.
Swap s1[0] and s2[1], s1 = &quot;xy&quot;, s2 = &quot;xy&quot;.
Note that you cannot swap s1[0] and s1[1] to make s1 equal to &quot;yx&quot;, cause we can only swap chars in different strings.

```

**Example 3:**

```

Input: s1 = &quot;xx&quot;, s2 = &quot;xy&quot;
Output: -1

```

 

**Constraints:**

	- `1 <= s1.length, s2.length <= 1000`

	- `s1.length == s2.length`

	- `s1, s2` only contain `'x'` or `'y'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/) | [Solutions](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/)
