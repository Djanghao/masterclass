# [827. Making A Large Island](https://leetcode.com/problems/making-a-large-island/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 4929 | 99 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `facebook`, `tiktok`, `microsoft`, `doordash`, `amazon`, `anduril`, `medianet`, `linkedin`, `google`, `uber`, `bloomberg`, `snapchat`, `snowflake`, `airbnb`

## Description

You are given an `n x n` binary matrix `grid`. You are allowed to change **at most one** `0` to be `1`.

Return *the size of the largest **island** in* `grid` *after applying this operation*.

An **island** is a 4-directionally connected group of `1`s.

 

**Example 1:**

```

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

```

**Example 2:**

```

Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
```

**Example 3:**

```

Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can&#39;t change any 0 to 1, only one island with area = 4.

```

 

**Constraints:**

	- `n == grid.length`

	- `n == grid[i].length`

	- `1 <= n <= 500`

	- `grid[i][j]` is either `0` or `1`.

---

**Links:** [Submissions](https://leetcode.com/problems/making-a-large-island/) | [Solutions](https://leetcode.com/problems/making-a-large-island/)
