# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/2546870/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/2546870/)

---

```scala
  def btreeGameWinningMove(root: TreeNode, n: Int, x: Int): Boolean = {
    def find(node: TreeNode): Option[TreeNode] =
      if(node == null) None
      else if(node.value == x) Some(node)
      else List(node.left,node.right).flatMap(find).headOption
    def countChildren(node: TreeNode): Int =
      if(node == null) 0
      else countChildren(node.left) + 1 + countChildren(node.right)
    val red = find(root).get
    val lc = countChildren(red.left)
    val rc = countChildren(red.right)
    val uc = n - 1 - lc - rc
    val seq = List(lc,rc,uc).sorted
    seq(0) + seq(1) + 1 < seq(2)
  }

```