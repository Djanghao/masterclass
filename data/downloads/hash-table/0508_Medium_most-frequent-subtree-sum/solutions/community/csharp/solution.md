# Beats 100% | post order traversal

**Author:** cPej6S40ao
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/5963835/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/5963835/)

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
    private Dictionary<int,int> frequencySum = new Dictionary<int, int>();

    private int PostOrderTraversal(TreeNode root)
    {
        if(root==null) return 0;

        int leftSum = PostOrderTraversal(root.left);
        int rightSum = PostOrderTraversal(root.right);

        int curr = leftSum+rightSum+root.val;

        if(frequencySum.ContainsKey(curr))
        {
            frequencySum[curr]++;
        }
        else
        {
            frequencySum.Add(curr, 1);
        }
        return curr;
    }

    public int[] FindFrequentTreeSum(TreeNode root) {
        int maxCount=0;
        int count = 0;
        PostOrderTraversal(root);

        foreach(var currSum in frequencySum)
        {
            if(currSum.Value > maxCount) 
            {
                maxCount = currSum.Value;
                count=1;
            }
            else if(currSum.Value == maxCount)
            {
                count++;
            }
        }
        
        
        int[] result = new int[count];
        int i=0;
        foreach(var currSum in frequencySum)
        {
            if(currSum.Value == maxCount)
            {
                result[i] = currSum.Key;
                i++;
            } 
        }

        return result;
    }
}
```