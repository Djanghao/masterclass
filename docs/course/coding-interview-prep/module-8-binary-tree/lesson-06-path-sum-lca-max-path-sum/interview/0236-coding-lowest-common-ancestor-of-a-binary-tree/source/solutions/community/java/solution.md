# My Java Solution which is easy to understand

**Author:** 0xBAAAAAAD
**Votes:** 620
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/65226/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/65226/)

---

    public class Solution {
        public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
            if(root == null || root == p || root == q)  return root;
            TreeNode left = lowestCommonAncestor(root.left, p, q);
            TreeNode right = lowestCommonAncestor(root.right, p, q);
            if(left != null && right != null)   return root;
            return left != null ? left : right;
        }
    }