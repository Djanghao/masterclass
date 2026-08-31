# Scala: 1 line recursion

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/5690583/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/5690583/)

---

# Code
```scala []
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
  def postorderTraversal(root: TreeNode): List[Int] = 
    if (root == null) Nil else postorderTraversal(root.left) ++ postorderTraversal(root.right) :+ root.value
}
```