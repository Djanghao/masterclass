# [694. Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2324 | 151 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `tiktok`, `snapchat`, `amazon`, `oracle`, `google`, `walmart-labs`, `coupang`, `anduril`, `facebook`, `microsoft`, `splunk`, `bloomberg`

## Description

You are given an `m x n` binary matrix `grid`. An island is a group of `1`'s (representing land) connected **4-directionally** (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Return *the number of distinct islands*.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
Output: 1

```

**Example 2:**

![image](./images/1.jpg)
```

Input: grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]
Output: 3

```

 

**Constraints:**

	- `m == grid.length`

	- `n == grid[i].length`

	- `1 <= m, n <= 50`

	- `grid[i][j]` is either `0` or `1`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-distinct-islands/) | [Solutions](https://leetcode.com/problems/number-of-distinct-islands/)
