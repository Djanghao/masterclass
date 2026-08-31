# Scala | DFS + Sorting Solution | With comments | Easy to understand

**Author:** pasverm
**Votes:** 2
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2529514/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/2529514/)

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
  def verticalTraversal(root: TreeNode): List[List[Int]] = {
    
    // traverse the tree in a DFS and add all nodes as 3-tuple of
    // (column, row, node value) to a list buffer
    
    var buf = scala.collection.mutable.ListBuffer.empty[(Int, Int, Int)]

    def traverse(node: TreeNode, row: Int, col: Int): Unit = {
      if (node != null) {
        buf += ((col, row, node.value))
        traverse(node.left, row+1, col-1)
        traverse(node.right, row+1, col+1)
      }
    }

    traverse(root, 0, 0)

    buf
      .groupBy(_._1)            // group nodes by their column
      .toList                   // transform map to a list of (column, nodes in that column)
      .sortBy(_._1)             // sort columns in ascending order
      .map({ case (_, nodes) => // for each collection of nodes belonging to a column
        nodes
          .sorted               // sort nodes by 1st column -> 2nd row -> 3rd value
          .map(_._3)            // pick out the node value
          .toList               // transform list buffer to list
      })
  }
}
```