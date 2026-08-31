# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/6038237/](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/6038237/)

---

```php []
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
    function deleteMiddle($head) {
        // Cornercase: only 0/1 elements.
        if (is_null($head) || is_null($head->next)) return null;

        $node = $head;
        $countNodes = 1;

        //First, iterate over all nodes to count them.
        while (!is_null($node->next)) {
            $countNodes++;
            $node = $node->next;
        }

        // Second, compute the middle node.
        $middleNodePos = floor($countNodes/2);

        // Third, iterate up to the node previous to the middle,
        // and make it point to the node next to the middle
        $node = $head;
        $pos = 0;
        for ($pos = 0; $pos < $middleNodePos-1; $pos++) {
            $node = $node->next;
        }
        $node->next = $node->next->next;

        return $head;
    }
}
```