# [3464. Maximize the Distance Between Points on a Square](https://leetcode.com/problems/maximize-the-distance-between-points-on-a-square/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 40 | 8 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`greedy`](https://leetcode.com/tag/greedy)


## Description

You are given an integer `side`, representing the edge length of a square with corners at `(0, 0)`, `(0, side)`, `(side, 0)`, and `(side, side)` on a Cartesian plane.

You are also given a **positive** integer `k` and a 2D integer array `points`, where `points[i] = [x_i, y_i]` represents the coordinate of a point lying on the **boundary** of the square.

You need to select `k` elements among `points` such that the **minimum** Manhattan distance between any two points is **maximized**.

Return the **maximum** possible **minimum** Manhattan distance between the selected `k` points.

The Manhattan Distance between two cells `(x_i, y_i)` and `(x_j, y_j)` is `|x_i - x_j| + |y_i - y_j|`.

 

**Example 1:**

**Input:** side = 2, points = [[0,2],[2,0],[2,2],[0,0]], k = 4

**Output:** 2

**Explanation:**

![image](./images/0.png)

Select all four points.

**Example 2:**

**Input:** side = 2, points = [[0,0],[1,2],[2,0],[2,2],[2,1]], k = 4

**Output:** 1

**Explanation:**

![image](./images/1.png)

Select the points `(0, 0)`, `(2, 0)`, `(2, 2)`, and `(2, 1)`.

**Example 3:**

**Input:** side = 2, points = [[0,0],[0,1],[0,2],[1,2],[2,0],[2,2],[2,1]], k = 5

**Output:** 1

**Explanation:**

![image](./images/2.png)

Select the points `(0, 0)`, `(0, 1)`, `(0, 2)`, `(1, 2)`, and `(2, 2)`.

 

**Constraints:**

	- `1 `points[i]` lies on the boundary of the square.

		- All `points[i]` are **unique**.

	
	
	- `4 <= k <= min(25, points.length)`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-the-distance-between-points-on-a-square/) | [Solutions](https://leetcode.com/problems/maximize-the-distance-between-points-on-a-square/)
