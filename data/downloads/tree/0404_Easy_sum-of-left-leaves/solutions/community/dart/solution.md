# Easy dart solution

**Author:** alpjamal
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/4752121/](https://leetcode.com/problems/sum-of-left-leaves/solutions/4752121/)

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
  int total = 0;
  bool isLeft = false;
  int sumOfLeftLeaves(TreeNode? root) {
    if (root?.left == null && root?.right == null) {
      if (isLeft) {
        total += root?.val ?? 0;
      }
    }
    if (root?.left != null) {
      isLeft = true;
      sumOfLeftLeaves(root!.left);
    }
    if (root?.right != null) {
      isLeft = false;
      sumOfLeftLeaves(root!.right);
    }

    return total;
  }
}



```