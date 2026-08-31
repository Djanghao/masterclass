# Scala FP: simple & short recursion (650ms)

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5036454/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5036454/)

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
  def smallestFromLeaf(root: TreeNode, prevMin: String = ""): String = {
    val nextMin = (root.value + 'a').toChar +: prevMin
    (root.left, root.right) match {
      case (null, null) => nextMin
      case (left, null) => smallestFromLeaf(left, nextMin)
      case (null, right) => smallestFromLeaf(right, nextMin)
      case (left, right) => Ordering.String.min(smallestFromLeaf(left, nextMin), smallestFromLeaf(right, nextMin))
    }
  }
}
```