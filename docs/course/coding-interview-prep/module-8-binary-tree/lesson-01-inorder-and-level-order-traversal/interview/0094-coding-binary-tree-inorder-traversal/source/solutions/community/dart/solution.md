# Simple dart solution

**Author:** DUDU0123
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/5786283/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/5786283/)

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
  List<int> inorderTraversal(TreeNode? root) {
    List<int> list = [];
    inOrderHelper(root, list);
    return list;
  }
   inOrderHelper(TreeNode? root, List<int> list){
    if(root!=null){
        inOrderHelper(root.left, list);
        list.add(root.val!);
        inOrderHelper(root.right, list);
        
    }
  }
}
```