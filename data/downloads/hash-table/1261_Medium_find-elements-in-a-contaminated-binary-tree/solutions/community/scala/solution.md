# Functional Scala Beats 100%

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/1948344/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/1948344/)

---

```
import scala.annotation.tailrec
import scala.math._

class FindElements(root: TreeNode) {
  /**
   * Reduces the problem to the equivalent one of finding target + 1 in a binary tree such that values of the nodes at
   * depth d are a subset of the integers in [2&#94;d, 2&#94;(d + 1)).
   */
  def find(target: Int): Boolean = target >= 0 && FindElements.findTarget(root, target + 1)
}

object FindElements {
  private val Log2 = log(2.0)
  
  private def calculateDepth(target: Int) = log2(target).toInt

  /**
   * @param target an integer no less than 1
   */
  @tailrec
  private def findTarget(root: TreeNode, target: Int): Boolean = (root, target) match {
    case (null, _) => false
	
    case (_, 1) => true
	
    case (root, target) => pow(2.0, calculateDepth(target)).toInt match {
      // finds the target in the left subtree
      case leftMost if (leftMost until 3 * leftMost / 2).contains(target) =>
        findTarget(root.left, leftMost / 2 + target % (leftMost / 2))

      // finds the target in the right subtree
      case leftMost => findTarget(root.right, leftMost / 2 + target % (leftMost / 2))
    }
  }

  private def log2(x: Double) = log(x) / Log2
}
```