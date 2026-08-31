# PHP Solution - iteration - BFS - Beats 92.96%

**Author:** find-ahmed-marzouk
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/2910673/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/2910673/)

---

# PHP Solution - iteration - BFS - Beats 92.96%
<!-- Describe your first thoughts on how to solve this problem. -->

### BFS Algorithm
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
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
     * @return Integer[][]
     */
    function levelOrder($root) {
        if(!$root) return [];

        $values = [];
        $queue = [ $root ];

        while(!empty($queue)){
            $level = [];
            $size = count($queue);

            for($i = 0; $i < $size; $i++){
                $current = array_shift($queue);
                $level[] = $current->val;
                if($current->left)  $queue[] = $current->left;
                if($current->right) $queue[] = $current->right;
            }

            $values[] =  $level;
        }

        return $values;
    }
}
```