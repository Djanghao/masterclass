# BFS Solution with Recursion

**Author:** rafat_meraz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/6118708/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/6118708/)

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
  List<int> getLonelyNodes(TreeNode? root) {
    List<int> list = [];
    lonelyNode(root, list);
    return list;
  }

  void lonelyNode(TreeNode? root, List<int> list) {
    if (root == null) return ;
    if (root.left != null && root.right == null) {
        list.add(root.left!.val);
        lonelyNode(root.left, list);
    } else if (root.left == null && root.right != null) {
        list.add(root.right!.val);
        lonelyNode(root.right, list);
    } else {
        lonelyNode(root.left, list);
        lonelyNode(root.right, list);
    }
  }
}
```