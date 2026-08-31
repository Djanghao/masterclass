# PHP || 100% memory

**Author:** par-der
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/3122546/](https://leetcode.com/problems/path-sum-iii/solutions/3122546/)

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
     * @param Integer $targetSum
     * @return Integer
     */
    function pathSum($root, $targetSum) {
        if($root == null) return 0;
        return $this->pathSum($root->left, $targetSum) + $this->pathSum_a($root, $targetSum) + $this->pathSum($root->right, $targetSum); 
    }
    private function pathSum_a($root, $targetSum){
        if($root == null) return 0;
        $res = 0;
        if($root->val == $targetSum) $res++;
        $res += $this->pathSum_a($root->left, $targetSum - $root->val);
        $res += $this->pathSum_a($root->right, $targetSum - $root->val);
        return $res;
    }
}
```