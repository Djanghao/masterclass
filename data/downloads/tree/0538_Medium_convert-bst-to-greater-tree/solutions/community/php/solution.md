# Depth First Search, Sum all right side Nodes first

**Author:** phg_pih
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/5366135/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/5366135/)

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

    private $sumTracking = 0;

    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    function convertBST($root) {
        if ($root->val === null) return;

        // calculate for right
        $this->convertBST($root->right);

        // update value for root
        $this->sumTracking += $root->val;
        $root->val = $this->sumTracking;
        
        // calculate for left
        $this->convertBST($root->left);

        return $root;        
    }
}
```
```javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root, sumTracking = [0]) {
    if (root === null) return root;

    // calculate for right
    convertBST(root.right, sumTracking);

    // update value for root
    sumTracking[0] += root.val;
    root.val = sumTracking[0];
    
    // calculate for left
    convertBST(root.left, sumTracking);

    return root; 
};
```
