# C#, beats 97% (Time complexity: O(n), Space complexity: O(h)

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/5667252/](https://leetcode.com/problems/binary-tree-upside-down/solutions/5667252/)

---


```csharp []
public class Solution {
    public TreeNode UpsideDownBinaryTree(TreeNode root) {
        // Base case: If the root is null or a leaf node
        if (root == null || root.left == null) {
            return root;
        }
        
        // Recursively process the left subtree
        TreeNode newRoot = UpsideDownBinaryTree(root.left);
        
        // Rearrange the nodes
        root.left.left = root.right;
        root.left.right = root;
        root.left = null;
        root.right = null;
        
        return newRoot;
    }
}

```