# php

**Author:** MahmoudOsama
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-list/solutions/2882986/](https://leetcode.com/problems/sort-list/solutions/2882986/)

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
    function sortList($head) {
        $array = [];
        while($head){
            $array[] = $head->val;
            $head = $head->next;
        }
        sort($array);
        $head = $linkedList = new ListNode($array[0]);
        foreach($array as $key =>$value){
            if($key!= 0){
                $linkedList->next = new ListNode($value);
                $linkedList = $linkedList->next;
            }            
        }

        return $head;
    }
}
```