# Slightly optimized Scala solution

**Author:** SpaceAadvarkNine
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/2278645/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/2278645/)

---

Here's a slightly trickier recursive solution that tries to use the currently known global minimum and current recursion depth to avoid diving into subtrees that are too deep to affect the result.

```scala
object Solution {
  def minDepth(root: TreeNode): Int = {
    if (root == null){
      0
    } else {
      minDepthFor(root, Int.MaxValue, 1) 
    }
  }
  
  private def minDepthFor(root: TreeNode, minimum: Int, currentLevel: Int) : Int = {
    if (currentLevel >= minimum){
      minimum
    } else {
      (root.left, root.right) match {
        case (null, null) => currentLevel
        case (null, r) => minDepthFor(r, minimum, currentLevel + 1)
        case (l, null) => minDepthFor(l, minimum, currentLevel + 1)
        case (l, r) =>
          val minFromLeft = minDepthFor(l, minimum, currentLevel + 1)
          minDepthFor(r, minFromLeft, currentLevel + 1)
      }
    }
  }
}
```