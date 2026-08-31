# Scala solution

**Author:** mjgallag
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-sum/solutions/2657648/](https://leetcode.com/problems/path-sum/solutions/2657648/)

---

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
    def hasPathSum(root: TreeNode, targetSum: Int): Boolean = {
        if (root == null) return false
        if (root.left == null && root.right == null && root.value == targetSum) return true
        hasPathSum(root.left, targetSum - root.value) || hasPathSum(root.right, targetSum - root.value)
    }
}
```