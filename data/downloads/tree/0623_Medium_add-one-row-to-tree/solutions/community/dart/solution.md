# Dart solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/5029203/](https://leetcode.com/problems/add-one-row-to-tree/solutions/5029203/)

---

# Code
```
class Solution {
  TreeNode addOneRow(TreeNode? root, int v, int d) {
    switch (d) {
      case 1:
        return TreeNode(v, root, null);

      case 2:
        root!.left = TreeNode(v, root.left, null);
        root.right = TreeNode(v, null, root.right);

      default:
        [root?.left, root?.right]
            .nonNulls
            .forEach((node) => addOneRow(node, v, d - 1));
    }
    return root!;
  }
}
```