# simple recursion

**Author:** nm4ik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/5853885/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/5853885/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
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
  int maxDepth(TreeNode? root) {
    return visiter(root);
  }
  
  int visiter(TreeNode? root) {
    if(root == null) return 0;
    int sum = 1;

    final leftSum = visiter(root.left);
    final rightSum = visiter(root.right);

    return sum + max(leftSum,rightSum);
  }
}
```