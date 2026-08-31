# DFS

**Author:** kamvis
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum/solutions/5580596/](https://leetcode.com/problems/path-sum/solutions/5580596/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(H)
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
  bool hasPathSum(TreeNode? root, int targetSum) {
    
    if(root == null) return false;

    if(root.left == null && root.right == null && root.val ==targetSum) return true;


    return hasPathSum(root.left , targetSum - root.val) || hasPathSum(root.right , targetSum - root.val);


  }
}
```