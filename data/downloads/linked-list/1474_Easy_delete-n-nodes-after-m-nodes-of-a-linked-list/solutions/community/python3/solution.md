# Python One-Pass In-Place with O(n) time and O(1) space with explanation

**Author:** gdkou90
**Votes:** 33
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/681256/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/681256/)

---

Methodology based on a dummy head:
1. Use an indicator ```i``` to count the number of already-passed list nodes
2. Keep moving head node forward as long as ```i < m-1``` 
3. Remove the next ```n``` nodes and reset ```i``` to 0 when ```i == m-1```
```
class Solution:
    def deleteNodes(self, head: ListNode, m: int, n: int) -> ListNode:
        dummy = ListNode(None)
        dummy.next = head
        i = 0
        while head:
            if i < m-1:
                i += 1
            else:
                j = 0
                while j < n and head.next:
                    head.next = head.next.next
                    j += 1
                i = 0
            head = head.next
        return dummy.next
```