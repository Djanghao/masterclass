# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/4069716/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/4069716/)

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
  TreeNode? buildTree(List<int> inorder, List<int> postorder) {
      if (inorder.isEmpty || postorder.isEmpty) {
          return null;
      }
      final val = postorder.removeLast();
      final root = TreeNode(val);
      final idx = inorder.indexOf(val);   
      root.right = buildTree(inorder.sublist(idx + 1), postorder);
      root.left = buildTree(inorder.sublist(0, idx), postorder);          
      return root;
  }
}
```