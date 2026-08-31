# Easy , clear solution🔥🔥, ✅Beats 100% - Dart solution

**Author:** AbdalrhmanALMohammad
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4547671/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4547671/)

---

# UPVOTE\uD83D\uDD25
# Approach
DFS

# Complexity
- Time complexity:
O(N)
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
  int ans=0;
  void dfs1(TreeNode? rt,int mx){
    if(rt==null)
      return;
      ans=max(mx-rt.val,ans);
    dfs1(rt.right,max(mx,rt.val));
    dfs1(rt.left,max(mx,rt.val));
  }
  void dfs2(TreeNode? rt,int mn){
    if(rt==null)
      return;
      ans=max(rt.val-mn,ans);
    dfs2(rt.right,min(mn,rt.val));
    dfs2(rt.left,min(mn,rt.val));
  }
  int maxAncestorDiff(TreeNode? root) {
    if(root==null)
      return 0;
    ans=0;
    dfs1(root,root.val);
    dfs2(root,root.val);
    return ans;  
  }
}
```