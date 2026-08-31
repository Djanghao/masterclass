# 0ms solution

**Author:** zejdcicak
**Votes:** 1
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/5236434/](https://leetcode.com/problems/invert-binary-tree/solutions/5236434/)

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
     * @return TreeNode
     */
    function invertTree(?TreeNode $node): TreeNode|array
    {
        if ($node === null) {
            return [];
        }

        [$node->left, $node->right] = [$node->right, $node->left];
        
        $this->invertTree($node->left);
        $this->invertTree($node->right);
    

        return $node;
    }
}
```