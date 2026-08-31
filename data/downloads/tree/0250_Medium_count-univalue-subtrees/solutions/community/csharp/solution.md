# C# count uni-value subtree - Recursion

**Author:** nonox530
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/5304568/](https://leetcode.com/problems/count-univalue-subtrees/solutions/5304568/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    public int CountUnivalSubtrees(TreeNode root) {
        int ans = 0;
        IsUni(root, ref ans);
        return ans;
    }

    private bool IsUni(TreeNode node, ref int ans) {
        if (node == null) return false;

        bool res1 = IsUni(node.left, ref ans);
        bool res2 = IsUni(node.right, ref ans);

        if (node.left == null && node.right == null) {
            ans ++;
            return true;
        } else if (node.left == null) {
            if ((node.val == node.right.val) && res2) {
                ans ++;
                return true;
            } else {
                return false;
            }
        } else if (node.right == null) {
            if ((node.val == node.left.val) && res1) {
                ans ++;
                return true;
            } else {
                return false;
            }
        } else { // both not null
            if (res1 && res2 && node.val == node.left.val && node.val == node.right.val) {
                ans ++;
                return true;
            } else {
                return false;
            }
        }
    }
}
```