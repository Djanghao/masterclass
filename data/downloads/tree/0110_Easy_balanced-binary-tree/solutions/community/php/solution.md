# Balanced Binary Tree in php

**Author:** SANJOY_G91827
**Votes:** 1
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/3759282/](https://leetcode.com/problems/balanced-binary-tree/solutions/3759282/)

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
class Solution {

    /**
     * @param TreeNode $root
     * @return Boolean
     */
    function isBalanced($root) {
         if ($root === null) {
            return true; // An empty tree is balanced
        }

        $leftHeight = $this->getHeight($root->left);
        $rightHeight = $this->getHeight($root->right);

        if (abs($leftHeight - $rightHeight) > 1) {
            return false; // Heights of left and right subtrees differ by more than 1, not balanced
        }

        // Check if left and right subtrees are balanced
        return $this->isBalanced($root->left) && $this->isBalanced($root->right);
    }

    function getHeight($node) {
        if ($node === null) {
            return 0; // Height of an empty tree is 0
        }

        $leftHeight = $this->getHeight($node->left);
        $rightHeight = $this->getHeight($node->right);

        return max($leftHeight, $rightHeight) + 1;
    }
}

$root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(3,
            new TreeNode(4),
            new TreeNode(4)
        ),
        new TreeNode(3)
    ),
    new TreeNode(2)
);

$solution = new Solution();
$result = $solution->isBalanced($root);
echo $result ? "true" : "false"; 
```