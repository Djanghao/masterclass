# C#, beats 97%

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/5667238/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/5667238/)

---


```csharp []
public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) {
            return root;
        }

        TreeNode left = LowestCommonAncestor(root.left, p, q);
        TreeNode right = LowestCommonAncestor(root.right, p, q);

        return left != null && right != null ? root : left ?? right;
    }
}

```