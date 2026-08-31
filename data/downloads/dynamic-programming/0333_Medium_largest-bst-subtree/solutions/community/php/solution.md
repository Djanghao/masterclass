# PHP - Post-Order Traversal

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/5652766/](https://leetcode.com/problems/largest-bst-subtree/solutions/5652766/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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

class NodeValue {
    public $minNode;
    public $maxNode;
    public $maxSize;

    public function __construct($minNode, $maxNode, $maxSize) {
        $this->minNode = $minNode;
        $this->maxNode = $maxNode;
        $this->maxSize = $maxSize;
    }
}

class Solution {

    /**
     * @param TreeNode $root
     * @return Integer
     */
   function largestBSTSubtreeHelper($root) {
        // An empty tree is a BST of size 0.
        if (!$root) {
            return new NodeValue(PHP_INT_MAX, PHP_INT_MIN, 0);
        }

        // Get values from left and right subtree of current tree.
        $left = $this->largestBSTSubtreeHelper($root->left);
        $right = $this->largestBSTSubtreeHelper($root->right);

        // Current node is greater than max in left AND smaller than min in right, it is a BST.
        if ($left->maxNode < $root->val && $root->val < $right->minNode) {
            // It is a BST.
            return new NodeValue(
                min($root->val, $left->minNode),
                max($root->val, $right->maxNode),
                $left->maxSize + $right->maxSize + 1
            );
        }

        // Otherwise, return [-inf, inf] so that parent can't be valid BST
        return new NodeValue(PHP_INT_MIN, PHP_INT_MAX, max($left->maxSize, $right->maxSize));
    }

    function largestBSTSubtree($root) {
        return $this->largestBSTSubtreeHelper($root)->maxSize;
    }
}


```