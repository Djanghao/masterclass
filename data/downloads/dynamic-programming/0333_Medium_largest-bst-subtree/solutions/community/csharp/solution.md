# Recursion with size, min and max

**Author:** robin1302
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/4982818/](https://leetcode.com/problems/largest-bst-subtree/solutions/4982818/)

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
    public int LargestBSTSubtree(TreeNode root) {
        int maxSize = 0;
        IsBst(root, ref maxSize);
        return maxSize;
    }

    private (bool, int, int, int) IsBst(TreeNode root, ref int maxSize)
    {
        if (root == null)
        {
            return (true, Int32.MaxValue, Int32.MinValue, 0);
        }
        if (root.left == null && root.right == null)
        {
            maxSize = Math.Max(maxSize, 1);
            return (true, root.val, root.val, 1);
        }
        (bool lvalid, int lmin, int lmax, int lsize) = IsBst(root.left, ref maxSize);
        (bool rvalid, int rmin, int rmax, int rsize) = IsBst(root.right, ref maxSize);
        bool valid = false;
        //Console.WriteLine($"{root.val} : {lvalid} : {lmin} : {lmax} : {lsize}");
        //Console.WriteLine($"{root.val} : {rvalid} : {rmin} : {rmax} : {rsize}");
        if (lvalid && rvalid && (lsize == 0 || lmax < root.val) && (rsize == 0 || rmin > root.val))
        {
            maxSize = Math.Max(maxSize, (lsize+rsize+1));
            valid = true;
        }
        
        return (valid, Math.Min(lmin,Math.Min(rmin, root.val)), Math.Max(lmax, Math.Max(rmax, root.val)), (lsize+rsize+1));
    }
}
```