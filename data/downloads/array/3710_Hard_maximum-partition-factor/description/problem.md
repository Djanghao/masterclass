# [3710. Maximum Partition Factor](https://leetcode.com/problems/maximum-partition-factor/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 69 | 6 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`graph`](https://leetcode.com/tag/graph)

**Companies:** `gameskraft`

## Description

You are given a 2D integer array `points`, where `points[i] = [x_i, y_i]` represents the coordinates of the `i^th` point on the Cartesian plane.

The **Manhattan distance** between two points `points[i] = [x_i, y_i]` and `points[j] = [x_j, y_j]` is `|x_i - x_j| + |y_i - y_j|`.

Split the `n` points into **exactly two non-empty** groups. The **partition factor** of a split is the **minimum** Manhattan distance among all unordered pairs of points that lie in the same group.

Return the **maximum** possible **partition factor** over all valid splits.

Note: A group of size 1 contributes no intra-group pairs. When `n = 2` (both groups size 1), there are no intra-group pairs, so define the partition factor as 0.

 

**Example 1:**

**Input:** points = [[0,0],[0,2],[2,0],[2,2]]

**Output:** 4

**Explanation:**

We split the points into two groups: `{[0, 0], [2, 2]}` and `{[0, 2], [2, 0]}`.

	- 
	
In the first group, the only pair has Manhattan distance `|0 - 2| + |0 - 2| = 4`.

	

	- 
	
In the second group, the only pair also has Manhattan distance `|0 - 2| + |2 - 0| = 4`.

	

The partition factor of this split is `min(4, 4) = 4`, which is maximal.

**Example 2:**

**Input:** points = [[0,0],[0,1],[10,0]]

**Output:** 11

**Explanation:​​​​​​​**

We split the points into two groups: `{[0, 1], [10, 0]}` and `{[0, 0]}`.

	- 
	
In the first group, the only pair has Manhattan distance `|0 - 10| + |1 - 0| = 11`.

	

	- 
	
The second group is a singleton, so it contributes no pairs.

	

The partition factor of this split is `11`, which is maximal.

 

**Constraints:**

	- `2 <= points.length <= 500`

	- `points[i] = [x_i, y_i]`

	- `-10^8 <= x_i, y_i <= 10^8`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-partition-factor/) | [Solutions](https://leetcode.com/problems/maximum-partition-factor/)
