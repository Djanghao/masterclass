# Scala | Functional | No mutation | DFS | 100% Faster

**Author:** soumensaha
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-cameras/solutions/2163413/](https://leetcode.com/problems/binary-tree-cameras/solutions/2163413/)

---

Fuctional Scala version of https://leetcode.com/problems/binary-tree-cameras/discuss/2160360/Visual-Explanation-or-JAVA-Greedy

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
  def minCameraCover(root: TreeNode): Int = {
    object NodeState extends Enumeration {
      val HasCamera, Monitored, NotMonitored = Value
    }
    import NodeState._
    def dfs(node: TreeNode = root): (NodeState.Value, Int) =
      if (node == null) Monitored -> 0
      else dfs(node.left) -> dfs(node.right) match {
        case ((leftState, leftCount), (rightState, rightCount)) if leftState == NotMonitored || rightState == NotMonitored => HasCamera -> (leftCount + rightCount + 1)
        case ((leftState, leftCount), (rightState, rightCount)) if leftState == HasCamera || rightState == HasCamera => Monitored -> (leftCount + rightCount)
        case ((_, leftCount), (_, rightCount)) => NotMonitored -> (leftCount + rightCount)
      }

    dfs() match {
      case (NotMonitored, count) => count + 1
      case (_, count) => count
    }
  }
}
//Runtime: 833 ms, faster than 100.00% of Scala online submissions for Binary Tree Cameras.
//Memory Usage: 71 MB, less than 100.00% of Scala online submissions for Binary Tree Cameras.
```