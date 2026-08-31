# BEATS 100% DFS-SIMPLE DART solution

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/4811375/](https://leetcode.com/problems/binary-tree-tilt/solutions/4811375/)

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
  int findTilt(TreeNode? root) {
    int ans=0;
    int helper(TreeNode? root){
        if(root==null) return 0;
        int leftSum=helper(root.left);
        int rightSum=helper(root.right);
        int diff = (leftSum-rightSum).abs();
        ans+=diff;
        return root.val+leftSum+rightSum;
    }
    helper(root);
    return ans;
  }
}
```