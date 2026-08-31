# [3393. Count Paths With the Given XOR Value](https://leetcode.com/problems/count-paths-with-the-given-xor-value/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 85 | 6 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`matrix`](https://leetcode.com/tag/matrix)


## Description

You are given a 2D integer array `grid` with size `m x n`. You are also given an integer `k`.

Your task is to calculate the number of paths you can take from the top-left cell `(0, 0)` to the bottom-right cell `(m - 1, n - 1)` satisfying the following **constraints**:

	- You can either move to the right or down. Formally, from the cell `(i, j)` you may move to the cell `(i, j + 1)` or to the cell `(i + 1, j)` if the target cell *exists*.

	- The `XOR` of all the numbers on the path must be **equal** to `k`.

Return the total number of such paths.

Since the answer can be very large, return the result **modulo** `10^9 + 7`.

 

**Example 1:**

**Input:** grid = [[2, 1, 5], [7, 10, 0], [12, 6, 4]], k = 11

**Output:** 3

**Explanation:** 

The 3 paths are:

	- `(0, 0) &rarr; (1, 0) &rarr; (2, 0) &rarr; (2, 1) &rarr; (2, 2)`

	- `(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (1, 2) &rarr; (2, 2)`

	- `(0, 0) &rarr; (0, 1) &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2)`

**Example 2:**

**Input:** grid = [[1, 3, 3, 3], [0, 3, 3, 2], [3, 0, 1, 1]], k = 2

**Output:** 5

**Explanation:**

The 5 paths are:

	- `(0, 0) &rarr; (1, 0) &rarr; (2, 0) &rarr; (2, 1) &rarr; (2, 2) &rarr; (2, 3)`

	- `(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2) &rarr; (2, 3)`

	- `(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (1, 2) &rarr; (1, 3) &rarr; (2, 3)`

	- `(0, 0) &rarr; (0, 1) &rarr; (1, 1) &rarr; (1, 2) &rarr; (2, 2) &rarr; (2, 3)`

	- `(0, 0) &rarr; (0, 1) &rarr; (0, 2) &rarr; (1, 2) &rarr; (2, 2) &rarr; (2, 3)`

**Example 3:**

**Input:** grid = [[1, 1, 1, 2], [3, 0, 3, 2], [3, 0, 2, 2]], k = 10

**Output:** 0

 

**Constraints:**

	- `1 <= m == grid.length <= 300`

	- `1 <= n == grid[r].length <= 300`

	- `0 <= grid[r][c] < 16`

	- `0 <= k < 16`

---

**Links:** [Submissions](https://leetcode.com/problems/count-paths-with-the-given-xor-value/) | [Solutions](https://leetcode.com/problems/count-paths-with-the-given-xor-value/)
