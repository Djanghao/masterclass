# Java, 11 lines added

**Author:** StefanPochmann
**Votes:** 117
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/67602/](https://leetcode.com/problems/count-univalue-subtrees/solutions/67602/)

---

Helper `all` tells whether all nodes in the given tree have the given value. And while doing that, it also counts the uni-value subtrees.

    public class Solution {
        int count = 0;
        boolean all(TreeNode root, int val) {
            if (root == null)
                return true;
            if (!all(root.left, root.val) | !all(root.right, root.val))
                return false;
            count++;
            return root.val == val;
        }
        public int countUnivalSubtrees(TreeNode root) {
            all(root, 0);
            return count;
        }
    }