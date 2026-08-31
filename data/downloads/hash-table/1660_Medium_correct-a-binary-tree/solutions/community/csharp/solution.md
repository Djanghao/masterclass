# O(n) Single Traversal of Tree

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/correct-a-binary-tree/solutions/6012691/](https://leetcode.com/problems/correct-a-binary-tree/solutions/6012691/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Perform BFS, while storing parent, check if node's right is already iterated.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    public TreeNode CorrectBinaryTree(TreeNode root) {
        Dictionary<int, TreeNode> parent = new ();
        if (root == null)
        {
            return root;
        }
        Queue<TreeNode> q = new ();
        q.Enqueue(root);
        while(q.Count > 0)
        {
            int k = q.Count;
            HashSet<int> visited = new ();
            while(k-- > 0)
            {
                TreeNode node = q.Dequeue();
                if (node.right != null && visited.Contains(node.right.val))
                {
                    TreeNode p = parent[node.val];
                    if (p.left == node)
                    {
                        p.left = null;
                    } else {
                        p.right = null;
                    }
                    return root;
                }
                visited.Add(node.val);
                if (node.right != null)
                {
                    parent[node.right.val] = node;
                    q.Enqueue(node.right);
                }
                if (node.left != null)
                {
                    parent[node.left.val] = node;
                    q.Enqueue(node.left);
                }
            }
        }
        return root;
    }
}
```