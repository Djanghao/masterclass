# PHP

**Author:** turter2
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/287875/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/287875/)

---

```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */
class Solution {

    /**
     * @param TreeNode $root
     * @return Integer
     */
    function maxDepth($root) {
        
        if ($root === null) {
            return 0;
        }
        
        $left = $this->maxDepth($root->left)+1;
        $right = $this->maxDepth($root->right)+1;
        
        return ($left > $right) ? $left : $right;
    }
}
```

one line 

```
return (($root->val === null) ? 0 : max($this->maxDepth($root->left)+1, $this->maxDepth($root->right)+1));
```