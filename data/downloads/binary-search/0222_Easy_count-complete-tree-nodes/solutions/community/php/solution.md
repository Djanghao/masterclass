# self recursive easy

**Author:** oriann
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/5522670/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/5522670/)

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
     * @return Integer
     */
    function countNodes($root) {
        $total=!empty($root)?1:0;
        
        if(!empty($root->right))
            $total += $this->countNodes($root->right);
        if(!empty($root->left))
            $total += $this->countNodes($root->left);
        
        return $total;
    }
}
```