# Simple Solution with Post Order Traversal (Beats 100%)

**Author:** aditya4pavan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/6018112/](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/6018112/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Keep track of min, max and sum for each node
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
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

function maxSumBST(root: TreeNode | null): number {
    const item = { max: 0 };
    helper(root, item);
    return item.max;
};

const helper = (root: TreeNode | null, item: any): { max: number, sum: number, min: number } | null => {
    if (root.left === root.right){
        item.max = Math.max(item.max, root.val);
        return { max: root.val, sum: root.val, min: root.val };
    } 
    const left = root.left ? helper(root.left, item) : { max: root.val, sum: 0, min: root.val };
    const right = root.right ? helper(root.right, item) : { max: root.val, sum: 0, min: root.val };
    if (!left || (root.left && (left.max >= root.val || left.min >= root.val))) return null;
    if (!right || (root.right && (right.max <= root.val || right.min <= root.val))) return null;
    const total = { 
        max: (right ? right.max : root.val), 
        sum: root.val + (left?.sum || 0) + (right?.sum || 0),
        min: (left ? left.min : root.val)
    }
    item.max = Math.max(item.max, total.sum);
    return total;
}
```