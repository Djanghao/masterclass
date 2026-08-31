# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/5823704/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/5823704/)

---

```scala []
object Solution {
    def insertIntoBST(root: TreeNode, `val`: Int): TreeNode = {
        @scala.annotation.tailrec
        def bfs(node: TreeNode): Unit = {
            node match {
                case null => ()
                case _ if node.value < `val` && node.right == null =>
                    node.right = new TreeNode(`val`)
                case _ if node.value < `val` =>
                    bfs(node.right)
                case _ if node.value > `val` && node.left == null =>
                    node.left = new TreeNode(`val`)
                case _ =>
                    bfs(node.left)
            }
        }
        root match {
            case null => new TreeNode(`val`)
            case _=> bfs(root); root
        }
    }
}
```