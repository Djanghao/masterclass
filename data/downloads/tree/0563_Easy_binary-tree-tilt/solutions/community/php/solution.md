# Simple recursion

**Author:** ll6dd
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/5671082/](https://leetcode.com/problems/binary-tree-tilt/solutions/5671082/)

---

# Code
```php []
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
    private $sum = 0;
    /**
     * @param TreeNode $root
     * @return Integer
     */
    function findTilt($root) {
        $this->dfs($root);
        return $this->sum;
    }
    function dfs($node) {
        if ($node === null) return 0;
        $left = $this->dfs($node->left);
        $right = $this->dfs($node->right);
        $this->sum += abs($left - $right);
        return $left + $node->val + $right;
    }
}
```