# [1572. Matrix Diagonal Sum](https://leetcode.com/problems/matrix-diagonal-sum/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 3740 | 64 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `yandex`, `amazon`, `google`

## Description

Given a square matrix `mat`, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

 

**Example 1:**

![image](./images/0.png)
```

Input: mat = [[1,2,3],
&nbsp;             [4,5,6],
&nbsp;             [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

```

**Example 2:**

```

Input: mat = [[1,1,1,1],
&nbsp;             [1,1,1,1],
&nbsp;             [1,1,1,1],
&nbsp;             [1,1,1,1]]
Output: 8

```

**Example 3:**

```

Input: mat = [[5]]
Output: 5

```

 

**Constraints:**

	- `n == mat.length == mat[i].length`

	- `1 <= n <= 100`

	- `1 <= mat[i][j] <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/matrix-diagonal-sum/) | [Solutions](https://leetcode.com/problems/matrix-diagonal-sum/)
