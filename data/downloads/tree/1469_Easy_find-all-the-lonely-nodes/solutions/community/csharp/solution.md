# [Made Simple] C# Solution

**Author:** TheSnappl
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/5051358/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/5051358/)

---

# Intuition and Approach
- Use a queue to iteratively traverse through the given tree.
- At each node determine whether its children are lonely nodes.

# Complexity
- Time complexity: $O(N)$

- Space complexity: $O(N)$

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
    public IList<int> GetLonelyNodes(TreeNode root) 
    {
        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);

        var lonelyNodes = new List<int>();

        while(queue.Count > 0)
        {
            var currentNode = queue.Dequeue();
            DetermineAndAddLonelyNodesFromParent(currentNode, lonelyNodes);

            if (currentNode.left is not null)
            {
                queue.Enqueue(currentNode.left);
            }

            if (currentNode.right is not null)
            {
                queue.Enqueue(currentNode.right);
            }
        }

        return lonelyNodes;
    }

    private static void DetermineAndAddLonelyNodesFromParent(TreeNode parent, IList<int> lonelyNodes)
    {
        if (parent.left is null && parent.right is not null)
        {
            lonelyNodes.Add(parent.right.val);
        }
        else if(parent.left is not null && parent.right is null)
        {
            lonelyNodes.Add(parent.left.val);
        }
    }
}
```