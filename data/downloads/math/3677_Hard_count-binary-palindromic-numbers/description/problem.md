# [3677. Count Binary Palindromic Numbers](https://leetcode.com/problems/count-binary-palindromic-numbers/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 73 | 3 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)


## Description

You are given a **non-negative** integer `n`.

A **non-negative** integer is called **binary-palindromic** if its binary representation (written without leading zeros) reads the same forward and backward.

Return the number of integers `k` such that `0 <= k <= n` and the binary representation of `k` is a palindrome.

**Note:** The number 0 is considered binary-palindromic, and its representation is `"0"`.

 

**Example 1:**

**Input:** n = 9

**Output:** 6

**Explanation:**

The integers `k` in the range `[0, 9]` whose binary representations are palindromes are:

	- `0 &rarr; "0"`

	- `1 &rarr; "1"`

	- `3 &rarr; "11"`

	- `5 &rarr; "101"`

	- `7 &rarr; "111"`

	- `9 &rarr; "1001"`

All other values in `[0, 9]` have non-palindromic binary forms. Therefore, the count is 6.

**Example 2:**

**Input:** n = 0

**Output:** 1

**Explanation:**

Since `"0"` is a palindrome, the count is 1.

 

**Constraints:**

	- `0 <= n <= 10^15`

---

**Links:** [Submissions](https://leetcode.com/problems/count-binary-palindromic-numbers/) | [Solutions](https://leetcode.com/problems/count-binary-palindromic-numbers/)
