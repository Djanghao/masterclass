# Python O(n)-Time | O(1)-Space | Clean Fast Solution

**Author:** peatear-anthony
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/1472499/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/1472499/)

---

```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteNodes(self, head: ListNode, m: int, n: int) -> ListNode:
        current = head
        
        while current:

            for _ in range(m - 1):
                if current.next:
                    current = current.next
                else:
                    return head

            deleteCurrent = current

            for _ in range(n):
                if deleteCurrent.next:
                    deleteCurrent = deleteCurrent.next
                else:
                    current.next = None
                    return head

            current.next = deleteCurrent.next
            current = current.next
            
        return head
```