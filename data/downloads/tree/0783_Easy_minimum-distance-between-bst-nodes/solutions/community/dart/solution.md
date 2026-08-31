# Dart iterative solution

**Author:** henrik1995
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195323/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3195323/)

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
  int minDiffInBST(TreeNode? root) {
      List<TreeNode?> nodes = [root];
      for(var i = 0; i < nodes.length; i++) {
          if(nodes[i]!.left != null){
              nodes.add(nodes[i]!.left!);
          }
          if(nodes[i]!.right != null){
              nodes.add(nodes[i]!.right!);
          }
      }
      List<int> diffs = [];
      for(var j = 0; j < nodes.length - 1; j++) {
        for(var y = j + 1; y < nodes.length; y++) {
            final diff = (nodes[j]!.val - nodes[y]!.val).abs();
            if(diff == 0) {
                return 0;
            } else {
              diffs.add(diff);
            }
        }
      }
      diffs.sort();
      return diffs[0];
  }
}
```