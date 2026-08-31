# DFS Approach

**Author:** benottoman
**Votes:** 2
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/4388344/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/4388344/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(h)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:math';

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
  int diameterOfBinaryTree(TreeNode? root) {
    int diameter = 0;
    
    int maxDepth(TreeNode? node) {
      if (node == null) return 0;
      
      int leftMaxDepth = maxDepth(node.left);
      int rightMaxDepth = maxDepth(node.right);

      diameter = max(diameter, leftMaxDepth + rightMaxDepth);

      // +1 accounts for the current [node] connecting to either the left or right child
      return max(leftMaxDepth, rightMaxDepth) + 1;
    }

    maxDepth(root);

    return diameter;
  }
}
```