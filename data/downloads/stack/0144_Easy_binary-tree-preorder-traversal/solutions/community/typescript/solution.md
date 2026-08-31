# Recursive Preorder Traversal of a Binary Tree in JavaScript and TypeScript

**Author:** akhi1N
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/5929558/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/5929558/)

---

# Intuition
Preorder traversal follows the pattern: **root -> left -> right**. This means we first visit the root node, then recursively visit the left subtree, followed by the right subtree. The goal is to ensure we traverse all nodes in this order.

# Approach
We use a simple recursive approach. If the current node (`root`) is `null`, we return an empty array. Otherwise, we return an array that includes the current node's value (`root.val`) followed by recursively traversing the left and right subtrees.

The `...` operator is used to concatenate the values returned from left and right subtree traversals.

# Complexity
- Time complexity:  
  The time complexity is $$O(n)$$, where $$n$$ is the number of nodes in the tree, since we visit each node exactly once.

- Space complexity:  
  The space complexity is $$O(n)$$ due to the recursive call stack in a worst-case scenario, which happens when the tree is completely unbalanced (e.g., a tree where every node only has one child).
  
  In the best case (a balanced tree), the space complexity would be $$O(\\log n)$$ because the depth of the recursion tree is proportional to the height of the tree.

# Code
```javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if( !root ) return [];
    return [ 
        root.val , 
        ...preorderTraversal(root.left) , 
        ...preorderTraversal(root.right)
        ]
};


```

```TypeScript []

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

function preorderTraversal(root: TreeNode | null): number[] {
    if( !root ) return [];
    return [
        root.val ,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right)
    ]
};
```