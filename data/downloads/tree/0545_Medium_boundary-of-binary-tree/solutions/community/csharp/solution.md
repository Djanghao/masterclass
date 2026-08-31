# C# Simple Recursive DFS

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/3363731/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/3363731/)

---

```
public class Solution
{
    public IList<int> BoundaryOfBinaryTree(TreeNode root)
    {
        var result = new List<int>();
        result.Add(root.val);

        Dfs(root.left, true, false);
        Dfs(root.right, false, true);

        return result;

        void Dfs(TreeNode node, bool leftBoundary, bool rightBoundary)
        {
            if (node == null)
            {
                return;
            }

            // leaf
            if (node.left == null && node.right == null)
            {
                result.Add(node.val);
                return;
            }

            // preorder
            if (leftBoundary)
            {
                result.Add(node.val);
            }

            var hasLeft = node.left != null;
            var hasRight = node.right != null;

            Dfs(node.left, hasLeft && leftBoundary, !hasRight && rightBoundary);
            Dfs(node.right, !hasLeft && leftBoundary, hasRight && rightBoundary);

            // postorder
            if (rightBoundary)
            {
                result.Add(node.val);
            }
        }
    }
}
```