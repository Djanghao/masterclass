# Dart Easy solution

**Author:** Nissamudeen-VA
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/3726346/](https://leetcode.com/problems/validate-binary-search-tree/solutions/3726346/)

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
    List<int> values = [];
  bool isValidBST(TreeNode? root) {
      helper(root);
      int value = values[0];
      for(int i=1; i<values.length;i++){
          if(values[i]<=value){
              return false;
              break;
          }
          value = values[i];
      }
      return true;
  }

  void helper(TreeNode? node){
      if(node==null) return;
      helper(node.left);
      values.add(node.val??0);
      helper(node.right);
  }
}
```