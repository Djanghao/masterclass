# PHP Simple DFS Solution

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/3045464/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/3045464/)

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
     * @param Integer $k
     * @return Integer
     */
    function kthSmallest($root, $k) {
        $arr = [];
        $this->DFS($root, $k, $arr);
        return $arr[$k - 1];
    }


    function DFS($root, $k, &$arr){
        if(!$root){
            return;
        }

        $this->DFS($root->left, $k, $arr);
        $arr[] = $root->val;
        $this->DFS($root->right, $k, $arr);
    }
}
```