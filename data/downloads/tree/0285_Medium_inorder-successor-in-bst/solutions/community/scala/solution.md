# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/5813476/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/5813476/)

---

```scala []
object Solution {
    def inorderSuccessor(root: TreeNode, p: TreeNode): TreeNode = {
        def dfs(node: TreeNode, successor: TreeNode): TreeNode = {
            node match {
                case null => successor
                case _ if node.value <= p.value =>
                    dfs(node.right, successor)
                case _ if node.value > p.value && node.value < successor.value =>
                    dfs(node.left, node)
            }
        }
        val r = dfs(root, new TreeNode(Int.MaxValue))
        if r.value == Int.MaxValue then null else r
    }
}
```