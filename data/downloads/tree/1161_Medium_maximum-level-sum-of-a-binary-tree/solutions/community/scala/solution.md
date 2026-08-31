# Scala

**Author:** fairgrieve
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/1987696/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/1987696/)

---

```
import scala.util.chaining.scalaUtilChainingOps

object Solution {
  def maxLevelSum(root: TreeNode): Int = Iterator
    .unfold(Iterable(root)) {
      Some(_).collect {
        case nodes if nodes.nonEmpty =>
          (nodes.iterator.map(_.value).sum, nodes.flatMap(node => Iterator(node.left, node.right).filter(_ != null)))
      }
    }
    .zipWithIndex
    .maxBy { case (sum, depth) => (sum, -depth) }
    .pipe(_._2 + 1)
}
```