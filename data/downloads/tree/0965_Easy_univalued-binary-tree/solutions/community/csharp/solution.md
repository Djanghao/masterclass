# Beats 80% | Simple traversal - recursive

**Author:** cPej6S40ao
**Votes:** 0
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/5904806/](https://leetcode.com/problems/univalued-binary-tree/solutions/5904806/)

---

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
    
    public bool PreOrderTraversal(TreeNode root, int val)
    {
        if(root == null) return true;

        if(root.val != val) return false;

        return PreOrderTraversal(root.left, val) && PreOrderTraversal(root.right, val);
    }

    public bool IsUnivalTree(TreeNode root) {

        if(root == null) return true;

        return PreOrderTraversal(root, root.val);
    }
}
```