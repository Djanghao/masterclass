# dart solution

**Author:** ali62
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/4637498/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/4637498/)

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
  TreeNode? searchBST(TreeNode? root, int val) {
    if (root == null) {
      return null;
    }
    if (root.val == val) {
      return root;
    } else if (root.val > val) {
     return root.left = searchBST(root.left, val);
    } else {
    return  root.right = searchBST(root.right, val);
    }
    
  }
}
```