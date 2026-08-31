# C#

**Author:** kpzeus
**Votes:** 4
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/3633370/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/3633370/)

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
    public TreeNode DeleteNode(TreeNode root, int val)
    {
        if (root == null)
            return root;

        if (val < root.val)
        {
            root.left = DeleteNode(root.left, val);
        }
        else if (val > root.val)
        {
            root.right = DeleteNode(root.right, val);
        }
        else
        {
            if (root.left == null && root.right == null)
            {
                root = null;
            }
            else if (root.left == null || root.right == null)
            {
                TreeNode ret = root.left != null ? root.left : root.right;
                root = ret;
            }
            else
            {
                TreeNode tmp = root.right;
                while (tmp.left != null)
                {
                    tmp = tmp.left;
                }
                root.val = tmp.val;
                root.right = DeleteNode(root.right, tmp.val);
            }
        }
        return root;
    }
}
```