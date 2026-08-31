# Simple DFS beats 100%

**Author:** user0122E
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/5568895/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/5568895/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
DFS

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun isValidSequence(root: TreeNode?, arr: IntArray): Boolean {
        return isValid(root, arr, 0)
    }

    private fun isValid(node: TreeNode?, arr: IntArray, index: Int) : Boolean {
        if(node == null) return false

        // pre order action
        if(index > arr.lastIndex || node.`val` != arr[index]) return false
        if(node.left == null && node.right == null) {
            return index == arr.lastIndex
        }

        // common nodes
        return isValid(node.left, arr, index + 1) || isValid(node.right, arr, index + 1)
    }
}   
```