# Recursion to calculate the average.

**Author:** nhienle94
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/4392628/](https://leetcode.com/problems/maximum-average-subtree/solutions/4392628/)

---

# Intuition
In each node, we need to calculate the average of node by (sum(left) + sum(right) + nodeVal) / (total nodes)

# Approach
Write a function that returns a nodes and sum, then we can calculate the average and store it to a global variable.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

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
    double ans = 0;
    public double MaximumAverageSubtree(TreeNode root) {
        findSum(root);
        return ans;
    }

    private (int nodes, int sum) findSum(TreeNode root)
    {
        if(root == null)
        {
            // 0 node remaining, return 0 nodes and 0 as sum
            return (0, 0);
        }

        if(root.left == null && root.right == null)
        {
            ans = Math.Max(ans, root.val);
            // 1 node remaining, the sum will be the node value..
            return (1, root.val);
        }

        var leftAns = findSum(root.left);
        var rightAns = findSum(root.right);

        var nodes = leftAns.nodes + 1 + rightAns.nodes;
        var sum = root.val + leftAns.sum + rightAns.sum;

        // Calculate average
        ans = Math.Max(ans, (double)sum/nodes);
        return(nodes, sum);
    }
}
```