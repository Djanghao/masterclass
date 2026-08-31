# Scala solution

**Author:** Yasinjan
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1958957/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1958957/)

---

```
object Solution {
    def inorderTraversal(root: TreeNode): List[Int] = {
        if(root == null) List()
        else inorderTraversal(root.left) ++ List(root.value) ++ inorderTraversal(root.right)
    }
}
```