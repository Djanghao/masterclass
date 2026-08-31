# BackTracking

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/5897303/](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/5897303/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    private int res;
    private int[] invalidArr = new int[]{int.MaxValue, int.MinValue, int.MinValue};
    private int[] CheckSubTree(TreeNode node)
    {
        // null node
        if(node == null)
            return new int[0];

        int curVal = node.val;
        // leaf node:
        if(node.left == null && node.right == null)
        {
            res = Math.Max(res, curVal);
            return new int[]{curVal, curVal, curVal};
        }

        int[] leftPart = CheckSubTree(node.left);
        int[] rightPart = CheckSubTree(node.right);
        bool isBSTL = (leftPart.Length == 0 || leftPart[0] <= leftPart[1] ? true : false);
        bool isBSTR = (rightPart.Length == 0 || rightPart[0] <= rightPart[1] ? true: false);
        if(isBSTL && leftPart.Length == 3)
            res = Math.Max(res, leftPart[2]);

        if(isBSTR && rightPart.Length == 3)
            res = Math.Max(res, rightPart[2]);

        if(isBSTL && isBSTR)
        {
            if(leftPart.Length == 0 || rightPart.Length == 0)
            {
                if(leftPart.Length == 0 && rightPart.Length == 3 && curVal < rightPart[0])
                {
                    res = Math.Max(res, curVal+ rightPart[2]);
                    return new int[]{curVal, rightPart[1], curVal+rightPart[2]};
                }
                else if(rightPart.Length == 0 && leftPart.Length == 3 && curVal > leftPart[1])
                {
                    res = Math.Max(res, curVal + leftPart[2]);
                    return new int[]{leftPart[0], curVal, curVal + leftPart[2]};
                }
                else
                    return invalidArr;
            }
            else if(curVal > leftPart[1] && curVal < rightPart[0])
            {
                int newSum = leftPart[2] + curVal + rightPart[2];
                res = Math.Max(res, newSum);
                return new int[]{leftPart[0], rightPart[1], newSum};
            }
            else 
                return invalidArr;
        }
        else
            return invalidArr;
    }
    public int MaxSumBST(TreeNode root) {
        res = 0;
        CheckSubTree(root);

        return res;
    }
}
```