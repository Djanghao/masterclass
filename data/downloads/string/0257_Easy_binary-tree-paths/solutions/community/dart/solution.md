# Easiest DART solution RECURSIVITY

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/4643852/](https://leetcode.com/problems/binary-tree-paths/solutions/4643852/)

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
    List<String> ans=[];
    String arrow = '->';
  List<String> binaryTreePaths(TreeNode? root) {
    if(root==null) return [];
    void helper(TreeNode? root,String s){
        if(root==null) return;
        s+='${root.val}';
        if(root.left!=null) helper(root.left,s+arrow);
        if(root.right!=null) helper(root.right,s+arrow);
        if(root.left==null && root.right==null) ans.add(s);
    }
    helper(root,'');
    return ans;
  }
}
```