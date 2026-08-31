# Short solution C# (DFS, min/max)

**Author:** slch
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/2894285/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/2894285/)

---

# Intuition
Need min / max in each path.
Min max being from different branches is not acceptable.

# Approach
DFS seems to match the requirements.

# Complexity
- Time complexity:
O(n) - checking each node.DF

- Space complexity:
O(n) - worst case if tree is but a long single branch, will recursively stack n function calls.
O(log(n)) - best case would be a balanced tree with log(n) being the height of the tree.

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
    public int MaxAncestorDiff(TreeNode root)
    {
        return DoTheThing(root, root.val, root.val);
    }

    private int DoTheThing(TreeNode node, int min, int max)
    {
        if (node is null) return max - min;
        min = Math.Min(min, node.val);
        max = Math.Max(max, node.val);
        return Math.Max(DoTheThing(node.left, min, max), DoTheThing(node.right, min, max));
    }
}
```