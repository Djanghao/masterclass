# C# easy traverse solution

**Author:** Luchunpen
**Votes:** 1
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/5216743/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/5216743/)

---

On my Github you can try FastDictionary for the simple keys, which works 2 times faster than built-in https://github.com/LuchunPen/Fast-Hash-Collection

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

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
public class Solution 
{
    public bool IsCousins(TreeNode root, int x, int y) 
    {
        TreeNode xParent = null; 
        TreeNode yParent = null;
        int xDepth = -1;
        int yDepth = -1;

        void Traverse(TreeNode node, int depth, TreeNode parent)
        {
            if (node == null) { return; }
            if (node.val == x) { xParent = parent; xDepth = depth; }
            if (node.val == y) { yParent = parent; yDepth = depth; }
            Traverse(node.left, depth + 1, node);
            Traverse(node.right, depth + 1, node);
        }

        Traverse(root, 0, null);
        return xParent != yParent && xDepth == yDepth;
    }
}
```