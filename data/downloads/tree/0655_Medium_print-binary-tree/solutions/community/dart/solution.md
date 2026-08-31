# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/4347074/](https://leetcode.com/problems/print-binary-tree/solutions/4347074/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
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
  List<List<String>> printTree(TreeNode? root) {
    final height = maxDepth(root) - 1;
    final width = pow(2, height + 1).toInt() - 1;
    final row = 0;
    final col = (width - 1) ~/ 2;
    final List<List<String>> res = List.generate(height + 1, (_) => List.filled(width, ""));
    fillTree(root, res, row, col, height);
    return res;
  }

  void fillTree(TreeNode? root, List<List<String>> res, int row, int col, int height) {
      if (root == null) {
          return;
      }

      res[row][col] = '${root.val}';
      final left = col - pow(2, height - row - 1).toInt();
      final right = col + pow(2, height - row - 1).toInt();
      fillTree(root.left, res, row + 1, left, height);
      fillTree(root.right, res, row + 1, right, height);
  }

  int maxDepth(TreeNode? root) {
      if (root == null) {
          return 0;
      }
      return 1 + max(maxDepth(root.left), maxDepth(root.right));
  }
}

```