# [2507. Smallest Value After Replacing With Sum of Prime Factors](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 446 | 29 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`simulation`](https://leetcode.com/tag/simulation), [`number-theory`](https://leetcode.com/tag/number-theory)


## Description

You are given a positive integer `n`.

Continuously replace `n` with the sum of its **prime factors**.

	- Note that if a prime factor divides `n` multiple times, it should be included in the sum as many times as it divides `n`.

Return *the smallest value *`n`* will take on.*

 

**Example 1:**

```

Input: n = 15
Output: 5
Explanation: Initially, n = 15.
15 = 3 * 5, so replace n with 3 + 5 = 8.
8 = 2 * 2 * 2, so replace n with 2 + 2 + 2 = 6.
6 = 2 * 3, so replace n with 2 + 3 = 5.
5 is the smallest value n will take on.

```

**Example 2:**

```

Input: n = 3
Output: 3
Explanation: Initially, n = 3.
3 is the smallest value n will take on.

```

 

**Constraints:**

	- `2 <= n <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/) | [Solutions](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/)
