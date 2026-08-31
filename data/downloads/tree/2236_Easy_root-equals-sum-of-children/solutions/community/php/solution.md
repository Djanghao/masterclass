# Fix documentation before

**Author:** neiyoster
**Votes:** 3
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/3783934/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/3783934/)

---

# Fix documentation
Properties of TreeNode were not type hinted, after fixing this, solution is easy!

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public TreeNode $left = null;
 *     public TreeNode $right = null;
 *     function __construct($val = 0, TreeNode $left = null, TreeNode $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param TreeNode $root
     * @return Boolean
     */
    function checkTree(TreeNode $root) {
        return $root->val === ($root->left->val + $root->right->val);
    }
}
```