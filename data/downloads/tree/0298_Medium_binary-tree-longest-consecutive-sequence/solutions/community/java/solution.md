# Easy Java DFS, is there better time complexity solution?

**Author:** czonzhu
**Votes:** 144
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/74468/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/74468/)

---

Just very intuitive depth-first search, send cur node value to the next level and compare it with the next level node.

    public class Solution {
        private int max = 0;
        public int longestConsecutive(TreeNode root) {
            if(root == null) return 0;
            helper(root, 0, root.val);
            return max;
        }
        
        public void helper(TreeNode root, int cur, int target){
            if(root == null) return;
            if(root.val == target) cur++;
            else cur = 1;
            max = Math.max(cur, max);
            helper(root.left, cur, root.val + 1);
            helper(root.right, cur, root.val + 1);
        }
    }