# PHP Solution

**Author:** TasneemWahdan
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/3276270/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/3276270/)

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
    function maxPathSum($root) {
        $res = PHP_INT_MIN;
        $this->dfs($root, $res);
        return $res;        
    }

    function dfs($root, &$res){
        if(!$root){
            return 0;
        }
        $leftPath = max($this->dfs($root->left, $res), 0);
        $rightPath = max($this->dfs($root->right, $res), 0);
        $res =max($res, $leftPath + $root->val + $rightPath );
        return  max($leftPath + $root->val, $rightPath + $root->val);
    }
}

```