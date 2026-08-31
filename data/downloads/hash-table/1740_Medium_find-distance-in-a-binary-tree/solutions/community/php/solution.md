# One pass - LCA

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5652802/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5652802/)

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
     * @param Integer $p
     * @param Integer $q
     * @return Integer
     */
    public function findDistance($root, $p, $q) {
        return $this->distance($root, $p, $q, 0);
    }

    // Helper function
    private function distance($root, $p, $q, $depth) {
        if ($root === null || $p == $q) {
            return 0;
        }

        // If either p or q is found, calculate the retDistance as the maximum
        // of depth and retDistance value for left and right subtrees.
        if ($root->val == $p || $root->val == $q) {
            $left = $this->distance($root->left, $p, $q, 1);
            $right = $this->distance($root->right, $p, $q, 1);

            return ($left > 0 || $right > 0) ? max($left, $right) : $depth;
        }

        // Otherwise, calculate the retDistance as sum of retDistance of left
        // and right subtree.
        $left = $this->distance($root->left, $p, $q, $depth + 1);
        $right = $this->distance($root->right, $p, $q, $depth + 1);
        $retDistance = $left + $right;

        // If current node is the LCA, subtract twice of depth.
        if ($left != 0 && $right != 0) {
            $retDistance -= 2 * $depth;
        }

        return $retDistance;
    }
}
```