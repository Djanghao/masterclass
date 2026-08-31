# [3240. Minimum Number of Flips to Make Binary Grid Palindromic II](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 141 | 57 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `google`

## Description

You are given an `m x n` binary matrix `grid`.

A row or column is considered **palindromic** if its values read the same forward and backward.

You can **flip** any number of cells in `grid` from `0` to `1`, or from `1` to `0`.

Return the **minimum** number of cells that need to be flipped to make **all** rows and columns **palindromic**, and the total number of `1`'s in `grid` **divisible** by `4`.

 

**Example 1:**

**Input:** grid = [[1,0,0],[0,1,0],[0,0,1]]

**Output:** 3

**Explanation:**

![image](./images/0.png)

**Example 2:**

**Input:** grid = [[0,1],[0,1],[0,0]]

**Output:** 2

**Explanation:**

![image](./images/1.png)

**Example 3:**

**Input:** grid = [[1],[1]]

**Output:** 2

**Explanation:**

![image](./images/2.png)

 

**Constraints:**

	- `m == grid.length`

	- `n == grid[i].length`

	- `1 <= m * n <= 2 * 10^5`

	- `0 <= grid[i][j] <= 1`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/) | [Solutions](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/)
