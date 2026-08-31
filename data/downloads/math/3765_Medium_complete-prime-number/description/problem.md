# [3765. Complete Prime Number](https://leetcode.com/problems/complete-prime-number/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 35 | 3 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`enumeration`](https://leetcode.com/tag/enumeration), [`number-theory`](https://leetcode.com/tag/number-theory)


## Description

You are given an integer `num`.

A number `num` is called a **Complete Prime Number** if every **prefix** and every **suffix** of `num` is **prime**.

Return `true` if `num` is a Complete Prime Number, otherwise return `false`.

**Note**:

	- A **prefix** of a number is formed by the **first** `k` digits of the number.

	- A **suffix** of a number is formed by the **last** `k` digits of the number.

	- Single-digit numbers are considered Complete Prime Numbers only if they are **prime**.

 

**Example 1:**

**Input:** num = 23

**Output:** true

**Explanation:**

	- **​​​​​​​**Prefixes of `num = 23` are 2 and 23, both are prime.

	- Suffixes of `num = 23` are 3 and 23, both are prime.

	- All prefixes and suffixes are prime, so 23 is a Complete Prime Number and the answer is `true`.

**Example 2:**

**Input:** num = 39

**Output:** false

**Explanation:**

	- Prefixes of `num = 39` are 3 and 39. 3 is prime, but 39 is not prime.

	- Suffixes of `num = 39` are 9 and 39. Both 9 and 39 are not prime.

	- At least one prefix or suffix is not prime, so 39 is not a Complete Prime Number and the answer is `false`.

**Example 3:**

**Input:** num = 7

**Output:** true

**Explanation:**

	- 7 is prime, so all its prefixes and suffixes are prime and the answer is `true`.

 

**Constraints:**

	- `1 <= num <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/complete-prime-number/) | [Solutions](https://leetcode.com/problems/complete-prime-number/)
