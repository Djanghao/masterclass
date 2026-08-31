# C# Solution

**Author:** DKXVRT
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/5960304/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/5960304/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

1. Do a bfs on the tree, setting the min to the frst node and secondMin to -1. 
2. If a node is less than the min, the new min is the node, and the new secondMin is the past min
3. return the secondMin

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(d)$
There will be at most $d$ nodes in the queue, d represents the maximum number of nodes at a given depth in the binary tree

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
    public int FindSecondMinimumValue(TreeNode root) {
        int min = root.val, smin = -1;
        int level = 0;
        Queue<TreeNode> q = new Queue<TreeNode>();
        q.Enqueue(root);
        while(q.Count() > 0) {
            TreeNode c = q.Dequeue();
            if(c.left != null) q.Enqueue(c.left);
            if(c.right != null) q.Enqueue(c.right);

            // setting new mins
            if(c.val > min && (smin == -1 || c.val < smin)) smin = c.val;
            else if(c.val < min) {
                smin = min;
                min = c.val;
            }
            level++;
        }
        return smin;

    }
}
```