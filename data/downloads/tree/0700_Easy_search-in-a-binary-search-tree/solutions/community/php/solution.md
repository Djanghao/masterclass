# PHP solution

**Author:** ypylypenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/427358/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/427358/)

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
     * @param Integer $val
     * @return TreeNode
     */
    function searchBST($root, $val) {
        if($root == null || $root->val == $val) {
          return $root;
        }

        if($val < $root->val) {
          return $this->searchBST($root->left, $val);
        }

        if($val > $root->val) {
          return $this->searchBST($root->right, $val);
        }
    }
}
```