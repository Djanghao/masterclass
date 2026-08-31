# BEATS 100% SIMPLE DART Solution

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/4816687/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/4816687/)

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
class BSTIterator {
  List<int> inorder = [];
  BSTIterator(TreeNode? root) {
    void helper(TreeNode? root){
        if(root==null) return;
        helper(root.left);
        inorder.add(root.val);
        helper(root.right);
    }
    helper(root);
  }
  
  int next() {
    return inorder.removeAt(0);
  }
  
  bool hasNext() {
    return inorder.isNotEmpty;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = BSTIterator(root);
 * int param1 = obj.next();
 * bool param2 = obj.hasNext();
 */
```