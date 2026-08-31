# BEATS 100% DFS SIMPLE DART solution

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5036048/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5036048/)

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
  String smallestFromLeaf(TreeNode? root) {
    String ans='';
    void dfs(TreeNode? root,String str){
        if(root==null) return;
        final word = "${String.fromCharCode(root.val+97)}$str";
        if(root.left==null && root.right==null){
            if(ans=='' || ans.compareTo(word)>0) ans=word;
        }
        dfs(root.left,word);
        dfs(root.right,word);
    }
    dfs(root,"");
    return ans;
  }
}
```