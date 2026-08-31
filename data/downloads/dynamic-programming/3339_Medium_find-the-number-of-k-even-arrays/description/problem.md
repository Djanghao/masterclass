# [3339. Find the Number of K-Even Arrays](https://leetcode.com/problems/find-the-number-of-k-even-arrays/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 6 | 3 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

You are given three integers `n`, `m`, and `k`.

An array `arr` is called **k-even** if there are **exactly** `k` indices such that, for each of these indices `i` (`0 <= i < n - 1`):

	- `(arr[i] * arr[i + 1]) - arr[i] - arr[i + 1]` is *even*.

Return the number of possible **k-even** arrays of size `n` where all elements are in the range `[1, m]`.

Since the answer may be very large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

**Input:** n = 3, m = 4, k = 2

**Output:** 8

**Explanation:**

The 8 possible 2-even arrays are:

	- `[2, 2, 2]`

	- `[2, 2, 4]`

	- `[2, 4, 2]`

	- `[2, 4, 4]`

	- `[4, 2, 2]`

	- `[4, 2, 4]`

	- `[4, 4, 2]`

	- `[4, 4, 4]`

**Example 2:**

**Input:** n = 5, m = 1, k = 0

**Output:** 1

**Explanation:**

The only 0-even array is `[1, 1, 1, 1, 1]`.

**Example 3:**

**Input:** n = 7, m = 7, k = 5

**Output:** 5832

 

**Constraints:**

	- `1 <= n <= 750`

	- `0 <= k <= n - 1`

	- `1 <= m <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-number-of-k-even-arrays/) | [Solutions](https://leetcode.com/problems/find-the-number-of-k-even-arrays/)
