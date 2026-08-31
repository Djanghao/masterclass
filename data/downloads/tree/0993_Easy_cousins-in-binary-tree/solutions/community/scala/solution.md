# ✅ Scala: BFS solutions with parent tracking

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/3432724/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/3432724/)

---

# Complexity
- Time complexity: $$O(n + log(n))$$ (tree traversal + find $x$ and$y$ on each level) 
- Space complexity: $$O(log(n))$$ (BFS queue)

# Code
```scala
object Solution {
  import scala.collection.mutable

  def isCousins(root: TreeNode, x: Int, y: Int): Boolean = {
    val queue = new mutable.Queue[(TreeNode, TreeNode)]() // (Parent, Child)

    def enqueue(node: TreeNode): Unit = {
      if (node.left != null) queue.enqueue((node, node.left))
      if (node.right != null) queue.enqueue((node, node.right))
    }

    enqueue(root)

    while (queue.nonEmpty) {
      val siblings = queue.removeAll()

      siblings
        .filter { case (_, node) => node.value == x || node.value == y }
        .toList match {
        case (p1, _) :: (p2, _) :: Nil if !p1.eq(p2) => return true
        case _                                       =>
      }
      
      for ((_, node) <- siblings) enqueue(node)

    }
    false
  }
}
```