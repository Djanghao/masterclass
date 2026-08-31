# scala dfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/5441535/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/5441535/)

---

```scala
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
  import scala.util.chaining._
  def trimBST(root: TreeNode, low: Int, high: Int): TreeNode =
    def validRoot(node: TreeNode): TreeNode =
      if(node == null) null
      else if(node.value < low) validRoot(node.right)
      else if(node.value > high) validRoot(node.left)
      else node
    def fixLeft(node: TreeNode): Unit =
      if(node.left != null && node.left.value<low) {
        node.left = node.left.right
        fixLeft(node)
      }
    def fixRight(node: TreeNode): Unit =
      if(node.right != null && node.right.value>high) {
        node.right = node.right.left
        fixRight(node)
      }
    def dfs(node: TreeNode): Unit =
      if(node != null) {
        fixLeft(node)
        dfs(node.left)
        fixRight(node)
        dfs(node.right)
      }
    validRoot(root).tap(dfs)
}
```