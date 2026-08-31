# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/4379033/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/4379033/)

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
  TreeNode? constructFromPrePost(List<int> preorder, List<int> postorder) {
    if (preorder.isEmpty || postorder.isEmpty) {
        return null;
    }

    final root = TreeNode(preorder.first);
    if (preorder.length == 1) {
        return root;
    }
    final index = postorder.indexOf(preorder[1]);
    root.left = constructFromPrePost(preorder.sublist(1, index + 2), postorder.sublist(0, index + 1));
    root.right = constructFromPrePost(preorder.sublist(index + 2), postorder.sublist(index + 1));
    return root;
  }
}
```