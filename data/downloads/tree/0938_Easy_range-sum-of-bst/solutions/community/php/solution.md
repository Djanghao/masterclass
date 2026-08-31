# PHP recursive

**Author:** hdsjfhsdkjh
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/896365/](https://leetcode.com/problems/range-sum-of-bst/solutions/896365/)

---

Runtime: 116 ms, faster than 56.67% of PHP online submissions for Range Sum of BST.
Memory Usage: 23.2 MB, less than 56.67% of PHP online submissions for Range Sum of BST.

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
     * @param Integer $L
     * @param Integer $R
     * @return Integer
     */
    function rangeSumBST($root, $L, $R) {
        if ($root == null) return 0;
        
        $sum = 0;
        $sum += $this->rangeSumBST($root->left, $L, $R);
        $sum += $this->rangeSumBST($root->right, $L, $R);

        if ($root->val >= $L && $root->val <= $R) $sum += $root->val;
        
        return $sum;
    } 
}```