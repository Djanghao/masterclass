# [JAVA] easy 1 liner O(1) solution

**Author:** Jugantar2020
**Votes:** 87
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/2775146/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/2775146/)

---



# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    public boolean checkTree(TreeNode root) {
       return root.val == root.right.val + root.left.val; 
    }
}
```
# PLEASE UPVOTE IF IT WAS HELPFULL
