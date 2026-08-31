# Scala FP: short BFS tailrec (710ms@2.13)

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4793852/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4793852/)

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
  @annotation.tailrec
  def findBottomLeftValue(root: TreeNode)(implicit roots: List[TreeNode] = List(root)): Int = {
    val nextLevel = roots.flatMap(r => List(Option(r.left), Option(r.right)).flatten)
    if (nextLevel.isEmpty) roots.head.value
    else findBottomLeftValue(null)(nextLevel)
  }
}
```