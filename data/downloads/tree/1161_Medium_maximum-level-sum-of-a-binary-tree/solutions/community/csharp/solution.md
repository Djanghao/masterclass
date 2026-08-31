# simple Solution with Dictionary

**Author:** Evoi
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/5042864/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/5042864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
    O(n) - we go through all elements of TreeNode

- Space complexity:
    O(n) - we have one Dictionary with all elements of TreeNode,
the length is O(2*n) = O(n)

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
public class Solution
{
    public int MaxLevelSum(TreeNode root)
    {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        Check(root, 1);
        void Check(TreeNode root, int level)
        {
            if (root == null) return;
            if (!dict.ContainsKey(level))
                dict.Add(level, 0);
            dict[level] += root.val;
            Check(root.left, level + 1);
            Check(root.right, level + 1);
        }
        return dict.MaxBy(x => x.Value).Key;
    }
}
```