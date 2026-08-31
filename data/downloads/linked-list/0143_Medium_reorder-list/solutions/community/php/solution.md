# Solution Reorder List

**Author:** Suyono-Sukorame
**Votes:** 1
**Link:** [https://leetcode.com/problems/reorder-list/solutions/4689051/](https://leetcode.com/problems/reorder-list/solutions/4689051/)

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
     * @return NULL
     */
    function reorderList($head) {
        if ($head == null || $head->next == null) {
            return;
        }
        
        $slow = $head;
        $fast = $head;
        while ($fast->next != null && $fast->next->next != null) {
            $slow = $slow->next;
            $fast = $fast->next->next;
        }
        
        $prev = null;
        $curr = $slow->next;
        while ($curr != null) {
            $next = $curr->next;
            $curr->next = $prev;
            $prev = $curr;
            $curr = $next;
        }
        $slow->next = null;
        
        $first = $head;
        $second = $prev;
        while ($first != null && $second != null) {
            $first_next = $first->next;
            $second_next = $second->next;
            $first->next = $second;
            $second->next = $first_next;
            $first = $first_next;
            $second = $second_next;
        }
    }
}

```