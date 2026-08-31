# Java iterative solution

**Author:** yd
**Votes:** 9
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/70386/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/70386/)

---

Basic idea: In a while loop, calculate min for the current root and update the closest value when necessary. Depending on whether root node is smaller or larger than the target, go to the right or the left branch.

    public int closestValue(TreeNode root, double target) {
        double closest = Integer.MAX_VALUE;
        int value = 0;
        TreeNode current = root;
        while (current != null) {
            if (closest > Math.abs(current.val-target)) {
                closest = Math.abs(current.val-target);
                value = current.val;
            }
            
            if (current.val < target) {
                current = current.right;
            } else if (current.val > target) {
                current = current.left;
            } else {
                break;
            }
        }
        return value;
    }