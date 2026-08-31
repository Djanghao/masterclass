# Dart solution

**Author:** Coaspe
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/2980209/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/2980209/)

---


# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:math';

// class TreeNode {
//   int val;
//   TreeNode? left;
//   TreeNode? right;
//   TreeNode([this.val = 0, this.left, this.right]);
// }

class Solution {
  int answer = 0;
  int longestConsecutive(TreeNode? root) {
    List<int> dfs(TreeNode? node) {
      if (node == null) return [0, 0];
      int icr = 1, dcr = 1;
      if (node.left != null) {
        List<int> left = dfs(node.left);
        if (node.left?.val == node.val + 1) icr = left[0] + 1;
        if (node.left?.val == node.val - 1) dcr = left[1] + 1;
      }
      if (node.right != null) {
        List<int> right = dfs(node.right);
        if (node.right?.val == node.val + 1) icr = max(icr, right[0] + 1);
        if (node.right?.val == node.val - 1) dcr = max(dcr,right[1] + 1);
      }
      answer = max(answer, icr + dcr - 1);
      return [icr, dcr];
    }
    dfs(root);
    return answer;
  }
}

```