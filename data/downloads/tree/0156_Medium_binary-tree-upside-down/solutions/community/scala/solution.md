# Scala tree recursion solution

**Author:** saurabhskj
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/2556356/](https://leetcode.com/problems/binary-tree-upside-down/solutions/2556356/)

---

```
object Solution {
  def upsideDownBinaryTree(root: TreeNode): TreeNode = {
    def flip(node: TreeNode): TreeNode = {
      if (node == null || node.left == null)
        node
      else {
        var newRoot = flip(node.left)
        node.left.left = node.right
        node.left.right = node
        node.left = null
        node.right = null
        newRoot
      }
    }
    flip(root)
  }
}
```