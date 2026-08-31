# PHP 100%

**Author:** theawaysa
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3012339/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3012339/)

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
     * @return ListNode
     */
    function deleteDuplicates($head) {
        $current = $head->next;
        $prev = $head;
     while($current != null)
     {  
         if($prev->val == $current->val)
         {
             $temp = $current->next;
             $prev->next = $temp;
             $current =$temp;
         }else
         {
              $prev =  $current;
             $current = $current->next;
         }
        
     }

     return $head;
    }
}
```