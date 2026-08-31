# [3142. Check if Grid Satisfies Conditions](https://leetcode.com/problems/check-if-grid-satisfies-conditions/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 108 | 5 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`matrix`](https://leetcode.com/tag/matrix)


## Description

You are given a 2D matrix `grid` of size `m x n`. You need to check if each cell `grid[i][j]` is:

	- Equal to the cell below it, i.e. `grid[i][j] == grid[i + 1][j]` (if it exists).

	- Different from the cell to its right, i.e. `grid[i][j] != grid[i][j + 1]` (if it exists).

Return `true` if **all** the cells satisfy these conditions, otherwise, return `false`.

 

**Example 1:**

**Input:** grid = [[1,0,2],[1,0,2]]

**Output:** true

**Explanation:**

**![image](./images/0.png)**

All the cells in the grid satisfy the conditions.

**Example 2:**

**Input:** grid = [[1,1,1],[0,0,0]]

**Output:** false

**Explanation:**

**![image](./images/1.png)**

All cells in the first row are equal.

**Example 3:**

**Input:** grid = [[1],[2],[3]]

**Output:** false

**Explanation:**

![image](./images/2.png)

Cells in the first column have different values.

 

**Constraints:**

	- `1 <= n, m <= 10`

	- `0 <= grid[i][j] <= 9`

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-grid-satisfies-conditions/) | [Solutions](https://leetcode.com/problems/check-if-grid-satisfies-conditions/)
