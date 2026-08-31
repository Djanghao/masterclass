# [2352. Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2461 | 186 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`matrix`](https://leetcode.com/tag/matrix), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `microsoft`, `google`, `de-shaw`

## Description

Given a **0-indexed** `n x n` integer matrix `grid`, *return the number of pairs *`(r_i, c_j)`* such that row *`r_i`* and column *`c_j`* are equal*.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

 

**Example 1:**

![image](./images/0.jpg)
```

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

```

**Example 2:**

![image](./images/1.jpg)
```

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]

```

 

**Constraints:**

	- `n == grid.length == grid[i].length`

	- `1 <= n <= 200`

	- `1 <= grid[i][j] <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/equal-row-and-column-pairs/) | [Solutions](https://leetcode.com/problems/equal-row-and-column-pairs/)
