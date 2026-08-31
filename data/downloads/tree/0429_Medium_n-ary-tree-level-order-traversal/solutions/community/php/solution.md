# Solution N-ary Tree Level Order Traversal

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/4723466/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/4723466/)

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
     * @return integer[][]
     */
    function levelOrder($root) {
        if ($root === null) return [];
        
        $result = [];
        $queue = [$root];
        
        while (!empty($queue)) {
            $levelSize = count($queue);
            $currentLevel = [];
            
            for ($i = 0; $i < $levelSize; $i++) {
                $node = array_shift($queue);
                $currentLevel[] = $node->val;
                
                foreach ($node->children as $child) {
                    array_push($queue, $child);
                }
            }
            
            $result[] = $currentLevel;
        }
        
        return $result;
    }
}

```