# Simple C# solution

**Author:** goOrn
**Votes:** 9
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3115484/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3115484/)

---

```
public class Solution {
    public ListNode DeleteDuplicates(ListNode head) {
        
        if(head == null)
            return null;

        if(head.next == null)
            return head;

        ListNode prevNode = head;
        for(ListNode node = head.next; node != null; node = node.next)
        {
            if(node.val == prevNode.val)
            {
                prevNode.next = node.next;
            }
            else 
            {
                prevNode = node;
            }
        }

        return head;

    }
}
```