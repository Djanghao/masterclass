# Python, two passes O(N)

**Author:** blue_sky5
**Votes:** 6
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/1171313/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/1171313/)

---

```
class Solution:
    def deleteDuplicatesUnsorted(self, head: ListNode) -> ListNode:
        seen = set()
        dups = set()
        
        node = head
        while node:
            if node.val in seen:
                dups.add(node.val)
            else:
                seen.add(node.val)
            node = node.next
                
        head_pointer = ListNode(0, head)
        node = head_pointer
        while node.next:
            if node.next.val in dups:
                node.next = node.next.next
            else:
                node = node.next
        
        return head_pointer.next
```