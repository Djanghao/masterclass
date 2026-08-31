# Scala

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/2021264/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/2021264/)

---

```
object Solution {
  def averageOfSubtree(node: TreeNode): Int = f(Option(node)).count

  private def f(nodeOption: Option[TreeNode]): Result = nodeOption.fold(Result(0, 0, 0)) { node =>
    (f(Option(node.left)), f(Option(node.right))) match {
      case (Result(sum1, numNodes1, count1), Result(sum2, numNodes2, count2)) =>
        val sum = sum1 + sum2 + node.value
        val numNodes = numNodes1 + numNodes2 + 1
        Result(sum, numNodes, if (node.value == sum / numNodes) count1 + count2 + 1 else count1 + count2)
    }
  }

  private final case class Result(sum: Int, numNodes: Int, count: Int)
}
```