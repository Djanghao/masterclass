# My 4 Line java solution

**Author:** caiqi8877
**Votes:** 532
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/36045/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/36045/)

---

    public class Solution {
        public int minDepth(TreeNode root) {
            if(root == null) return 0;
            int left = minDepth(root.left);
            int right = minDepth(root.right);
            return (left == 0 || right == 0) ? left + right + 1: Math.min(left,right) + 1;
           
        }
    }