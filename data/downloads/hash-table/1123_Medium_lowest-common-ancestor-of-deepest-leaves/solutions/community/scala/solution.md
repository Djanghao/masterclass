# Scala beats 100%

**Author:** eugene-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/3480404/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/3480404/)

---

```
object Solution {
  def lcaDeepestLeaves(root: TreeNode): TreeNode = {
    
    // the max depth and the lcaDeepestLeaves of the given node
    def maxDepthAndLca(node: TreeNode): (Int, TreeNode) = node match {

      case null => (0, null)

      case node =>
        val (leftMaxDepth, leftLca) = maxDepthAndLca(node.left)
        val (rightMaxDepth, rightLca) = maxDepthAndLca(node.right)

        if (leftMaxDepth > rightMaxDepth) (leftMaxDepth + 1, leftLca)
        else if (leftMaxDepth < rightMaxDepth) (rightMaxDepth + 1, rightLca)
        else (leftMaxDepth + 1, node)

    }

    maxDepthAndLca(root)._2
  }
}
```