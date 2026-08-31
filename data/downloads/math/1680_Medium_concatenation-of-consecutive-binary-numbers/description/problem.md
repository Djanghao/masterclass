# [1680. Concatenation of Consecutive Binary Numbers](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1447 | 437 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `amazon`

## Description

Given an integer `n`, return *the **decimal value** of the binary string formed by concatenating the binary representations of *`1`* to *`n`* in order, **modulo ***`10^9 + 7`.

 

**Example 1:**

```

Input: n = 1
Output: 1
Explanation: &quot;1&quot; in binary corresponds to the decimal value 1. 

```

**Example 2:**

```

Input: n = 3
Output: 27
Explanation: In binary, 1, 2, and 3 corresponds to &quot;1&quot;, &quot;10&quot;, and &quot;11&quot;.
After concatenating them, we have &quot;11011&quot;, which corresponds to the decimal value 27.

```

**Example 3:**

```

Input: n = 12
Output: 505379714
Explanation: The concatenation results in &quot;1101110010111011110001001101010111100&quot;.
The decimal value of that is 118505380540.
After modulo 109 + 7, the result is 505379714.

```

 

**Constraints:**

	- `1 <= n <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/) | [Solutions](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/)
