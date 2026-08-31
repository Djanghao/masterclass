# PHP simple solution without built-in functions

**Author:** oktamovazam1
**Votes:** 10
**Link:** [https://leetcode.com/problems/middle-of-the-linked-list/solutions/1920421/](https://leetcode.com/problems/middle-of-the-linked-list/solutions/1920421/)

---

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
    function middleNode($head) {
        $slow=$head;
        $fast=$head;
        while($fast&&$fast->next){
            $slow=$slow->next;
            $fast = $fast->next->next;
            
        }
        return $slow;
    }
}
```
Please upvote if you like the solution and feel free to ask for more information if you need