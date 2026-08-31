# [685. Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2496 | 328 |

**Tags:** [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`graph`](https://leetcode.com/tag/graph)

**Companies:** `google`, `facebook`

## Description

In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.

The given input is a directed graph that started as a rooted tree with `n` nodes (with distinct values from `1` to `n`), with one additional directed edge added. The added edge has two different vertices chosen from `1` to `n`, and was not an edge that already existed.

The resulting graph is given as a 2D-array of `edges`. Each element of `edges` is a pair `[u_i, v_i]` that represents a directed edge connecting nodes `u_i` and `v_i`, where `u_i` is a parent of child `v_i`.

Return *an edge that can be removed so that the resulting graph is a rooted tree of* `n` *nodes*. If there are multiple answers, return the answer that occurs last in the given 2D-array.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

```

**Example 2:**

![image](./images/1.jpg)
```

Input: edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]
Output: [4,1]

```

 

**Constraints:**

	- `n == edges.length`

	- `3 <= n <= 1000`

	- `edges[i].length == 2`

	- `1 <= u_i, v_i <= n`

	- `u_i != v_i`

---

**Links:** [Submissions](https://leetcode.com/problems/redundant-connection-ii/) | [Solutions](https://leetcode.com/problems/redundant-connection-ii/)
