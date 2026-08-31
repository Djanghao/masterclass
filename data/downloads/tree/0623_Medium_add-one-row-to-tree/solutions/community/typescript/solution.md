# Beats 100.00% of users with TypeScript

**Author:** ajaysinghpanwar2002
**Votes:** 3
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/4389133/](https://leetcode.com/problems/add-one-row-to-tree/solutions/4389133/)

---

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

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if (depth === 1) {
        let node = new TreeNode(val, root, null);
        return node;
    }
    if (root === null) return null;
    if (depth === 2) {
        root.left = new TreeNode(val, root.left, null);
        root.right = new TreeNode(val, null, root.right);
    } else {
        root.left = addOneRow(root.left, val, depth - 1);
        root.right = addOneRow(root.right, val, depth - 1);
    }
    return root;
};
```