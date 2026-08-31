# 🧩 C# Recursive Divide-and-Conquer

**Author:** ivanvinogradov207
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/5957993/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/5957993/)

---

## Intuition:
In postorder traversal, the last element is always the root of the subtree. Using the position of this root in the inorder traversal, we can split the tree into left and right subtrees and recursively build each part.

## Approach:
- Start by taking the last element of the postorder array, which is the root of the subtree.
- Find the root's position in the inorder array. This splits the array into left and right subtrees.
- Use recursion to build the left and right subtrees.
- A dictionary is used to store the indices of elements in the inorder array for fast lookups.

## Time complexity:
$$O(n)$$, where `n` is the number of nodes. We traverse each node exactly once, and each lookup in the dictionary is done in constant time.

## Space complexity:
$$O(n)$$, because we need space for the recursion stack and the dictionary storing the inorder indices.

# Code
```csharp []
public class Solution {
    
    private int[] preorder;
    private Dictionary<int, int> postIndecies = new Dictionary<int, int>();
    
    public TreeNode ConstructFromPrePost(int[] preorder, int[] postorder) {
        var n = preorder.Length;

        this.preorder = preorder;
        for (int i = 0; i < n; i++)
            postIndecies[postorder[i]] = i;

        return BuildTree(0, n-1, 0, n-1);
    }

    private TreeNode BuildTree(int preStart, int preEnd, int postStart, int postEnd)
    {
        if (preStart > preEnd || postStart > postEnd)
            return null;

        var root = new TreeNode(preorder[preStart]);

        if (preStart == preEnd)
            return root;

        var leftSize = postIndecies[preorder[preStart+1]] - postStart + 1;
        
        root.left = BuildTree(preStart+1, preStart+leftSize, postStart, postStart+leftSize-1);
        root.right = BuildTree(preStart+1+leftSize, preEnd, postStart+leftSize, postEnd-1);

        return root;
    }
}
```