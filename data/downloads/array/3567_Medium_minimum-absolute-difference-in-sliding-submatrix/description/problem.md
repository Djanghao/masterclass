# [3567. Minimum Absolute Difference in Sliding Submatrix](https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 48 | 3 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`sorting`](https://leetcode.com/tag/sorting), [`matrix`](https://leetcode.com/tag/matrix)


## Description

You are given an `m x n` integer matrix `grid` and an integer `k`.

For every contiguous `k x k` **submatrix** of `grid`, compute the **minimum absolute** difference between any two **distinct** values within that **submatrix**.

Return a 2D array `ans` of size `(m - k + 1) x (n - k + 1)`, where `ans[i][j]` is the minimum absolute difference in the submatrix whose top-left corner is `(i, j)` in `grid`.

**Note**: If all elements in the submatrix have the same value, the answer will be 0.

A submatrix `(x1, y1, x2, y2)` is a matrix that is formed by choosing all cells `matrix[x][y]` where `x1 Starting at `(0, 0)`: `[[1, -2], [2, 3]]`.

		
			Distinct values in the submatrix are `[1, -2, 2, 3]`.

			- The minimum absolute difference in the submatrix is `|1 - 2| = 1`.

		
		
		- Starting at `(0, 1)`: `[[-2, 3], [3, 5]]`.
		
			Distinct values in the submatrix are `[-2, 3, 5]`.

			- The minimum absolute difference in the submatrix is `|3 - 5| = 2`.

		
		
	
	
	- Thus, the answer is `[[1, 2]]`.

 

**Constraints:**

	- `1 <= m == grid.length <= 30`

	- `1 <= n == grid[i].length <= 30`

	- `-10^5 <= grid[i][j] <= 10^5`

	- `1 <= k <= min(m, n)`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix/) | [Solutions](https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix/)
