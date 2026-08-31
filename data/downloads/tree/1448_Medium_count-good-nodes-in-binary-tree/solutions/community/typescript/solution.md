# DFS

**Author:** haque_jibon
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/5866076/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/5866076/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
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

function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    return helper(root, -Infinity);
}

const helper = (node: TreeNode | null, prevMax: number) => {
    if (!node) return 0;

    let ans = node.val >= prevMax ? 1 : 0;

    ans += helper(node.left, Math.max(prevMax, node.val))
    ans += helper(node.right, Math.max(prevMax, node.val))

    return ans
};
```