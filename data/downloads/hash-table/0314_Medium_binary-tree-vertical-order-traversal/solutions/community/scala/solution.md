# Scala 15 line recursive solution - beats 88%

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/5228497/](https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/5228497/)

---

# Code
```
object Solution {
    def verticalOrder(root: TreeNode) =  {
        val table = collection.mutable.Map.empty[Int, List[(Int, Int)]].withDefaultValue(Nil)

        def traverse(node: TreeNode, delta: Int, depth: Int): Unit = if node != null then {
            table(delta) = (depth, node.value) :: table(delta)
            traverse(node.right, delta+1, depth+1)
            traverse(node.left, delta-1, depth+1)            
        }
        
        traverse(root, 0, 0)
        table
            .toList
            .sortBy((delta, _) => delta)
            .map((_, nodes) => nodes.sortBy((depth, _) => depth).map((_, value) => value))
    }
}
```