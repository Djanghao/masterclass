# Scala

**Author:** fairgrieve
**Votes:** 3
**Link:** [https://leetcode.com/problems/even-odd-tree/solutions/2120199/](https://leetcode.com/problems/even-odd-tree/solutions/2120199/)

---

```
object Solution {
  def isEvenOddTree(root: TreeNode): Boolean = {
    Iterator
      .unfold(Option(root).to(Seq)) {
        case nodes if nodes.nonEmpty =>
          Some(nodes, nodes.flatMap(node => Iterator(node.left, node.right).filter(_ != null)))

        case _ => None
      }
      .zipWithIndex
      .forall {
        case (nodes, depth) =>
          def values = nodes.iterator.map(_.value)

          depth % 2 match {
            case 0 => values.forall(_ % 2 == 1) && values.zip(values.drop(1)).forall { case (x, y) => x < y }
            case _ => values.forall(_ % 2 == 0) && values.zip(values.drop(1)).forall { case (x, y) => x > y }
          }
      }
  }
}
```