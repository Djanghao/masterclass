# [361. Bomb Enemy](https://leetcode.com/problems/bomb-enemy/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1002 | 118 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `google`

## Description

Given an `m x n` matrix `grid` where each cell is either a wall `'W'`, an enemy `'E'` or empty `'0'`, return *the maximum enemies you can kill using one bomb*. You can only place the bomb in an empty cell.

The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since it is too strong to be destroyed.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: grid = [[&quot;0&quot;,&quot;E&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;E&quot;,&quot;0&quot;,&quot;W&quot;,&quot;E&quot;],[&quot;0&quot;,&quot;E&quot;,&quot;0&quot;,&quot;0&quot;]]
Output: 3

```

**Example 2:**

![image](./images/1.jpg)
```

Input: grid = [[&quot;W&quot;,&quot;W&quot;,&quot;W&quot;],[&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;E&quot;,&quot;E&quot;,&quot;E&quot;]]
Output: 1

```

 

**Constraints:**

	- `m == grid.length`

	- `n == grid[i].length`

	- `1 <= m, n <= 500`

	- `grid[i][j]` is either `'W'`, `'E'`, or `'0'`.

---

**Links:** [Submissions](https://leetcode.com/problems/bomb-enemy/) | [Solutions](https://leetcode.com/problems/bomb-enemy/)
