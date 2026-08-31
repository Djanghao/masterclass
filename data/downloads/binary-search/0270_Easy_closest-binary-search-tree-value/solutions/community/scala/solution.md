# Functional solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/4842578/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/4842578/)

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
  def closestValue(root: TreeNode, target: Double): Int = {
    def dfs(node: TreeNode): (Double, Int) = {
      if(node == null) return (Double.MaxValue, Int.MaxValue)
      Array(
        dfs(node.left),
        dfs(node.right),
        ((node.value - target).abs, node.value)
      ).min
    }
    val (_, nodeVal) = dfs(root)
    nodeVal
  }
}
```