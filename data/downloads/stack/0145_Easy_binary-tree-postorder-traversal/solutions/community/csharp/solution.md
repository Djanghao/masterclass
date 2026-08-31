# С#, iterative solution using Stack

**Author:** edevyatkin
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/516868/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/516868/)

---

```
public class Solution {
    public IList<int> PostorderTraversal(TreeNode root) {
        List<int> result = new List<int>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode lastNodeVisited = null;
        while (stack.Count != 0 || root != null) {
            if (root != null) {
                stack.Push(root);
                root = root.left;
            } else {
                TreeNode node = stack.Peek();
                if (node.right != null && lastNodeVisited != node.right) {
                    root = node.right; 
                } else {
                    result.Add(node.val);
                    lastNodeVisited = stack.Pop();
                }
            }
        }
        return result;
    }
}
```