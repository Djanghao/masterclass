# C# Simple Easy Solution Using Recursion

**Author:** kaushal145
**Votes:** 6
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/4056195/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/4056195/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Using Recursion 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- o(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */

public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(p.val > root.val && q.val > root.val)
            return LowestCommonAncestor(root.right, p, q);
        else if (p.val < root.val && q.val < root.val)
            return LowestCommonAncestor(root.left, p , q);
        else
            return root;
    }
}
```