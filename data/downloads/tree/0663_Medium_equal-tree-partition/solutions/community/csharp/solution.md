# C# DFS solution. Beats 100%.

**Author:** dabdullaev01
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/4999484/](https://leetcode.com/problems/equal-tree-partition/solutions/4999484/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Firstly, find the sum of the given root with DFS. Check whether the sum is even or odd. If it is odd, there is no point to process further, as there is not any number that gives odd result when it is multiplied to 2.
If the sum is even, we need to find half of the sum. Do another post-order DFS to find the target. If any side, left or right, equals to the target, then there is, obviously, another "summed" target on the other part of the tree. Store a boolean value in a globally accessible variable. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
It is O(n) under the hood, as recursion uses Stack in memory.

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
    private bool _isFound = false;
    public bool CheckEqualTree(TreeNode root)
    {
        var sum = CheckEqualTreeSum(root);
        if (sum % 2 == 1 || sum % 2 == -1)
        {
            return false;
        }
        var target = sum / 2;

        CheckEqualTreeHelper(root, target);
        return _isFound;
    }

    private int CheckEqualTreeHelper(TreeNode node, int target)
    {
        if (node == null)
        {
            return 0;
        }

        var left = CheckEqualTreeHelper(node.left, target);
        var right = CheckEqualTreeHelper(node.right, target);

        if ((left == target && node.left != null) || (right == target && node.right != null))
        {
            _isFound = true;
        }

        return left + right + node.val;
    }

    private int CheckEqualTreeSum(TreeNode node)
    {
        if (node == null)
        {
            return 0;
        }

        var left = CheckEqualTreeSum(node.left);
        var right = CheckEqualTreeSum(node.right);

        return left + right + node.val;
    }
}
```