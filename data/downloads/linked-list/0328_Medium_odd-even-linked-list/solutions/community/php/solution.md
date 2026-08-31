# ✅ O(n) || PHP || Visual explanation🔥🔥🔥

**Author:** shahovkit
**Votes:** 2
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/4693769/](https://leetcode.com/problems/odd-even-linked-list/solutions/4693769/)

---

# Algorithm

Set first pointer on first node, second pointer on second node. Save the value of  second node into a variable (left circle).
![image.png](./images/0.png)

**---- Start loop ----**
Change link of first pointer to
link from next pointer (next = next->next)
![image.png](./images/1.png)

Also change link of second pointer to
link from next pointer (next = next->next)
![image.png](./images/2.png)

Move first pointer to next
![image.png](./images/3.png)

Move second pointer to next
![image.png](./images/4.png)

**---- End loop ----**

Result after loop:
![image.png](./images/5.png)

Change link next of first pointer to saved in beginning. **DONE!**
![image.png](./images/6.png)


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
    function oddEvenList($head) {
        if($head === null){
            return $head;
        }
        $odd = $head;
        $even = $head->next;
        $evenHead = $even;
        while($even->next !== null) {
            $odd->next = $odd->next->next;
            $even->next = $even->next->next;
            $odd = $odd->next;
            $even = $even->next;
        }
        $odd->next = $evenHead;

        return $head;
    }
}
```