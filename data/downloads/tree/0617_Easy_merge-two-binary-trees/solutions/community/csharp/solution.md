# C# Simple & readable solution (Time: O(n), Space: O(1))

**Author:** denisId
**Votes:** 4
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/3060973/](https://leetcode.com/problems/merge-two-binary-trees/solutions/3060973/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

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
    public TreeNode MergeTrees(TreeNode root1, TreeNode root2)
    {
        if (root1 == null & root2 == null) return null;
        if (root1 == null) return root2;
        if (root2 == null) return root1;

        var left = MergeTrees(root1.left, root2.left);
        var right = MergeTrees(root1.right, root2.right);

        if (root1.left != left) root1.left = left;
        if (root1.right != right) root1.right = right;

        root1.val += root2.val;

        return root1;
    }
}
```