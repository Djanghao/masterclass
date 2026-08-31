# C# | Post order traversal | Bottom up

**Author:** jianminchen
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/4032551/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/4032551/)

---

Sept. 11, 2023
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Traverse nodes in the tree using post order. Time complexity: O(N), N is total number of nodes in the tree
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
    public int EqualToDescendants(TreeNode root)
        {
            var count = 0;

            runPostOrder(root, ref count);

            return count; 
        }

        private int runPostOrder(TreeNode root, ref int count)
        {
            if (root == null)
            {
                return 0; 
            }

            var left = runPostOrder(root.left, ref count);
            var right = runPostOrder(root.right, ref count);

            if (root.val == left + right)
            {
                count++;
            }

            return root.val + left + right; 
        }
}
```