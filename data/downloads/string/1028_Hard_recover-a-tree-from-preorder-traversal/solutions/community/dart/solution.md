# Iterative method using stack

**Author:** jesbin66
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/4919750/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/4919750/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
iterative method using stack

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

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
  TreeNode? recoverFromPreorder(String t) {
    List<TreeNode?> stack = [];
    int index = 0;
    while (index < t.length) {
      int depth = 0;
      for(;t[index] == '-';depth++,index++);
      int v = 0;
      for(;index < t.length && t[index] != '-';v = v * 10 + int.parse(t[index++]));
      TreeNode node = TreeNode(v);
      while (stack.length > depth) stack.removeLast();
      if (stack.isNotEmpty) 
        if (stack.last!.left == null) stack.last!.left = node;
        else stack.last!.right = node;
      stack.add(node);
    }
    return stack.isNotEmpty ? stack.first : null;
  }
}
```