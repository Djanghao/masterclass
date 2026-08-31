# Simple code to solve this issue using BFS

**Author:** syk199301
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/4819821/](https://leetcode.com/problems/path-sum-ii/solutions/4819821/)

---

# Intuition
Using BFS to solve this issue

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)


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
    public IList<IList<int>> PathSum(TreeNode root, int targetSum) {
        IList<IList<int>> result = new List<IList<int>>();
        if (root == null)
        {
            return result;
        }
        
        Queue<(TreeNode, List<int>)> queue = new();
        queue.Enqueue((root, new List<int>()));
        while (queue.Count > 0)
        {
            (var node, List<int> list) = queue.Dequeue();

            list.Add(node.val);
            var sum = list.Sum();
            if (node.left == null && node.right == null && sum == targetSum)
            {
                result.Add(new List<int>(list));
                continue;
            }
            
            if (node.left != null)
            {
                queue.Enqueue((node.left, new List<int>(list)));
            }
            if (node.right != null)
            {
                queue.Enqueue((node.right, new List<int>(list)));
            }

        }
        return result;
    }
}
```