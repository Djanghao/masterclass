# "Recursive Post order Traversal to Remove Target Leaf Nodes in a Binary Tree"

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5170475/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5170475/)

---

# Intuition
The initial thought to solve this problem is to traverse the tree and remove leaf nodes with the given target value. A postorder traversal (left-right-root) is suitable because it ensures that we first deal with the children before considering the parent. This way, after removing a leaf node, we can immediately check if its parent has also become a leaf node with the target value and handle it accordingly.

# Approach
1. Postorder Traversal: Recursively traverse the tree in postorder.
2. Leaf Node Check: For each node, after handling its children, check if it has become a leaf node and if its value equals the target.
3. Remove Node: If it is a leaf node with the target value, return null to indicate the node should be removed.
4. Return Node: If the node is not removed, return the node itself.

# Complexity
- Time complexity: O(n) where n is the number of nodes in the tree. Each node is visited once.

- Space complexity: O(h) where h is the height of the tree. This is the maximum space used by the call stack during the recursion.

# Code
```
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
     * @param TreeNode $root
     * @param Integer $target
     * @return TreeNode
     */
    function removeLeafNodes($root, $target) {
        // Base case: if the root is null, return null
        if ($root === null) {
            return null;
        }

        // Recursively remove leaf nodes from the left and right subtrees
        $root->left = $this->removeLeafNodes($root->left, $target);
        $root->right = $this->removeLeafNodes($root->right, $target);

        // If the current node becomes a leaf node and its value is the target, remove it
        if ($root->left === null && $root->right === null && $root->val === $target) {
            return null;
        }

        // Return the current node if it's not removed
        return $root;
    }
}
```