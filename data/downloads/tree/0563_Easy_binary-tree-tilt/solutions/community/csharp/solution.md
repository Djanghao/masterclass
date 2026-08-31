# C# easy

**Author:** Luchunpen
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/5270001/](https://leetcode.com/problems/binary-tree-tilt/solutions/5270001/)

---


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
    public int FindTilt(TreeNode root) 
    {
        int total = 0;
        int Traverse(TreeNode node)
        {
            if (node == null) { return 0; }

            int left = Traverse(node.left);
            int right = Traverse(node.right);

            int tilt = Math.Abs(left - right);
            total += tilt;

            return left + right + node.val;
        }

        Traverse(root);
        return total;
    }
}
```