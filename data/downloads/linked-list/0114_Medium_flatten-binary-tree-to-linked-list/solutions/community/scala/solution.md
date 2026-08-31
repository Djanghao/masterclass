# Scala FP: 1 recursive if

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/4484506/](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/4484506/)

---

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
  def flatten(root: TreeNode): TreeNode =
    if (root == null) 
      null
    else if (root.left != null) {
      flatten(root.left).right = root.right
      root.right = root.left
      root.left = null
      flatten(root.right)
    } else if (root.right != null)
      flatten(root.right)
    else 
      root
}
```