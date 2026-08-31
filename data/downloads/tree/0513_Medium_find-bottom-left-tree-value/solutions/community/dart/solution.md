# Simple DART solution using BFS

**Author:** Mohamed_Sadeck
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4796461/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4796461/)

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
  int findBottomLeftValue(TreeNode? root) {
    if(root==null) return -1;
    List<TreeNode?> q = [root];
    List<List<int>> levels = [];
    while(q.isNotEmpty){
        List<int> level = [];
        int len = q.length;
        for(int i=0;i<len;i++){
            TreeNode? temp = q.removeAt(0);
            level.add(temp!.val);
            if(temp.left!=null) q.add(temp.left);
            if(temp.right!=null) q.add(temp.right);
        }
        levels.add(level);
    }
    return levels.last.first;
  }
}
```