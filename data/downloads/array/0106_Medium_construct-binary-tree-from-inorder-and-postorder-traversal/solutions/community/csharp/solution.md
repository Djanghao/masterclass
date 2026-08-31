# C# | Recursion

**Author:** SergiiCh
**Votes:** 8
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3302281/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3302281/)

---

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
    public TreeNode BuildTree(int[] inorder, int[] postorder) 
    {
        TreeNode? Build(Span<int> inorder, Span<int> postorder)
        {
            if (postorder.IsEmpty || inorder.IsEmpty)
            {
                return null;
            }

            var pos = inorder.IndexOf(postorder[^1]);
            return new TreeNode(postorder[^1])
            {
                left = Build(inorder[..pos], postorder[..pos]),
                right = Build(inorder[(pos + 1)..], postorder[pos..^1])
            };
        }

        return Build(inorder, postorder);
    }
}
```