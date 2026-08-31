# [2489. Number of Substrings With Fixed Ratio](https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 55 | 3 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `intuit`

## Description

You are given a binary string `s`, and two integers `num1` and `num2`. `num1` and `num2` are coprime numbers.

A **ratio substring** is a substring of s where the ratio between the number of `0`'s and the number of `1`'s in the substring is exactly `num1 : num2`.

	- For example, if `num1 = 2` and `num2 = 3`, then `"01011"` and `"1110000111"` are ratio substrings, while `"11000"` is not.

Return *the number of **non-empty** ratio substrings of *`s`.

**Note** that:

	- A **substring** is a contiguous sequence of characters within a string.

	- Two values `x` and `y` are **coprime** if `gcd(x, y) == 1` where `gcd(x, y)` is the greatest common divisor of `x` and `y`.

 

**Example 1:**

```

Input: s = &quot;0110011&quot;, num1 = 1, num2 = 2
Output: 4
Explanation: There exist 4 non-empty ratio substrings.
- The substring s[0..2]: &quot;0110011&quot;. It contains one 0 and two 1&#39;s. The ratio is 1 : 2.
- The substring s[1..4]: &quot;0110011&quot;. It contains one 0 and two 1&#39;s. The ratio is 1 : 2.
- The substring s[4..6]: &quot;0110011&quot;. It contains one 0 and two 1&#39;s. The ratio is 1 : 2.
- The substring s[1..6]: &quot;0110011&quot;. It contains two 0&#39;s and four 1&#39;s. The ratio is 2 : 4 == 1 : 2.
It can be shown that there are no more ratio substrings.

```

**Example 2:**

```

Input: s = &quot;10101&quot;, num1 = 3, num2 = 1
Output: 0
Explanation: There is no ratio substrings of s. We return 0.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `1 <= num1, num2 <= s.length`

	- `num1` and `num2` are coprime integers.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/) | [Solutions](https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/)
