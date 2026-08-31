# [Kotlin] Recursive Approach for Binary Tree Construction (157ms)

**Author:** teogor
**Votes:** 3
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/5115440/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/5115440/)

---

# Intuition
To construct the binary tree from the inorder and postorder traversals, we can use a recursive approach. We know that in a postorder traversal, the last element is always the root of the tree. We can find this root in the inorder traversal to determine the left and right subtrees.

# Approach
1. Create a map to store the index of each value in the inorder array for efficient lookup.
2. Define a helper function `buildTreeHelper` to construct the tree recursively.
3. In the `buildTreeHelper` function:
   - Check if the current subtree is empty (base case), and if so, return null.
   - Get the value of the root node from the end of the postorder array.
   - Find the index of the root node in the inorder array.
   - Calculate the size of the left subtree based on the root index.
   - Recursively construct the left subtree using elements from the inorder and postorder arrays.
   - Recursively construct the right subtree using elements from the inorder and postorder arrays.
4. Return the root of the constructed tree.

# Complexity
- Time complexity: 
  - Building the index map takes O(n) time.
  - Constructing the tree recursively takes O(n) time.
  - Overall time complexity is O(n).

- Space complexity: 
  - The space complexity of the index map is O(n).
  - The recursive call stack can go up to O(n) in the worst case.
  - Overall space complexity is O(n).

# Code
```
class Solution {
    fun buildTree(inorder: IntArray, postorder: IntArray): TreeNode? {
        // Create a map to store the index of each value in the inorder array
        val indexMap = HashMap<Int, Int>()
        for (i in inorder.indices) {
            indexMap[inorder[i]] = i
        }
        
        // Call the helper function to construct the tree recursively
        return buildTreeHelper(inorder, postorder, indexMap, 0, inorder.size - 1, 0, postorder.size - 1)
    }
    
    // Helper function to construct the tree recursively
    private fun buildTreeHelper(inorder: IntArray, postorder: IntArray, indexMap: Map<Int, Int>, inStart: Int, inEnd: Int, postStart: Int, postEnd: Int): TreeNode? {
        if (inStart > inEnd || postStart > postEnd) {
            return null
        }
        
        // The root of the tree is the last element of the postorder array
        val rootValue = postorder[postEnd]
        val root = TreeNode(rootValue)
        
        // Find the index of the root in the inorder array
        val rootIndex = indexMap[rootValue] ?: return null
        
        // Calculate the number of elements in the left subtree
        val leftSubtreeSize = rootIndex - inStart
        
        // Construct the left subtree recursively
        root.left = buildTreeHelper(inorder, postorder, indexMap, inStart, rootIndex - 1, postStart, postStart + leftSubtreeSize - 1)
        
        // Construct the right subtree recursively
        root.right = buildTreeHelper(inorder, postorder, indexMap, rootIndex + 1, inEnd, postStart + leftSubtreeSize, postEnd - 1)
        
        return root
    }
}

```