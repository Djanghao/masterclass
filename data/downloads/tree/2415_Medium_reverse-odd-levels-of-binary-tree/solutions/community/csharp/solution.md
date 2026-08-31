# Fisber : recursion

**Author:** fisber
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/3494268/](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/3494268/)

---

# Intuition
C# faster than 100% just because using bool instead of mod operation 



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
    public TreeNode ReverseOddLevels(TreeNode root) {

        if(root == null)
        {
            return root;
        }

        Revers(root.left,root.right,true);

        return root;
        
    }

    private void Revers(TreeNode nodeLeft, TreeNode nodeRight,bool isOdd)
    {

        if( nodeLeft == null && nodeRight== null)
         {
                return;
         }

        if(isOdd)
        {
            var t = nodeLeft.val ;
           nodeLeft.val = nodeRight.val ;
            nodeRight.val  = t;
        }

     Revers(nodeLeft.left,nodeRight.right,!isOdd);

     Revers(nodeLeft.right,nodeRight.left,!isOdd);


    }
}
```