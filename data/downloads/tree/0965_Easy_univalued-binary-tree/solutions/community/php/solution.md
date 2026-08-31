# Easy Solution

**Author:** user0919Ie
**Votes:** 0
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/5821614/](https://leetcode.com/problems/univalued-binary-tree/solutions/5821614/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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

    /**
     * @param TreeNode $root
     * @return Boolean
     */
    function isUnivalTree($root) {
         return $this->isUnivalTreeHelper($root, $root->val);
    }

    function isUnivalTreeHelper($node, $value) {
        if ($node === null) {
            return true;
        }
        
        if ($node->val !== $value) {
            return false;
        }
        
        return $this->isUnivalTreeHelper($node->left, $value) && $this->isUnivalTreeHelper($node->right, $value);
    }
}
```