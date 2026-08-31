# One line Scala solution

**Author:** fpebbles
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/2843189/](https://leetcode.com/problems/validate-binary-search-tree/solutions/2843189/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

used max and min of Long type for edge cases where node value is max or min of Integer type

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def isValidBST(root: TreeNode, min: Long = Long.MaxValue, max: Long = Long.MinValue): Boolean = { 
        root==null || 
        (root.value.toLong < min && isValidBST(root.left, root.value.toLong, max)) &&
        (root.value.toLong > max && isValidBST(root.right, min, root.value.toLong))
    }
}
```