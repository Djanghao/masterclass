# Faster than 99%

**Author:** akhundovaykhan
**Votes:** 6
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/4109329/](https://leetcode.com/problems/sum-of-left-leaves/solutions/4109329/)

---

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
        public int SumOfLeftLeaves(TreeNode root)
        {
            int sum = 0;
            if (root == null)
                return 0;

            if (root.left != null &&
                root.left.left == null &&
                root.left.right == null)
                sum += root.left.val;

            sum+=SumOfLeftLeaves(root.left);
            sum+=SumOfLeftLeaves(root.right);
            return sum;
        }
}
```