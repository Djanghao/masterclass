# C#, simple recursive DFS solution

**Author:** edevyatkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/969318/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/969318/)

---

```
public class Solution {
    public TreeNode SubtreeWithAllDeepest(TreeNode root) {
        var newRoot = DFS(root, 0);
        return newRoot.Node;
    }
    
    private (TreeNode Node, int MaxDepth) DFS(TreeNode node, int depth) {
        if (node == null)
            return (node, depth-1);
        var left = DFS(node.left, depth+1);
        var right = DFS(node.right, depth+1);
        if (left.MaxDepth > right.MaxDepth)
            return (left.Node, left.MaxDepth);
        else if (left.MaxDepth < right.MaxDepth)
            return (right.Node, right.MaxDepth);
        else
            return (node, right.MaxDepth);
    }
}
```