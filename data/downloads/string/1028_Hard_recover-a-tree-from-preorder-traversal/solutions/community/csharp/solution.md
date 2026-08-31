# Use 2D list to track node level

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/5897117/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/5897117/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- O(N)
# Code
```csharp []
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
    public TreeNode RecoverFromPreorder(string traversal) {
        int len = traversal.Length;
        if(len == 0)
            return null;
        List<IList<TreeNode>> res = new();
        int cur = 0, idx = 0, cnt = 0;
       
        // Build root node:
        while(idx < len && Char.IsDigit(traversal[idx]))
        {
            cur *= 10;
            cur += (traversal[idx++]-'0');
        }

        TreeNode root = new TreeNode(cur);
        res.Add(new List<TreeNode>(new TreeNode[]{root}));

        while(idx < len)
        {
            cur = 0;
            int dash = 0;
            while((idx+dash) < len && traversal[idx+dash] == '-')
            {
                dash++;
            }

            int digits = 0;
            idx += dash;
            while((idx+digits) < len && Char.IsDigit(traversal[idx+digits]))
            {
                cur *= 10;
                cur += (traversal[idx+digits]-'0');
                digits++;
            }

            TreeNode node = new TreeNode(cur);
            if(res.Count <= dash)
                res.Add(new List<TreeNode>(new TreeNode[]{node}));
            else
                res[dash].Add(node);

            TreeNode pre = res[dash-1].Last();
            if(pre.left == null)
                pre.left = node;
            else
                pre.right = node;

            idx += digits;
        }

        return root;
    }
}
```