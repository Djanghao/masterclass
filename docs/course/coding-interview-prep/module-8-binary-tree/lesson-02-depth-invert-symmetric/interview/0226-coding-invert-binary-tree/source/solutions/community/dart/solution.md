# Dart one-liner o(n) solution

**Author:** Selger
**Votes:** 3
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/3427381/](https://leetcode.com/problems/invert-binary-tree/solutions/3427381/)

---


# Code
```
class Solution {
   TreeNode? invertTree(TreeNode? root) {
    return root == null ? root : TreeNode(root.val, invertTree(root.right), invertTree(root.left));
  }
}
```