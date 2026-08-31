# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/4069747/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/4069747/)

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
  TreeNode? buildTree(List<int> preorder, List<int> inorder) {
    if (preorder.isEmpty || inorder.isEmpty) {
        return null;
    }

    final root = TreeNode(preorder.first);
    final mid = inorder.indexOf(preorder.first);
    root.left = buildTree(preorder.sublist(1, mid + 1), inorder.sublist(0, mid));
    root.right = buildTree(preorder.sublist(mid + 1), inorder.sublist(mid + 1));
    return root;
  }
}
```