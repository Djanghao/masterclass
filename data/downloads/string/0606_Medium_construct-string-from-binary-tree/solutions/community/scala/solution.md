# Scala: beats 100% using StringBuilder

**Author:** user6828v
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4385615/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4385615/)

---

# Approach
Use StringBuilder with zero concatenation. Just use only one instance of StringBuilder to minimum time and space.


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
  def tree2str(root: TreeNode): String = {
    val sb = new StringBuilder;
    transform(root, sb)
    sb.toString
  }

  private def transform(root: TreeNode, sb: StringBuilder): Unit = {
    sb.append(root.value)

    if (root.left != null) {
      sb += '('
      transform(root.left, sb)
      sb += ')'
    } else if (root.right != null) {
      sb += '('
      sb += ')'
    }

    if (root.right != null) {
      sb += '('
      transform(root.right, sb)
      sb += ')'
    }
  }
}
```