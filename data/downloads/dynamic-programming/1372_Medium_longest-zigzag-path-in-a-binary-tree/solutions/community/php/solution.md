# Simple PHP solution with recursion. Beats 100% at the moment)) But you can improve it!

**Author:** Vlados117
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3786895/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3786895/)

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
    
    /**
     * @param TreeNode $root
     * @return Integer
     */
    function longestZigZag($root) {
        $res = $this->helper($root);
        return $res;
    }

    function helper($root, $counter = 0, $side = null) {
        if (!$root) return $counter;

        if ($side == null) {
            $right = $this->helper($root->right, 0, 'from right');
            $left = $this->helper($root->left, 0, 'from left');
        } elseif($side == 'from right') {
            $counter++;
            $temp =$root->right->val;
            $right = $this->helper($root->right, 0, 'from right');
            $left = $this->helper($root->left, $counter, 'from left');
        } elseif ($side == 'from left') {
            $counter++;
            $right = $this->helper($root->right, $counter, 'from right');
            $left = $this->helper($root->left, 0, 'from left');
        }

        return $right > $left ? $right: $left;
    }
}
```