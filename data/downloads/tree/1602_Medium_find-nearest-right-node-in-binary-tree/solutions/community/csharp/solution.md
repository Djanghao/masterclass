# C# | Level by level order traversal | LinkedList<T>

**Author:** jianminchen
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/4061721/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/4061721/)

---

Sept. 18, 2023
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
I like to use C# LinkedList<T> to simulate a queue, and then apply level by level order traversal to search for the given node u. 

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
    public TreeNode FindNearestRightNode(TreeNode root, TreeNode u)
        {
            if (root == null || u == null)
            {
                return null; 
            }

            var queue = new LinkedList<TreeNode>();
            queue.AddFirst(root);

            while (queue.Any())
            {
                var nextQueue = new LinkedList<TreeNode>();
                while (queue.Any())
                {
                    var node = queue.First.Value;
                    queue.RemoveFirst();

                    // Found u 
                    if (node == u)
                    {
                        if (queue.Any())
                        {
                            return queue.First.Value;
                        }
                        else
                        {
                            return null; 
                        }
                    }

                    if (node.left != null)
                    {
                        nextQueue.AddLast(node.left);
                    }

                    if (node.right != null)
                    {
                        nextQueue.AddLast(node.right);
                    }
                }

                queue = nextQueue; 
            }

            return null; 
        }
}
```