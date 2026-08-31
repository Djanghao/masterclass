# BFS Recursive approach

**Author:** rafat_meraz
**Votes:** 0
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/6119499/](https://leetcode.com/problems/univalued-binary-tree/solutions/6119499/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
BFS

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```dart []
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
  bool isUnivalTree(TreeNode? root) {
    if (root == null) return true;
    return valid(root.left, root.val) && valid(root.right, root.val); 
  }

  bool valid(TreeNode? root, int val) {
    if (root == null) return true;
    if (root.val != val) return false;
    return valid(root.left, val) && valid(root.right, val);
  }
}
```