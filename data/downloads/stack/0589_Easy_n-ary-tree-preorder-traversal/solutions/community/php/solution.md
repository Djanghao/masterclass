# PHP simple iterative solution

**Author:** xjchong
**Votes:** 2
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2778492/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2778492/)

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
 * Definition for a Node.
 * class Node {
 *     public $val = null;
 *     public $children = null;
 *     function __construct($val = 0) {
 *         $this->val = $val;
 *         $this->children = array();
 *     }
 * }
 */

class Solution {
    /**
     * @param Node $root
     * @return integer[]
     */
    function preorder($root) {
        $result = [];
        $stack = [$root];

        while ($node = array_shift($stack)) {
            $result[] = $node->val;
            array_unshift($stack, ...$node->children);
        }

        return $result;
    }
}
```