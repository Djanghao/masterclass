# PHP solution

**Author:** turter2
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/320984/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/320984/)

---

been tried the few ways but all failed so I checked the discuss with some solutions, thanks everyone!

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
     * @return Integer[][]
     */
    
    private $data = array();
    
    function levelOrderBottom($root) {
        
        $this->getnodedata($root, 0);
        
        return array_reverse($this->data);
    }
    
    function getnodedata($node, $level) {
        
        if ($node->val !== null) {
            $this->data[$level][] = $node->val;
        }
        
        ($node->left === null) ?: $this->getnodedata($node->left, $level+1);
        ($node->right === null) ?: $this->getnodedata($node->right, $level+1);
    }
}
```