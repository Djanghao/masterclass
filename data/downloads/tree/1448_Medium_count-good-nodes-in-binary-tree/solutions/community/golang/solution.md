# Go Solution | Easy Explanation | DFS | O(N) Time | O(H) Space

**Author:** vibhushit
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/4067028/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/4067028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We want to count the number of "good nodes" in a binary tree. A good node is defined as a node whose value is greater than or equal to the maximum value encountered on the path from the root to that node. We can use a depth-first search (DFS) approach to traverse the tree and keep track of the maximum value while counting good nodes.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Define a helper function dfs that takes a node and the maximum value encountered so far as parameters.

2. Inside the dfs function:

  - If the current node is nil, return without processing (base case).
  - If the current node's value is greater than or equal to the maximum value encountered so far (max), update max and increment the count to indicate a good node.
  - Recursively call dfs on the left and right subtrees with the updated max value.
3. Start the DFS traversal from the root node with its value as the initial maximum value.

4. After the traversal is complete, return the total count of good nodes.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N), where N is the number of nodes in the binary tree. We visit each node once during the DFS traversal.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(H), where H is the height of the binary tree. This is the space required for the recursive call stack, and in the worst case (for a skewed tree), it can be O(N).

# Code
```
func goodNodes(root *TreeNode) int {
    var count int // Initialize a variable to count good nodes.

    // Define a helper function for the recursive traversal.
    var dfs func(node *TreeNode, max int)

    // The dfs function performs a depth-first search traversal of the binary tree.
    dfs = func(node *TreeNode, max int) {
        if node == nil {
            return // Base case: If the node is nil, return without processing.
        }

        if node.Val >= max {
            max = node.Val   // Update the maximum value encountered so far.
            count++          // Increment the count to indicate a good node.
        }

        // Recursively traverse the left and right subtrees with the updated max value.
        dfs(node.Left, max)
        dfs(node.Right, max)
    }

    dfs(root, root.Val) // Start the traversal with the root node and its value.

    return count // Return the total count of good nodes in the binary tree.
}
```