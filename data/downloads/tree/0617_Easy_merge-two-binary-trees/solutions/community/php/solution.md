# Beats 95.86% in Python3 (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/5407691/](https://leetcode.com/problems/merge-two-binary-trees/solutions/5407691/)

---

# Approach
Recursive Depth-First Search (DFS) approach.

The function mergeTrees recursively traverses the input trees in a depth-first manner by first merging the current nodes, then recursively merging the left subtrees, and finally recursively merging the right subtrees.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of nodes in the merged tree. This is because the function performs a depth-first traversal of the input trees, visiting each node exactly once.

- Space complexity:
$$O(h)$$, where h is the height of the merged tree. This is because the function creates a new node for each node in the merged tree, and the height of the merged tree is at most the maximum of the heights of the input trees.

# Code
``` python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        # If the first tree is empty, return the second tree
        if not root1:
            return root2
        # If the second tree is empty, return the first tree
        if not root2:
            return root1

        # Create a new node with the sum of the values of the roots of the input trees
        merged = TreeNode(root1.val + root2.val)
        # Recursively merge the left and right subtrees of the input trees and assign the result 
        # to the left and right children of the merged node
        merged.left = self.mergeTrees(root1.left, root2.left)
        merged.right = self.mergeTrees(root1.right, root2.right)

        return merged

```
``` javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // If the first tree is empty, return the second tree
    if (!root1) return root2;
    // If the second tree is empty, return the first tree
    if (!root2) return root1;

    // Create a new node with the sum of the values of the roots of the input trees
    const merged = new TreeNode(root1.val + root2.val);
    // Recursively merge the left and right subtrees of the input trees and assign the result 
    // to the left and right children of the merged node
    merged.left = mergeTrees(root1.left, root2.left);
    merged.right = mergeTrees(root1.right, root2.right);

    return merged;
};
```
``` php []
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param TreeNode $root1
     * @param TreeNode $root2
     * @return TreeNode
     */
    function mergeTrees($root1, $root2) {
        // If the first tree is empty, return the second tree
        if ($root1 === null) {
            return $root2;
        }
        // If the second tree is empty, return the first tree
        if ($root2 === null) {
            return $root1;
        }

        // Create a new node with the sum of the values of the roots of the input trees
        $merged = new TreeNode($root1->val + $root2->val);
        // Recursively merge the left and right subtrees of the input trees and assign the result 
        // to the left and right children of the merged node
        $merged->left = $this->mergeTrees($root1->left, $root2->left);
        $merged->right = $this->mergeTrees($root1->right, $root2->right);

        return $merged;
    }
}
```