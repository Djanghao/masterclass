# [1483. Kth Ancestor of a Tree Node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2060 | 122 |

**Tags:** [`binary-search`](https://leetcode.com/tag/binary-search), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`design`](https://leetcode.com/tag/design)

**Companies:** `google`, `amazon`

## Description

You are given a tree with `n` nodes numbered from `0` to `n - 1` in the form of a parent array `parent` where `parent[i]` is the parent of `i^th` node. The root of the tree is node `0`. Find the `k^th` ancestor of a given node.

The `k^th` ancestor of a tree node is the `k^th` node in the path from that node to the root node.

Implement the `TreeAncestor` class:

	- `TreeAncestor(int n, int[] parent)` Initializes the object with the number of nodes in the tree and the parent array.

	- `int getKthAncestor(int node, int k)` return the `k^th` ancestor of the given node `node`. If there is no such ancestor, return `-1`.

 

**Example 1:**

![image](./images/0.png)
```

Input
[&quot;TreeAncestor&quot;, &quot;getKthAncestor&quot;, &quot;getKthAncestor&quot;, &quot;getKthAncestor&quot;]
[[7, [-1, 0, 0, 1, 1, 2, 2]], [3, 1], [5, 2], [6, 3]]
Output
[null, 1, 0, -1]

Explanation
TreeAncestor treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
treeAncestor.getKthAncestor(3, 1); // returns 1 which is the parent of 3
treeAncestor.getKthAncestor(5, 2); // returns 0 which is the grandparent of 5
treeAncestor.getKthAncestor(6, 3); // returns -1 because there is no such ancestor
```

 

**Constraints:**

	- `1 <= k <= n <= 5 * 10^4`

	- `parent.length == n`

	- `parent[0] == -1`

	- `0 <= parent[i] < n` for all `0 < i < n`

	- `0 <= node < n`

	- There will be at most `5 * 10^4` queries.

---

**Links:** [Submissions](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/) | [Solutions](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/)
