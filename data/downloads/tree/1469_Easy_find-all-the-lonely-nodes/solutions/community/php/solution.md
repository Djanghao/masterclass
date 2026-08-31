# PHP Solution

**Author:** the_living_tribunal
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/782595/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/782595/)

---

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
    protected array $orphans = [];
    
    /**
     * @param TreeNode $root
     * @return Integer[]
     */
    function getLonelyNodes(TreeNode $root) : array
	{
        $this->traverse($root);
                
        return $this->orphans;
    }
    
    function traverse(TreeNode $node) : void
    {
        if(!$node){
            return;
        }
        
        if((empty($node->left->val) && !empty($node->right->val))) {
            $this->orphans[] = $node->right->val;
        }elseif(empty($node->right->val) && !empty($node->left->val)){
            $this->orphans[] = $node->left->val;
        } 

        $left = $this->traverse($node->left);
        $right = $this->traverse($node->right);        
    }    
}
```