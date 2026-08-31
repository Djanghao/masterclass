# using single line expression body

**Author:** jhzheng2008
**Votes:** 9
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/3011338/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/3011338/)

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
    public bool CheckTree(TreeNode root) => root.val == root.left.val + root.right.val;
    
}
```