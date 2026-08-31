# Scala functional BFS with tail recursion

**Author:** zzz1322
**Votes:** 8
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/33472/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/33472/)

---

```
object Solution {
    def levelOrder(root: TreeNode): List[List[Int]] = {
        def go(queue: List[TreeNode], rst: List[List[Int]]): List[List[Int]] = {
            if(queue.isEmpty) rst
            else {
                val next = queue.flatMap(node => List(node.left, node.right).filter(_ != null))
                go(next, rst :+ queue.map(_.value))
            }
        }
        go(if(root == null) List() else List(root), List())
    }
}
```