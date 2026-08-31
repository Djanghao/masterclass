# Solution 654. Maximum Binary Tree

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/4769693/](https://leetcode.com/problems/maximum-binary-tree/solutions/4769693/)

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
     * @param Integer[] $nums
     * @return TreeNode
     */
    function constructMaximumBinaryTree($nums) {
        if (empty($nums)) {
            return null;
        }
        
        $maxIndex = 0;
        $maxValue = $nums[0];
        $length = count($nums);
        for ($i = 1; $i < $length; $i++) {
            if ($nums[$i] > $maxValue) {
                $maxValue = $nums[$i];
                $maxIndex = $i;
            }
        }
        
        $root = new TreeNode($maxValue);
        
        $root->left = $this->constructMaximumBinaryTree(array_slice($nums, 0, $maxIndex));
        $root->right = $this->constructMaximumBinaryTree(array_slice($nums, $maxIndex + 1));
        
        return $root;
    }
}

```