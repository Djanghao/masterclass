# PHP Solution

**Author:** TasneemWahdan
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/3113863/](https://leetcode.com/problems/longest-univalue-path/solutions/3113863/)

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
    function longestUnivaluePath($root) {
        $res= 0;
        $this->dfs($root, $res);
        return $res;
    }

    function dfs($root, &$res){
        if($root == null)
            return 0;
        $left = $this->dfs($root->left, $res);
        $right = $this->dfs($root->right, $res);

        $leftMax = 0;
        $rightMax = 0;

        if($root->left && $root->left->val == $root->val){
           $leftMax += $left + 1;
        }
        if($root->right && $root->right->val == $root->val){
            $rightMax += $right + 1;
        }
        $res = max($res, $leftMax + $rightMax);
        return max($leftMax, $rightMax);
    }
}
```