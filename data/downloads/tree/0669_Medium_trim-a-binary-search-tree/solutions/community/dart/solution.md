# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/4032524/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/4032524/)

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
  TreeNode? trimBST(TreeNode? root, int low, int high) {
      if (root == null) {
          return root;
      }

      if (root.val > high) {
          return trimBST(root.left, low, high);
      }
      if (root.val < low) {
          return trimBST(root.right, low, high);
      }

      root.left = trimBST(root.left, low, high);
      root.right = trimBST(root.right, low, high);
      return root;
  }
}
```