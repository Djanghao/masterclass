# scala flatten then constructMaximumBinaryTree I

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/3205677/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/3205677/)

---

# Code
```
object Solution {
  def insertIntoMaxTree(root: TreeNode, v: Int): TreeNode = {
    def flatten(root: TreeNode): Seq[Int] = 
      if(root == null) List()
      else flatten(root.left) ++ ((root.value) +: flatten(root.right))
    def constructMaximumBinaryTree(seq: Seq[Int]): TreeNode = {
        lazy val (d,t) = seq.span(_ != seq.max)
        if(seq.isEmpty) null
        else new TreeNode(t.head, constructMaximumBinaryTree(d), constructMaximumBinaryTree(t.tail))
    }
    constructMaximumBinaryTree(flatten(root) :+ v)
  }
}
```