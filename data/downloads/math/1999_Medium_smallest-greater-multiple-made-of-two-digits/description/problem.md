# [1999. Smallest Greater Multiple Made of Two Digits](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 31 | 11 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `paypal`

## Description

Given three integers, `k`, `digit1`, and `digit2`, you want to find the **smallest** integer that is:

	- **Larger** than `k`,

	- A **multiple** of `k`, and

	- Comprised of **only** the digits `digit1` and/or `digit2`.

Return *the **smallest** such integer. If no such integer exists or the integer exceeds the limit of a signed 32-bit integer (*`2^31 - 1`*), return *`-1`.

 

**Example 1:**

```

Input: k = 2, digit1 = 0, digit2 = 2
Output: 20
Explanation:
20 is the first integer larger than 2, a multiple of 2, and comprised of only the digits 0 and/or 2.

```

**Example 2:**

```

Input: k = 3, digit1 = 4, digit2 = 2
Output: 24
Explanation:
24 is the first integer larger than 3, a multiple of 3, and comprised of only the digits 4 and/or 2.

```

**Example 3:**

```

Input: k = 2, digit1 = 0, digit2 = 0
Output: -1
Explanation:
No integer meets the requirements so return -1.

```

 

**Constraints:**

	- `1 <= k <= 1000`

	- `0 <= digit1 <= 9`

	- `0 <= digit2 <= 9`

---

**Links:** [Submissions](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/) | [Solutions](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/)
