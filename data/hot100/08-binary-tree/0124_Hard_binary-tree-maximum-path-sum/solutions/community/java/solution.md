# Elegant Java solution

**Author:** jeantimex
**Votes:** 304
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/39875/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/39875/)

---

    public class Solution {
        int max = Integer.MIN_VALUE;
        
        public int maxPathSum(TreeNode root) {
            helper(root);
            return max;
        }
        
        // helper returns the max branch 
        // plus current node's value
        int helper(TreeNode root) {
            if (root == null) return 0;
            
            int left = Math.max(helper(root.left), 0);
            int right = Math.max(helper(root.right), 0);
            
            max = Math.max(max, root.val + left + right);
            
            return root.val + Math.max(left, right);
        }
    }