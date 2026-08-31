# Simple, clear and fast!

**Author:** AbdulazimIslomjonov
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/3022420/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/3022420/)

---

# Upvoat, please!
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
List<int> preorderTraversal(TreeNode? root) {
  List<int> result = [];
  if(root==null) return result ;
  List<TreeNode> stack =[];
  stack.add(root);
  TreeNode tmp;
  while(stack.isNotEmpty){
    tmp = stack.removeLast();
    result.add(tmp.val);
    if(tmp.right!=null) stack.add(tmp.right!);
    if(tmp.left!=null) stack.add(tmp.left!);
  }
  return result ;
}
}
```