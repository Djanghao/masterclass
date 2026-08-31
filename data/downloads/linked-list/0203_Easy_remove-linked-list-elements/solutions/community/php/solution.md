# PHP recursion beat 95%

**Author:** Ian8018523
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/3380073/](https://leetcode.com/problems/remove-linked-list-elements/solutions/3380073/)

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
     * @param Integer $val
     * @return ListNode
     */
    function removeElements($head, $val) {
        if($head->val==$val){
            $head=$head->next;
        }
        if($head){
            if($head->val==$val){
                $head=$this->removeElements($head,$val);
            }else{
                $head->next=$this->removeElements($head->next,$val);
            }
        }
        return $head;
    }
}
```