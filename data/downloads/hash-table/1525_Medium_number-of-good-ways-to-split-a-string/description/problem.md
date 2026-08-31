# [1525. Number of Good Ways to Split a String](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2109 | 54 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `amazon`, `google`, `facebook`

## Description

You are given a string `s`.

A split is called **good** if you can split `s` into two non-empty strings `s_left` and `s_right` where their concatenation is equal to `s` (i.e., `s_left + s_right = s`) and the number of distinct letters in `s_left` and `s_right` is the same.

Return *the number of **good splits** you can make in `s`*.

 

**Example 1:**

```

Input: s = &quot;aacaba&quot;
Output: 2
Explanation: There are 5 ways to split &quot;aacaba&quot; and 2 of them are good. 
(&quot;a&quot;, &quot;acaba&quot;) Left string and right string contains 1 and 3 different letters respectively.
(&quot;aa&quot;, &quot;caba&quot;) Left string and right string contains 1 and 3 different letters respectively.
(&quot;aac&quot;, &quot;aba&quot;) Left string and right string contains 2 and 2 different letters respectively (good split).
(&quot;aaca&quot;, &quot;ba&quot;) Left string and right string contains 2 and 2 different letters respectively (good split).
(&quot;aacab&quot;, &quot;a&quot;) Left string and right string contains 3 and 1 different letters respectively.

```

**Example 2:**

```

Input: s = &quot;abcd&quot;
Output: 1
Explanation: Split the string as follows (&quot;ab&quot;, &quot;cd&quot;).

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/) | [Solutions](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/)
