# C# easy and udnerstanding solution

**Author:** TabrizGulmammadov
**Votes:** 13
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/3192136/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/3192136/)

---

# Approach
We will use a fact which the first element of `preorder` array is root node. Always, elements will be left subtree of the root node which are settled till this root node in `inorder` array.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
public class Solution {
    public TreeNode BuildTree(int[] preorder, int[] inorder) {
        if(preorder is null || !preorder.Any() ||
           inorder is null || !inorder.Any()) return null;

        TreeNode root = new TreeNode(preorder[0]);
        int middle = Array.IndexOf(inorder, preorder[0]);
        root.left = BuildTree(preorder[1..(middle+1)], inorder[..middle]);
        root.right = BuildTree(preorder[(middle+1)..], inorder[(middle+1)..]);
        
        return root;
    }
}
```