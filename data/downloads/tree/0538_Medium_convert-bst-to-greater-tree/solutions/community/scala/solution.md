# scala dfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/4529515/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/4529515/)

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
  import scala.util.chaining._
  import scala.language.implicitConversions
  def convertBST(root: TreeNode): TreeNode = {
    def values(node: TreeNode, acc: Set[Int]): Set[Int] =
      if(node == null) acc
      else values(node.right, values(node.left,acc)) + node.value
    lazy val sorted = values(root,Set()).toList.sorted
    lazy val map = sorted.tail.foldLeft(List((sorted.head,sorted.sum - sorted.head))) { case (l,n) =>
      (n, l.head._2 - n) +: l
    }.to(Map)
    def traverse(node: TreeNode): Unit = if(node != null) {
      node.value += map(node.value)
      traverse(node.left)
      traverse(node.right)
    }
    root.tap(traverse)
  }
}

```