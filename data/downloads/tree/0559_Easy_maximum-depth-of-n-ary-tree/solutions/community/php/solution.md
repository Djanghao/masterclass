# [PHP] DFS approach. Beats 100% Time

**Author:** ayukhatov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/6105291/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/6105291/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Recursive DFS
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
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
     * @return integer
     */
    function maxDepth($root) {
    	if(!$root) return 0;

        $max = 1;

        foreach ($root->children as $child) {
            $max = max($this->maxDepth($child) + 1, $max);
        }

        return $max;
    }
}
```