# [1030. Matrix Cells in Distance Order](https://leetcode.com/problems/matrix-cells-in-distance-order/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 803 | 345 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`geometry`](https://leetcode.com/tag/geometry), [`sorting`](https://leetcode.com/tag/sorting), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `yahoo`

## Description

You are given four integers `row`, `cols`, `rCenter`, and `cCenter`. There is a `rows x cols` matrix and you are on the cell with the coordinates `(rCenter, cCenter)`.

Return *the coordinates of all cells in the matrix, sorted by their **distance** from *`(rCenter, cCenter)`* from the smallest distance to the largest distance*. You may return the answer in **any order** that satisfies this condition.

The **distance** between two cells `(r_1, c_1)` and `(r_2, c_2)` is `|r_1 - r_2| + |c_1 - c_2|`.

 

**Example 1:**

```

Input: rows = 1, cols = 2, rCenter = 0, cCenter = 0
Output: [[0,0],[0,1]]
Explanation: The distances from (0, 0) to other cells are: [0,1]

```

**Example 2:**

```

Input: rows = 2, cols = 2, rCenter = 0, cCenter = 1
Output: [[0,1],[0,0],[1,1],[1,0]]
Explanation: The distances from (0, 1) to other cells are: [0,1,1,2]
The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.

```

**Example 3:**

```

Input: rows = 2, cols = 3, rCenter = 1, cCenter = 2
Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
Explanation: The distances from (1, 2) to other cells are: [0,1,1,2,2,3]
There are other answers that would also be accepted as correct, such as [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].

```

 

**Constraints:**

	- `1 <= rows, cols <= 100`

	- `0 <= rCenter < rows`

	- `0 <= cCenter < cols`

---

**Links:** [Submissions](https://leetcode.com/problems/matrix-cells-in-distance-order/) | [Solutions](https://leetcode.com/problems/matrix-cells-in-distance-order/)
