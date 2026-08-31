# Scala idiomatic

**Author:** acamillo
**Votes:** 2
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/1459747/](https://leetcode.com/problems/subtree-of-another-tree/solutions/1459747/)

---

```scala
object SubtreeOfAnotherTree extends {
  def isSameTree(p: TreeNode, q: TreeNode): Boolean = (p, q) match {
    case (null, null) => true
    case (_, null) | (null, _) => false
    case (p, q) => (p.value == q.value) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }

  def isSubtree(root: TreeNode, subRoot: TreeNode): Boolean = (root, subRoot) match {
    case (_, null) | (null, _) => false
    case (_, _) => isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  }
}
  
