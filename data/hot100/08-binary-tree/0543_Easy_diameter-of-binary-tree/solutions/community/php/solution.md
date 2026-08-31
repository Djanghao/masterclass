# Recursive PHP solution

**Author:** aleks-samurai
**Votes:** 2
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/2995207/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/2995207/)

---

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

    private $max = 0;
    
    /**
     * @param TreeNode $root
     * @return Integer
     */

    function diameterOfBinaryTree($root) {
        $this->recursive($root);
        return $this->max;
    }

    function recursive($node) {
        if($node == null) return 0;

        $left = $node->left == null ? 0 : 1 + $this->recursive($node->left);
        $right = $node->right == null ? 0 : 1 + $this->recursive($node->right);
        $this->max = max($left + $right, $this->max);

        return max($left, $right);
    }
}
```