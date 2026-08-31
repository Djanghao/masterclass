# Php Solution

**Author:** SaidOmarGaber
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/5669653/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/5669653/)

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
    function isCompleteTree($root) {
        if ($root === null) {
            return true;
        }

        $queue = [];

        array_push($queue, $root);
        
        $end = false;

        while (!empty($queue)) {
            $node = array_shift($queue);

            if ($node === null) {
                $end = true; 
            } else {
                if ($end) {
                    return false;
                }
            
                array_push($queue, $node->left);
                array_push($queue, $node->right);
            }
        }

        return true;
    }
}
```