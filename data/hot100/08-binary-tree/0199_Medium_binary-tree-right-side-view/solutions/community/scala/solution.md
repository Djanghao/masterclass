# Scala

**Author:** fairgrieve
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/806474/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/806474/)

---

```
object Solution {
  def rightSideView(root: TreeNode): List[Int] = rightSideView(Option(root).toSeq)

  @scala.annotation.tailrec
  private def rightSideView(nodes: Seq[TreeNode], view: List[Int] = List()): List[Int] = {
    if (nodes.isEmpty) {
      view
    } else {
      rightSideView(nodes.flatMap(node => Seq(Option(node.left), Option(node.right)).flatten), view :+ nodes.last.value)
    }
  }
}
```