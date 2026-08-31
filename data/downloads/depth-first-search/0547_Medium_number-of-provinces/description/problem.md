# [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 10903 | 412 |

**Tags:** [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`graph`](https://leetcode.com/tag/graph)

**Companies:** `amazon`, `microsoft`, `facebook`, `google`, `bloomberg`, `uber`, `adobe`, `salesforce`, `doordash`, `tcs`, `two-sigma`

## Description

There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `i^th` city and the `j^th` city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return *the total number of **provinces***.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

```

**Example 2:**

![image](./images/1.jpg)
```

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3

```

 

**Constraints:**

	- `1 <= n <= 200`

	- `n == isConnected.length`

	- `n == isConnected[i].length`

	- `isConnected[i][j]` is `1` or `0`.

	- `isConnected[i][i] == 1`

	- `isConnected[i][j] == isConnected[j][i]`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-provinces/) | [Solutions](https://leetcode.com/problems/number-of-provinces/)
