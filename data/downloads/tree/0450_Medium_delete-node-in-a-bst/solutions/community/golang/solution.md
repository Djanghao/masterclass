# Go solution with detailed explanation | O(H) Time Complexity | O(N) Space Complexity

**Author:** vibhushit
**Votes:** 6
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/4195844/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/4195844/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the code is to maintain the BST property while deleting a node with a given key. The three cases mentioned above are crucial for maintaining the structure of the BST after deletion. When a node with two children is encountered, finding the minimum value in the right subtree ensures that the replacement value maintains the BST property.
# Approach
<!-- Describe your approach to solving the problem. -->
The approach follows the principles of a BST:

1. If the key to be deleted is smaller than the root node's value, continue the search in the left subtree.
2. If the key is larger, continue the search in the right subtree.
3. When the key is found, handle three possible cases:
    - If the node to be deleted has no children, simply remove it.
    - If it has only one child, replace the node with that child.
    - If it has two children, find the minimum node in the right subtree, replace the node's value with that minimum value, and recursively delete the minimum node in the right subtree.

The code uses a recursive approach to traverse the tree while considering these cases.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this code is O(h), where h is the height of the BST.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
In the worst case, the space complexity is O(n), where n is the number of nodes in the BST.

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// Function to delete a node with the given key from the binary search tree.
func deleteNode(root *TreeNode, key int) *TreeNode {
    // If the root is nil, the tree is empty, and there's nothing to delete.
    if root == nil {
        return root
    } else if root.Val < key {
        // If the key is greater than the current node's value, we need to search in the right subtree.
        root.Right = deleteNode(root.Right, key)
    } else if root.Val > key {
        // If the key is smaller than the current node's value, we need to search in the left subtree.
        root.Left = deleteNode(root.Left, key)
    } else {
        // If we've found the node with the key, there are three cases to consider:
        if root.Left == nil && root.Right == nil {
            // 1. If the node has no children, it can be safely removed.
            return nil
        } else if root.Left == nil {
            // 2. If the node has only a right child, replace it with its right child.
            return root.Right
        } else if root.Right == nil {
            // 3. If the node has only a left child, replace it with its left child.
            return root.Left
        } else {
            // 4. If the node has both left and right children, find the minimum node in the right subtree,
            //    replace the current node's value with that minimum value, and recursively delete the
            //    minimum node in the right subtree.
            root.Val = findMin(root.Right)
            root.Right = deleteNode(root.Right, root.Val)
        }
    }
    return root
}

// Function to find the minimum value in a binary tree.
func findMin(node *TreeNode) int {
    minVal := node.Val

    // Traverse to the leftmost node to find the minimum value.
    for node != nil {
        if node.Val < minVal {
            minVal = node.Val
        }
        node = node.Left
    }

    return minVal
}

```