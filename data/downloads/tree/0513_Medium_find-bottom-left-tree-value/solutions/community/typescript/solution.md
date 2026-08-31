# Beat 100% User using DFS approach and Typescript

**Author:** vupro
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4795311/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4795311/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires finding the value of the leftmost node at the deepest level of a binary tree.
# Approach
<!-- Describe your approach to solving the problem. -->
To solve this problem, we can perform a depth-first search (DFS) traversal of the binary tree. During the traversal, we keep track of the maximum depth reached and update the leftmost value encountered at that depth. We start with an initial maximum depth of -1 and traverse the tree, updating the maximum depth and leftmost value whenever we encounter a node at a greater depth than the current maximum depth.
# Complexity
- Time complexity:O(n), where n is the number of nodes in the binary tree. We visit each node once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(h), where h is the height of the binary tree. This space is used for the call stack during the depth-first search traversal.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

let maxDepth: number;
let bottomLeftValue: number;

function findBottomLeftValue(root: TreeNode | null): number {
    maxDepth = -1;
    bottomLeftValue = 0;
    dfs(root, 0);
    return bottomLeftValue;
}

function dfs(current: TreeNode, depth: number) {
    if (current === null) {
        return;
    };
    if (depth > maxDepth) {
        maxDepth = depth;
        bottomLeftValue = current.val;
    }
    dfs(current.left, depth + 1);
    dfs(current.right, depth + 1);
}
```