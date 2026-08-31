# Simplest solution in JavaScript with DFS

**Author:** rkmamashev
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2094844/](https://leetcode.com/problems/binary-tree-pruning/solutions/2094844/)

---

Runtime: 64 ms, faster than 95.65% of TypeScript online submissions for Binary Tree Pruning.
Memory Usage: 45.3 MB, less than 21.74% of TypeScript online submissions for Binary Tree Pruning.

```ts
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

function pruneTree(root: TreeNode | null): TreeNode | null {
    function dfs(node: TreeNode | null): TreeNode | null {
        if (!node) return null;
        
        const leftRes = dfs(node.left);
        const rightRes = dfs(node.right);
        
        if (!leftRes && !rightRes && !node.val) return null;
        
        node.left = leftRes;
        node.right = rightRes;
        
        return node;
    }
    
    return dfs(root);
};
```