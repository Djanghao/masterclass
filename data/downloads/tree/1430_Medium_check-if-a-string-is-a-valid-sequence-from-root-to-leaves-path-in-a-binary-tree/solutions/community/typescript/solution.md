# DFS solution O(n)

**Author:** panevskii
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/3367440/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/3367440/)

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

function isValidSequence(root: TreeNode | null, arr: number[]): boolean {

    const dfs = (node: TreeNode | null, index: number): boolean => {
        if (!node) {
            return !arr.length;
        }

        if (node.val !== arr[index]) {
            return false;
        }

        if (index === arr.length - 1) {
            return !node.left && !node.right;
        }

        return dfs(node.left, index + 1) || dfs(node.right, index + 1);
    }

    return dfs(root, 0);
};
```