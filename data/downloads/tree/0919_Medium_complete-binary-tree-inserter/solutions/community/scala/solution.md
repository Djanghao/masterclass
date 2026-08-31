# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/2104519/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/2104519/)

---

```
 
import scala.collection.mutable.Queue

implicit class RichTreeNode(node: TreeNode) {
    def maxLevel(qs: Queue[TreeNode]):Queue[TreeNode] = qs.head.right != null match {
      case true => maxLevel((qs :+ qs.head.left :+ qs.head.right).drop(1))
      case _ => qs
    }
  }

  val maxLists = _root.maxLevel(Queue(_root))
  def insert(`val`: Int): Int = {
    val p = maxLists.head
    p match{
      case p if p.left == null => p.left = new TreeNode(`val`)
      case p => {
        p.right = new TreeNode(`val`)
        maxLists.enqueue(p.left)
        maxLists.enqueue(p.right)
        maxLists.dequeue
      }
    }
    p.value
  }

  def get_root(): TreeNode = {
    _root
  }

```