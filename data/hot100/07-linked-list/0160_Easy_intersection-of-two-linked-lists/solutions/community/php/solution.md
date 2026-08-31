# Done

**Author:** moPSonrzdZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/5381599/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/5381599/)

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
 *     function __construct($val) { $this->val = $val; }
 * }
 */

class Solution {
    /**
     * @param ListNode $headA
     * @param ListNode $headB
     * @return ListNode
     */
    function getIntersectionNode($headA, $headB) {
        $a = $headA;
        $b = $headB;
        while($a !== $b) {
            $a = $a === null ? $headB : $a->next;
            $b = $b === null ? $headA : $b->next;
        }

        return $a;
    }
}
```