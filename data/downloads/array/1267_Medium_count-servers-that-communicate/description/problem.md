# [1267. Count Servers that Communicate](https://leetcode.com/problems/count-servers-that-communicate/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1905 | 108 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`matrix`](https://leetcode.com/tag/matrix), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `microsoft`, `amazon`, `google`, `oracle`, `bloomberg`

## Description

You are given a map of a server center, represented as a `m * n` integer matrix `grid`, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.

 

**Example 1:**

![image](./images/0.jpg)

```

Input: grid = [[1,0],[0,1]]
Output: 0
Explanation:&nbsp;No servers can communicate with others.
```

**Example 2:**

**![image](./images/1.jpg)**

```

Input: grid = [[1,0],[1,1]]
Output: 3
Explanation:&nbsp;All three servers can communicate with at least one other server.

```

**Example 3:**

![image](./images/2.jpg)

```

Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
Output: 4
Explanation:&nbsp;The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at right bottom corner can&#39;t communicate with any other server.

```

 

**Constraints:**

	- `m == grid.length`

	- `n == grid[i].length`

	- `1 <= m <= 250`

	- `1 <= n <= 250`

	- `grid[i][j] == 0 or 1`

---

**Links:** [Submissions](https://leetcode.com/problems/count-servers-that-communicate/) | [Solutions](https://leetcode.com/problems/count-servers-that-communicate/)
