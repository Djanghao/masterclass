# Easy to understand one pass solution (Python)

**Author:** kryuki
**Votes:** 17
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/1613829/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/1613829/)

---

```
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next
"""

class Solution:
    def insert(self, head: 'Node', insertVal: int) -> 'Node':
        #edge cases
        if not head:
            node = Node(insertVal)
            node.next = node
            return node
                
        curr = head
        while curr.next != head:
            #insert in the normal position
            if curr.val <= insertVal <= curr.next.val:
                break
            #insert in the link position
            if curr.val > curr.next.val and (curr.val <= insertVal or insertVal <= curr.next.val):
                break
            curr = curr.next
        
        #insert new nodes
        insert_node = Node(insertVal, next=curr.next)
        curr.next = insert_node
    
        return head
```