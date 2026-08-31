# C# postorder solution

**Author:** Luchunpen
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/5189005/](https://leetcode.com/problems/binary-tree-pruning/solutions/5189005/)

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
    public TreeNode PruneTree(TreeNode root)
    {
        bool NodeToRemove(TreeNode n)
        {
            if (n == null) { return true; }
            if (n.val == 0)
            {
                if (n.left == null && n.right == null) { return true; }
            }
            return false;
        }

        void Traverse(TreeNode node)
        {
            if (node == null) { return; }

            Traverse(node.left);
            Traverse(node.right);

            if (NodeToRemove(node.left)) { node.left = null; }
            if (NodeToRemove(node.right)) { node.right = null; }
        }

        Traverse(root);
        if (NodeToRemove(root)) { return null; }
        return root;
    }
}
```