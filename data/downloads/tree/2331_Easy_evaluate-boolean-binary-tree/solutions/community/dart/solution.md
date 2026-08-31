# [Dart3] simple switch pattern matching code

**Author:** hyungzin
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5162789/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5162789/)

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
  bool evaluateTree(TreeNode? root)  => switch(root!.val){
    0 => false,
    1 => true,
    2 => evaluateTree(root!.left) || evaluateTree(root!.right),
    _ => evaluateTree(root!.left) && evaluateTree(root!.right),
  };
}
```