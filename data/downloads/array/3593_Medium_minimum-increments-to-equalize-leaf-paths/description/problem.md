# [3593. Minimum Increments to Equalize Leaf Paths](https://leetcode.com/problems/minimum-increments-to-equalize-leaf-paths/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 132 | 10 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search)

**Companies:** `google`

## Description

You are given an integer `n` and an undirected tree rooted at node 0 with `n` nodes numbered from 0 to `n - 1`. This is represented by a 2D array `edges` of length `n - 1`, where `edges[i] = [u_i, v_i]` indicates an edge from node `u_i` to `v_i` .

Each node `i` has an associated cost given by `cost[i]`, representing the cost to traverse that node.

The **score** of a path is defined as the sum of the costs of all nodes along the path.

Your goal is to make the scores of all **root-to-leaf** paths **equal** by **increasing** the cost of any number of nodes by **any non-negative** amount.

Return the **minimum** number of nodes whose cost must be increased to make all root-to-leaf path scores equal.

 

**Example 1:**

**Input:** n = 3, edges = [[0,1],[0,2]], cost = [2,1,3]

**Output:** 1

**Explanation:**

![image](./images/0.png)

There are two root-to-leaf paths:

	- Path `0 &rarr; 1` has a score of `2 + 1 = 3`.

	- Path `0 &rarr; 2` has a score of `2 + 3 = 5`.

To make all root-to-leaf path scores equal to 5, increase the cost of node 1 by 2.

Only one node is increased, so the output is 1.

**Example 2:**

**Input:** n = 3, edges = [[0,1],[1,2]], cost = [5,1,4]

**Output:** 0

**Explanation:**

![image](./images/1.png)

There is only one root-to-leaf path:

	- 
	
Path `0 &rarr; 1 &rarr; 2` has a score of `5 + 1 + 4 = 10`.

	

Since only one root-to-leaf path exists, all path costs are trivially equal, and the output is 0.

**Example 3:**

**Input:** n = 5, edges = [[0,4],[0,1],[1,2],[1,3]], cost = [3,4,1,1,7]

**Output:** 1

**Explanation:**

![image](./images/2.png)

There are three root-to-leaf paths:

	- Path `0 &rarr; 4` has a score of `3 + 7 = 10`.

	- Path `0 &rarr; 1 &rarr; 2` has a score of `3 + 4 + 1 = 8`.

	- Path `0 &rarr; 1 &rarr; 3` has a score of `3 + 4 + 1 = 8`.

To make all root-to-leaf path scores equal to 10, increase the cost of node 1 by 2. Thus, the output is 1.

 

**Constraints:**

	- `2 <= n <= 10^5`

	- `edges.length == n - 1`

	- `edges[i] == [u_i, v_i]`

	- `0 <= u_i, v_i < n`

	- `cost.length == n`

	- `1 <= cost[i] <= 10^9`

	- The input is generated such that `edges` represents a valid tree.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-increments-to-equalize-leaf-paths/) | [Solutions](https://leetcode.com/problems/minimum-increments-to-equalize-leaf-paths/)
