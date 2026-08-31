# Easiest Inorder TypeScript solution

**Author:** ahanprojects
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/4836618/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/4836618/)

---

# Intuition & Approach
Create 3 variables, `idx` for the current index, `stop` to stop the recursion, and `result` to store the value. Do inorder traversal until `idx == k`

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
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

function kthSmallest(root: TreeNode | null, k: number): number {
    let idx = 1
    let stop = false
    let result = null

    function inorder(root: TreeNode | null) {
        if (!root || stop) return

        inorder(root.left)
        if (idx === k) {
            result = root.val
            stop = true
        }
        idx++
        inorder(root.right)
    }

    inorder(root)

    return result
};

```