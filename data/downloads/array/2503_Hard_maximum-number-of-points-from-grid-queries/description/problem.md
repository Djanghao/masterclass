# [2503. Maximum Number of Points From Grid Queries](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1091 | 50 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `facebook`, `jpmorgan`

## Description

You are given an `m x n` integer matrix `grid` and an array `queries` of size `k`.

Find an array `answer` of size `k` such that for each integer `queries[i]` you start in the **top left** cell of the matrix and repeat the following process:

	- If `queries[i]` is **strictly** greater than the value of the current cell that you are in, then you get one point if it is your first time visiting this cell, and you can move to any **adjacent** cell in all `4` directions: up, down, left, and right.

	- Otherwise, you do not get any points, and you end this process.

After the process, `answer[i]` is the **maximum** number of points you can get. **Note** that for each query you are allowed to visit the same cell **multiple** times.

Return *the resulting array* `answer`.

 

**Example 1:**

![image](./images/0.png)
```

Input: grid = [[1,2,3],[2,5,7],[3,5,1]], queries = [5,6,2]
Output: [5,8,1]
Explanation: The diagrams above show which cells we visit to get points for each query.
```

**Example 2:**

![image](./images/1.png)
```

Input: grid = [[5,2,1],[1,1,2]], queries = [3]
Output: [0]
Explanation: We can not get any points because the value of the top left cell is already greater than or equal to 3.

```

 

**Constraints:**

	- `m == grid.length`

	- `n == grid[i].length`

	- `2 <= m, n <= 1000`

	- `4 <= m * n <= 10^5`

	- `k == queries.length`

	- `1 <= k <= 10^4`

	- `1 <= grid[i][j], queries[i] <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/) | [Solutions](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/)
