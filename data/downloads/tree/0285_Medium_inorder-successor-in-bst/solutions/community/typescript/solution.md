# ⛳️ Easy solution in 5 lines with recursion

**Author:** AlexanderFSP
**Votes:** 0
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/4072622/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/4072622/)

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

function inorderSuccessor(root: TreeNode | null, p: TreeNode | null, inOrderSuccessor: TreeNode | null = null): TreeNode | null {
    if (!root)
        return inOrderSuccessor;

	if (p.val >= root.val)
        return inorderSuccessor(root.right, p, inOrderSuccessor);

    return inorderSuccessor(root.left, p, inOrderSuccessor?.val < root.val ? inOrderSuccessor : root); 
};
```