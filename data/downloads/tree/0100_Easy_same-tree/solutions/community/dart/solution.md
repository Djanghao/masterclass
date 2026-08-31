# Solution same tree

**Author:** saeedBark
**Votes:** 1
**Link:** [https://leetcode.com/problems/same-tree/solutions/4274185/](https://leetcode.com/problems/same-tree/solutions/4274185/)

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
  bool isSameTree(TreeNode? root1, TreeNode? root2) {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false;

    final result = root1.val == root2.val &&
        isSameTree(root1.left, root2.left) &&
        isSameTree(root1.right, root2.right);

    return result;
  }
}
```