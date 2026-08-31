# Scala Recursive

**Author:** fairgrieve
**Votes:** 5
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/806233/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/806233/)

---

```
object Solution {
    def preorderTraversal(root: TreeNode): List[Int] = {
        Option(root) match {
            case Some(node) => List(node.value) ++ preorderTraversal(node.left) ++ preorderTraversal(node.right)
            case _ => List()
        }
    }
}
```