# [1573. Number of Ways to Split a String](https://leetcode.com/problems/number-of-ways-to-split-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 764 | 88 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string)

**Companies:** `microsoft`

## Description

Given a binary string `s`, you can split `s` into 3 **non-empty** strings `s1`, `s2`, and `s3` where `s1 + s2 + s3 = s`.

Return the number of ways `s` can be split such that the number of ones is the same in `s1`, `s2`, and `s3`. Since the answer may be too large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: s = &quot;10101&quot;
Output: 4
Explanation: There are four ways to split s in 3 parts where each part contain the same number of letters &#39;1&#39;.
&quot;1|010|1&quot;
&quot;1|01|01&quot;
&quot;10|10|1&quot;
&quot;10|1|01&quot;

```

**Example 2:**

```

Input: s = &quot;1001&quot;
Output: 0

```

**Example 3:**

```

Input: s = &quot;0000&quot;
Output: 3
Explanation: There are three ways to split s in 3 parts.
&quot;0|0|00&quot;
&quot;0|00|0&quot;
&quot;00|0|0&quot;

```

 

**Constraints:**

	- `3 <= s.length <= 10^5`

	- `s[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-ways-to-split-a-string/) | [Solutions](https://leetcode.com/problems/number-of-ways-to-split-a-string/)
