# Solution Sum of Root To Leaf Binary Numbers

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/4863395/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/4863395/)

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
    function sumRootToLeaf($root) {
        return $this->dfs($root, 0);
    }
    
    function dfs($node, $sum) {
        if ($node == null) return 0;
        
        $sum = ($sum << 1) + $node->val;
        
        if ($node->left == null && $node->right == null) {
            return $sum;
        }
        
        return $this->dfs($node->left, $sum) + $this->dfs($node->right, $sum);
    }
}

```