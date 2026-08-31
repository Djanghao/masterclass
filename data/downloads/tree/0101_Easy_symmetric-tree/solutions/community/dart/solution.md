# Normal Recursion

**Author:** rafat_meraz
**Votes:** 0
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/6115108/](https://leetcode.com/problems/symmetric-tree/solutions/6115108/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

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
  bool isSymmetric(TreeNode? root) {
    if  (root == null) {
        return false;
    }
    return checkMirror(root.left, root.right);
  }

  bool checkMirror(TreeNode? p, TreeNode? q) {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    if (p.val != q.val)  return false;
    return checkMirror(p.left, q.right) && checkMirror(p.right, q.left); 
  }
}
```