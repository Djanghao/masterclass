# Simple Scala Tail Recursive

**Author:** squadgazzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/1071592/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/1071592/)

---

```  
def levelOrder(root: Node): List[List[Int]] = {
    @annotation.tailrec
    def go(level: List[Node], acc: List[List[Int]]): List[List[Int]] = {
      if (level.isEmpty) acc
      else {
        val nextLevel = level.flatMap(_.children)
        go(nextLevel, acc :+ level.map(_.value))
      }
    }

    if (root == null) Nil
    else go(List(root), Nil)
  }
  ```