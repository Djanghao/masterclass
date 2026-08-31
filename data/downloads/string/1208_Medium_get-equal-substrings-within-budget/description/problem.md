# [1208. Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1902 | 150 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `jpmorgan`, `ibm`, `microsoft`

## Description

You are given two strings `s` and `t` of the same length and an integer `maxCost`.

You want to change `s` to `t`. Changing the `i^th` character of `s` to `i^th` character of `t` costs `|s[i] - t[i]|` (i.e., the absolute difference between the ASCII values of the characters).

Return *the maximum length of a substring of *`s`* that can be changed to be the same as the corresponding substring of *`t`* with a cost less than or equal to *`maxCost`. If there is no substring from `s` that can be changed to its corresponding substring from `t`, return `0`.

 

**Example 1:**

```

Input: s = &quot;abcd&quot;, t = &quot;bcdf&quot;, maxCost = 3
Output: 3
Explanation: &quot;abc&quot; of s can change to &quot;bcd&quot;.
That costs 3, so the maximum length is 3.

```

**Example 2:**

```

Input: s = &quot;abcd&quot;, t = &quot;cdef&quot;, maxCost = 3
Output: 1
Explanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.

```

**Example 3:**

```

Input: s = &quot;abcd&quot;, t = &quot;acde&quot;, maxCost = 0
Output: 1
Explanation: You cannot make any change, so the maximum length is 1.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `t.length == s.length`

	- `0 <= maxCost <= 10^6`

	- `s` and `t` consist of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/get-equal-substrings-within-budget/) | [Solutions](https://leetcode.com/problems/get-equal-substrings-within-budget/)
