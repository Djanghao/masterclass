# Balance a Binary Search Tree

**Author:** samuvelAnbudavid
**Votes:** 1
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5373789/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5373789/)

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

function balanceBST(root: TreeNode | null): TreeNode | null {
    
     // Get the node values in sorted order
    const sortedValues = inorderTraversal(root);
    // Convert the sorted values to a balanced BST
    return sortedArrayToBST(sortedValues);
};

// Helper function to perform in-order traversal of a binary tree.
function inorderTraversal(root, result = []) {
    if (root) {
        inorderTraversal(root.left, result);
        result.push(root.val);
        inorderTraversal(root.right, result);
    }
    return result;
}

// Helper function to convert sorted array to a balanced BST.
function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null;
    }
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
}
```