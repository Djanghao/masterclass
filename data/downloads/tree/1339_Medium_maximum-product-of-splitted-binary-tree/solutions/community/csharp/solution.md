# C# Solution With Explanation. ❇️✅

**Author:** ArafatSabbir
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2896141/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2896141/)

---

# Approach
1. Get the total sum of the tree
2. Get the sum of each subtree
3. Get the product of each subtree and total sum - subtree sum
4. Get the max product

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public int MaxProduct(TreeNode root)
    {
        long totalSum = GetSum(root);
        long maxProduct = 0;
        GetMaxProduct(root, totalSum, ref maxProduct);
        return (int)(maxProduct % 1000000007);
    }

    private long GetSum(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }

        return root.val + GetSum(root.left) + GetSum(root.right);
    }

    private long GetMaxProduct(TreeNode root, long totalSum, ref long maxProduct)
    {
        if (root == null)
        {
            return 0;
        }

        long leftSum = GetMaxProduct(root.left, totalSum, ref maxProduct);
        long rightSum = GetMaxProduct(root.right, totalSum, ref maxProduct);
        long currentSum = leftSum + rightSum + root.val;
        maxProduct = Math.Max(maxProduct, currentSum * (totalSum - currentSum));
        return currentSum;
    }
}

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
```