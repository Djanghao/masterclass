# python3 easy recursion solution

**Author:** hongfu1220
**Votes:** 166
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/718457/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/718457/)

---

```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:        
        # Check if we need to reverse the group
        curr = head
        for _ in range(k):
            if not curr: return head
            curr = curr.next
		        
				
        # Reverse the group (basic way to reverse linked list)
        prev = None
        curr = head
        for _ in range(k):
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        
		
        # After reverse, we know that `head` is the tail of the group.
		# And `curr` is the next pointer in original linked list order
        head.next = self.reverseKGroup(curr, k)
        return prev
    ```