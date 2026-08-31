# Simple dart

**Author:** muhammedijaz_kp
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/4882155/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/4882155/)

---



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
  List<int> postorderTraversal(TreeNode? root) {
    if(root==null){
        return [];
    }
     List<int> result = [];
    result.addAll(postorderTraversal(root.left));
    result.addAll(postorderTraversal(root.right));
    result.add(root.val);
    
    return result;
  }
}
```