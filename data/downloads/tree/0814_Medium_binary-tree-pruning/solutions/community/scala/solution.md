# Scala | Recursive Solution | Easy to understand

**Author:** pasverm
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2541276/](https://leetcode.com/problems/binary-tree-pruning/solutions/2541276/)

---

```scala
object Solution {
  def pruneTree(root: TreeNode): TreeNode = {
    if (root == null) return null
    
    val prunedLeft = pruneTree(root.left)
    val prunedRight = pruneTree(root.right)

    if (prunedLeft == null && prunedRight == null && root.value == 0)
      null
    else
      TreeNode(root.value, prunedLeft, prunedRight)
  }
}
```