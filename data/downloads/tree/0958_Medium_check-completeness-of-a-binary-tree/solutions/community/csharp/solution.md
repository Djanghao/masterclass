# C# - BFS | Easiest Solution | Beats 96%

**Author:** ansche
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3298514/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3298514/)

---

# Intuition
In breadth first search, a complete tree will have no non-null nodes after the first one.

# Approach
Add all nodes and their children to the bfs queue. When we dequeue the first null node, check if anything left in queue is non-null. If there are, we don't have a complete tree.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
public class Solution {
    public bool IsCompleteTree(TreeNode root) {
        
        Queue<TreeNode> bfs = new Queue<TreeNode>();
        bfs.Enqueue(root);

        while (bfs.Any())
        {
            var node = bfs.Dequeue();

            if (node == null)
                return !bfs.Any(x => x != null);

            bfs.Enqueue(node.left);
            bfs.Enqueue(node.right);                    
        }
        return false;
    }
}
```