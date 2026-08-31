# solution

**Author:** mikhmanoff
**Votes:** 11
**Link:** [https://leetcode.com/problems/path-sum/solutions/3486462/](https://leetcode.com/problems/path-sum/solutions/3486462/)

---

The function hasPathSum checks if there is a path from the root to the leaves in the binary tree defined by the root, whose sum of vertex values is equal to the given number targetSum.

The function first checks if the root is empty. If it is empty, the function returns false, since an empty tree has no path from the root to the leaves.

Then it subtracts the value of the root from targetSum. It then checks to see if the current node is a leaf, that is, it has no child nodes. If so, the function returns the result of comparing targetSum to zero. If the sum in the current node goes to the right number and the current node is a leaf, then we have found the path from the root to the leaf with the right sum of values.

If the current node is not a leaf, the function calls itself recursively for the left and right subtree, passing targetSum minus the value of the current node as an argument. The function then returns the result of the logical AND of the recursive calls, since both subtrees must have a path from the root to the leaf with the desired sum in order for the whole tree to have that path.

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) {
            return false;
        }

        targetSum -= root.val;

        if (root.left == null && root.right == null) {
            return targetSum == 0;
        }

        return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);        
    }
}
```