# [scala] fp + recursion + bfs

**Author:** leetcode08
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/4393054/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/4393054/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {
  def zigzagLevelOrder(root: TreeNode): List[List[Int]] = {
      
    @annotation.tailrec
    def bfs(
      nodes: List[TreeNode], 
      isLeftToRight: Boolean, 
      traversalOrder: List[List[Int]]
    ): List[List[Int]] =
      if (nodes.isEmpty)
        traversalOrder.reverse
      else {
        val childNodes = nodes
          .flatMap(n => List(n.left, n.right))
          .filter(_ != null)
        val values = 
          if (isLeftToRight) nodes.map(_.value) 
          else nodes.map(_.value).reverse
        
        bfs(nodes = childNodes, !isLeftToRight, values :: traversalOrder)
      }

    if (root == null)
      Nil
    else 
      bfs(
        nodes = root :: Nil, 
        isLeftToRight = true, 
        traversalOrder = Nil
      )
  }
}
```