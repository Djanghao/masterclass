# TypeScript Solution

**Author:** wattyyy
**Votes:** 5
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/1516409/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/1516409/)

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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let ans = 0
    function dfs(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        let left = dfs(node.left);
        let right = dfs(node.right);
        ans = Math.max(ans, left + right);

        return Math.max(left, right) + 1;
    }
    dfs(root);
    return ans;
};
```