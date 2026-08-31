# Recursive solution

**Author:** aansmirnov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/4595000/](https://leetcode.com/problems/maximum-binary-tree/solutions/4595000/)

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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (!nums.length) {
        return null;
    }

    const maxNumIndex = nums.indexOf(Math.max(...nums));
    const left = nums.slice(0, maxNumIndex);
    const right = nums.slice(maxNumIndex + 1);

    return {
        val: nums[maxNumIndex],
        left: constructMaximumBinaryTree(left),
        right: constructMaximumBinaryTree(right),
    };
};
```