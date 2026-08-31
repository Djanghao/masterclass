# Beats 100% - very easy solution O(n) Time & O(1) Space

**Author:** amr-degheidy
**Votes:** 0
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/5593198/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/5593198/)

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
 *     public $prev = null;
 *     public $next = null;
 *     public $child = null;
 *     function __construct($val = 0) {
 *         $this->val = $val;
 *         $this->prev = null;
 *         $this->next = null;
 *         $this->child = null;
 *     }
 * }
 */

class Solution {
    /**
     * @param Node $head
     * @return Node
     */
    function flatten($head) {
        //make a stack 
        // once you faced a child add the next to the stack
        // get the childs as next and remove the child 
        // keep going once you faced a null start pop from stach
        if ($head === null) return null;

        $stack = [];
        $holder = $head;

        while($head) {
        
            if($head->child) {
                if($head->next != null) {
                    $stack[] = $head->next;
                }
                $head->next = $head->child;
                $head->next->prev = $head;
                $head->child = null;
            }


            if($head->next == null && count($stack) != 0) {
                $head->next = array_pop($stack);
                $head->next->prev = $head;
            }

            $head = $head->next;
        }        

       return $holder;
    }

}
```