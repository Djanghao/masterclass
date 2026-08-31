# Simple solution Beats 100%

**Author:** eugene1994
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/4277821/](https://leetcode.com/problems/house-robber-iii/solutions/4277821/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
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
    function rob($root) {
        $res = $this->robOrSkip($root);
        return max($res[0], $res[1]);
    }

    function robOrSkip($node){
        if (!$node) return [0, 0]; // [rob this node, skip this node]

        $left = $this->robOrSkip($node->left);
        $right = $this->robOrSkip($node->right);

        // If we rob this node, we cannot rob its children
        $rob = $node->val + $left[1] + $right[1];

        // If we skip this node, we can choose whether to rob or skip its children
        $skip = max($left[0], $left[1]) + max($right[0], $right[1]);

        return [$rob, $skip];
    }
}
```