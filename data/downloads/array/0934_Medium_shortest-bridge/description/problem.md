# [934. Shortest Bridge](https://leetcode.com/problems/shortest-bridge/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5718 | 220 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `facebook`, `uber`, `bytedance`, `amazon`, `tiktok`, `google`, `coupang`, `flipkart`, `microsoft`, `apple`, `docusign`, `mckinsey`

## Description

You are given an `n x n` binary matrix `grid` where `1` represents land and `0` represents water.

An **island** is a 4-directionally connected group of `1`'s not connected to any other `1`'s. There are **exactly two islands** in `grid`.

You may change `0`'s to `1`'s to connect the two islands to form **one island**.

Return *the smallest number of *`0`*'s you must flip to connect the two islands*.

 

**Example 1:**

```

Input: grid = [[0,1],[1,0]]
Output: 1

```

**Example 2:**

```

Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2

```

**Example 3:**

```

Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1

```

 

**Constraints:**

	- `n == grid.length == grid[i].length`

	- `2 <= n <= 100`

	- `grid[i][j]` is either `0` or `1`.

	- There are exactly two islands in `grid`.

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-bridge/) | [Solutions](https://leetcode.com/problems/shortest-bridge/)
