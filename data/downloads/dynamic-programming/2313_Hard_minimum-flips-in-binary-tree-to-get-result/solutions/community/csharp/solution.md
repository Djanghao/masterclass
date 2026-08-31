# O(N) - Find out minimum operations required for both true and false values at each node

**Author:** chrisTris
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5218661/](https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5218661/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For leaf node - the number of operations required for true value is node.val is true then 0 else 1 and similar for false values. For Non-leaf node, it is based on truth table. E.g. for OR node, the value is false only if both nodes are false, so min operation required for true value is min of when either of its children are true and false value is sum of operations when both child is false.

Overall, we need to calculate true and false operations required for each node.

# Approach
<!-- Describe your approach to solving the problem. -->
Post Order traversal

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
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
public class Solution 
{
    const int OR = 2, AND = 3, XOR = 4, NOT = 5;

    public int MinimumFlips(TreeNode root, bool result) 
    {
        var (trueOp, falseOp) = helper(root);
        return result ? trueOp : falseOp;
    }

    private (int trueOp, int falseOp) helper(TreeNode node)
    {
        if(node is null)
        {
            return (0, 0);
        }

        if (node.left is null && node.right is null)
        {
            bool isTrue = node.val == 1;
            return (isTrue ? 0 : 1, !isTrue ? 0 : 1);
        }

        var left = helper(node.left);
        var right = helper(node.right);

        var result = node.val switch 
        {
            OR => (new int[] { left.trueOp + right.trueOp, left.trueOp + right.falseOp, left.falseOp + right.trueOp}.Min(), left.falseOp + right.falseOp),

            AND => (left.trueOp + right.trueOp, new int[] {left.falseOp + right.falseOp, left.falseOp + right.trueOp, left.trueOp + right.falseOp}.Min()),

            XOR => (new int[] {left.trueOp + right.falseOp, left.falseOp + right.trueOp}.Min(), new int[] {left.trueOp + right.trueOp, left.falseOp + right.falseOp}.Min()),

            NOT => (node.left is not null ? (left.falseOp, left.trueOp) : (right.falseOp, right.trueOp)),

            _ => (0, 0)
        };

        return result;
    }
}
```