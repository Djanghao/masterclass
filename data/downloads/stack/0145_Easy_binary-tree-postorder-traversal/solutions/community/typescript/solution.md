# Only one line Typescript solution (DFS / Recursive )

**Author:** lyxuansang91
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/5686451/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/5686451/)

---

# Intuition
In postorder traversal, the nodes are recursively visited in the following order:
- Left subtree
- Right subtree
- Root node

# Approach
- If the left child is not `null`, we continue down the left side of the tree, processing all its children in the same manner. Once the left subtree has been fully traversed, we move to the right child of the current node and repeat the process. Finally, after both the left and right subtrees have been explored, we process the current node itself by adding its value to our result list.

- The base case in this recursion is when the current node is `null`, which signifies that we have attempted to visit a leaf node's nonexistent child, indicating there is no further subtree to explore. At this point, we simply return without adding anything to our result and backtrack to the leaf node.

# Complexity
- Time complexity: $$O(N)$$

- Space complexity: $$O(N)$$


# Code
```typescript []
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

function postorderTraversal(root: TreeNode | null): number[] {
    return !root ? [] : [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};
```