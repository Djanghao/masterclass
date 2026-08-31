# python 98% | easy

**Author:** Abhishen99
**Votes:** 7
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/1317484/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/1317484/)

---

```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nextLargerNodes(self, head: ListNode) -> List[int]:
        
        
        u=[]
        
        while head:
            u.append(head.val)
            head = head.next
        
        nge =[0]*(len(u))
        
        stack=[]
        for i in range(len(u)):
            
            while stack and u[stack[-1]] <  u[i]:
                nge[stack.pop()] = u[i]
            stack.append(i)
            
        return nge
            
        
```