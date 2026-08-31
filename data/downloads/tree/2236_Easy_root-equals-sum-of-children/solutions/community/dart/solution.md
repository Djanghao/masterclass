# One line solution , Dart

**Author:** emanhamad
**Votes:** 1
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/5077306/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/5077306/)

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
  bool checkTree(TreeNode? root) {
  return ( root?.val  ?? 0) == ( root?.left?.val ?? 0 ) +( root?.right?.val ?? 0 );
 
  } 
}
```