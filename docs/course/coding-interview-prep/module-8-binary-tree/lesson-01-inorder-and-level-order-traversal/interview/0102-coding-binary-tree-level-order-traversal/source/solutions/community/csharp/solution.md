# O(n) Time O(n) Space

**Author:** d_johnson
**Votes:** 12
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/3142782/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/3142782/)

---

# Intuition
This is a standard Tree traversal. There are two types of tree traversals, BFS and DFS. DFS can be broken out into 3 other traversals, InOrder, PreOrder, and PostOrder. This is a BFS, level order traversal.

Two simple ways would be recursively and iteratively. I find recursive to be awkward for BFS so I prefer iterative. At each level, the queue count dictates the number of nodes on that level.

# Approach
1. Use a Queue
2. At each level, track the queue count and then iterate through that many nodes for just that level
3. Add nodes to the current level of the result and Enqueue the left/right nodes for the upcoming level
4. Advance the level

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
Best case: Skewed Binary Tree: $$O(1)$$. At each level, you would enqueue only 1 node.
Worse case: Perfect Binary Tree: $$O((n-1)/2 + 1)$$ ~ $$O(n)$$. Imagine there are 7 nodes in the tree. In a perfect binary tree, that would mean 4 nodes on the 3rd level which means the queue will have at most 6/2 + 1 nodes. For 15 nodes, that's 8 nodes on the 4th level, which means the queue will have at most 14/2 + 1 nodes. Regardless, it's still $$O(n)$$, but could be worth mentioning that you understand the queue never contains more nodes than the max level in a perfect binary tree.

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
    public IList<IList<int>> LevelOrder(TreeNode root) {
        IList<IList<int>> result = new List<IList<int>>();
        if (root == null) {
            return result;
        }

        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);

        while (queue.Count > 0) {
            int count = queue.Count;
            List<int> level = new List<int>();

            for (int i = 0; i < count; i++) {
                TreeNode cur = queue.Dequeue();
                level.Add(cur.val);

                if (cur.left != null) {
                    queue.Enqueue(cur.left);
                }
                if (cur.right != null) {
                    queue.Enqueue(cur.right);
                }
            }

            result.Add(level);
        }

        return result;
    }
}
```