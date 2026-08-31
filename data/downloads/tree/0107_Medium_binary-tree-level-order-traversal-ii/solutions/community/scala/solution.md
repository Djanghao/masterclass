# Scala solution

**Author:** dustin10
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/378165/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/378165/)

---

```
  object Solution {
    import scala.collection.mutable
    def levelOrderBottom(root: TreeNode): List[List[Int]] = {
      val returnMap: mutable.Map[Int, List[Int]] = mutable.Map.empty
      def levelOrderBottom(depth: Int, root: TreeNode): Unit = {
        if (root != null) {
          returnMap(depth) = returnMap.getOrElse(depth, List.empty) :+ root.value
          levelOrderBottom(depth + 1, root.left)
          levelOrderBottom(depth + 1, root.right)
        }
      }

      levelOrderBottom(0, root)
      returnMap
        .toList
        .sortBy(_._1)
        .map(_._2)
        .reverse
    }
  }
```