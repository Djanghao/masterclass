# scala dfs

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/3045350/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/3045350/)

---

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
  def delNodes(root: TreeNode, to_delete: Array[Int]): List[TreeNode] = {
    val toDelete = to_delete.toSet
    def impl(root: TreeNode, parent: TreeNode): List[TreeNode] = {
      lazy val dfs = impl(root.left,root) ++ impl(root.right,root)
      if(root == null) List()
      else if(toDelete.contains(root.value)) {
        if(parent != null) {
          if(parent.left != null && parent.left.value == root.value) parent.left = null
          if(parent.right != null && parent.right.value == root.value) parent.right = null
        }
        List(root.left, root.right) ++ dfs
      }
      else dfs
    }
    (root +: impl(root,null)).filterNot{node => (node == null) || (toDelete.contains(node.value))}
  }
}
```