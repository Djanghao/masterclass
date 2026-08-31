# Recursive Approach

**Author:** bajinatu1234
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/4978106/](https://leetcode.com/problems/binary-tree-upside-down/solutions/4978106/)

---

# Intuition
this solution intuitively hint towards a dfs approach.

# Approach
-We starts by checking if the current node root is null or if its left child is null. If either condition is true, it means we have reached the bottom of the tree or the current node has no left child, indicating that it's the new root. In such cases, we simply return the current node root.

- If the base case is not met, we recursively call the upsideDownBinaryTree function for the left child of the current node. This recursive call traverses down the left subtree until it reaches the leftmost node, which will become the new root of the upside-down tree.
- Once the recursive call returns, we start updating the links between nodes to turn the tree upside down. Here's how the links are updated:

The left child of the current root node's left child (original left child) becomes the right child of the root node.
The left child of the root node's left child (original left child) becomes the new root.
Both the left and right children of the root node are set to null, as they will become the leaves of the upside-down tree.

- Finally, we return the new root of the upside-down tree, which is the leftmost node of the original tree.



# Complexity
- Time complexity:
Time complexity is O(n) as we visit all the nodes

- Space complexity:
Space Complexity is O(h) where h is the number of recursive call stacks

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function upsideDownBinaryTree(root: TreeNode | null): TreeNode | null {
       if (!root || !root.left) {
        return root;
    }

    // Recursively call the function for the left child
    const newRoot = upsideDownBinaryTree(root.left);

    // Update the links
    root.left.left = root.right;
    root.left.right = root;
    root.left = null;
    root.right = null;

    return newRoot; 
};
```