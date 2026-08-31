# Simple - Easy C# Solution

**Author:** slnkiharsh25
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/5905501/](https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/5905501/)

---



# Approach
- Check whether node is perfect or not.
- If yes, then count left and right tree height.
- If both are same, then enter in Priority Queue.
- If No, then return 0;

# Complexity
- Time complexity: O(N)
- Space complexity: O(1)

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
    public int KthLargestPerfectSubtree(TreeNode root, int k) {
        PriorityQueue<int, int> pq = new();
        CountNodes(root);

        return pq.Count < k  ? -1 : pq.Peek();

        int CountNodes(TreeNode node)        
        {
            if(node == null)
            {
                return 0;
            }

            int leftCount = CountNodes(node.left);
            int rightCount = CountNodes(node.right);

            if(IsPerfect(node) && leftCount == rightCount)
            {
                int totalCount = 1 + leftCount + rightCount;

                pq.Enqueue(totalCount, totalCount);
                if(pq.Count > k)
                {
                    pq.Dequeue();
                }
                return totalCount;
            }

            return 0;
        }

        bool IsPerfect(TreeNode node)
        {
            if(node == null)
            {
                return true;
            }

            if(node.left == null && node.right != null)
            {
                return false;
            }

            if(node.left != null && node.right == null)
            {
                return false;
            }

            return IsPerfect(node.left) && IsPerfect(node.right);
        }
    }
}
```