# Easiest DART Solution

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/4648595/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/4648595/)

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
  int kthSmallest(TreeNode? root, int k) {
    List<int> list=[];
    void helper(TreeNode? root){
        if(root==null) return;
        helper(root.left);
        list.add(root.val);
        helper(root.right);
    }
    helper(root);
    return list[k-1];
  }
}
```