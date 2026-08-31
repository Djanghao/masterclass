# Simple recursive solution - PHP

**Author:** amroweh
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4379617/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4379617/)

---

# Approach
Perform a simple traversal while creating the open parenthesis before the next recursive call and the close parenthesis after it. In the case where there exists a right node but NOT a left node, need to append '()'.

Passed reference for string to concatenate on every step.

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
     * @return String
     */
    function tree2str($root) {
        $res = '';
        $this->preOrder($root, $res);        
        return $res;
    }

    function preOrder($root, &$res){
        if(is_null($root)) return;
        $res.=$root->val;     

        if($root->left) $res.='(';        
        $this->preOrder($root->left, $res);
        if($root->left) $res.=')';
        else if($root->right) $res.='()';

        if($root->right) $res.='(';        
        $this->preOrder($root->right, $res);
        if($root->right) $res.=')';                               
    }
}
```