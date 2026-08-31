# PHP | Replace with the value of next node ('Delete Node in a Linked List')

**Author:** alexander_d
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/877683/](https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/877683/)

---

```
class Solution
{
    /**
     * @param ListNode $node
     * @return 
     */
    public function deleteNode(ListNode $node)
    {
        $node->val = $node->next->val;
        $node->next = $node->next->next;
    }
}
```