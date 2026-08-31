# Recursive solution with constant time and space

**Author:** mh72156
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/5649835/](https://leetcode.com/problems/recover-binary-search-tree/solutions/5649835/)

---

# Intuition
Remove mistake at in-order traversal using recursive approach

# Approach
Recursive approach with constant time and space

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# Code
```
class Solution {
  TreeNode? firstNode;
  TreeNode? secondNode;
  TreeNode? prevNode;
  void recoverTree(TreeNode? root) {
    if (root == null) return;
    recover(root);
    if (firstNode != null && secondNode != null) {
      final tmp = secondNode!.val;
      secondNode!.val = firstNode!.val;
      firstNode!.val = tmp;
    }
  }

  void recover(TreeNode? root) {
    if (root == null) return;

    recover(root.left);

    if (prevNode != null && root.val < prevNode!.val && firstNode == null) {
      firstNode = prevNode;
    }
    if (prevNode != null && root.val < prevNode!.val && firstNode != null) {
      secondNode = root;
    }

    prevNode = root;
    recover(root.right);
  }
}
```