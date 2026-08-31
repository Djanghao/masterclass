# PHP Solution

**Author:** m28126584
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/3791699/](https://leetcode.com/problems/linked-list-components/solutions/3791699/)

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
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @param Integer[] $nums
     * @return Integer
     */
    function numComponents($head, $nums) {
        $count=0;
        $is_loop=False;
        while ($head!=null) {
            if (in_array($head->val,$nums)) {
                $is_loop=True;
            } else {
                if ($is_loop) {
                    $count++;
                    $is_loop=False;
                }
            }
            $head = $head->next;
        }
        if ($is_loop) {
            $count++;
        }
        return $count;
    }
}
```