# DFS The easiest DART solution Recursivity

**Author:** Mohamed_Sadeck
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/4645212/](https://leetcode.com/problems/path-sum-ii/solutions/4645212/)

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
  List<List<int>> pathSum(TreeNode? root, int targetSum) {
    List<List<int>> ans=[];
    void helper(TreeNode? root, int targetSum, List<int> list){
        if(root==null) return;
        List<int> newList = List.from(list);
        newList.add(root.val);
        if(root.left!=null) helper(root.left,targetSum-root.val,newList);
        if(root.right!=null) helper(root.right,targetSum-root.val,newList);
        if(root.left==null && root.right==null && targetSum==root.val) ans.add(newList);
    }
    List<int> list=[];
    helper(root,targetSum,list);
    return ans;
  }
}
```