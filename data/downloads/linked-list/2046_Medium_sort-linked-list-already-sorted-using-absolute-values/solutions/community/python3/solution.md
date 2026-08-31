# Python3 Insert at the head | Time O(n) | Space O(n)

**Author:** savikx
**Votes:** 15
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/1565735/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/1565735/)

---

```
class Solution:
    def sortLinkedList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        while curr.next:
            if curr.val > curr.next.val: # Insert at the head
                temp = curr.next
                curr.next = temp.next
                temp.next = head
                head = temp
            else:
                curr = curr.next
        return head
```