# Javascript & Typescript simple 2-line recursive solution | Time: 97% faster | Memory: 5% less

**Author:** JinZihang
**Votes:** 14
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1743165/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1743165/)

---

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

function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};
```