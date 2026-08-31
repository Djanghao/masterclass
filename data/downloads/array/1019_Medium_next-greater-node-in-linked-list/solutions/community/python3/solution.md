# Python3 Solution with explanation

**Author:** n0013sAib0t
**Votes:** 36
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/267762/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/267762/)

---

As we traverse the linked list, we can use a stack to store a tuple (index, value), where the index is the position of the element in the linkedlist.

```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def nextLargerNodes(self, head: ListNode) -> List[int]:
        # initializing the position
		pos = -1
        stack = []
        
        # List[int] to be returned
		ans = []
        
		#traverse the linked list till you reach the end of it
		while head:
			# increment the pos
            pos += 1

			# appending a zero when we start with the head
			ans.append(0)

			# If the stack has some value and the top of stack has value less than the current linked list node value,
			# pop the stack and insert the value of current node at that index
			# do that till the stack is empty. This means for all the values on the left, current value is the next greater
			while stack and stack[-1][1] < head.val:
                idx, _ = stack.pop()
                ans[idx] = head.val
            
			# push the (index, head.val on the stack to compare with on the next iteration)
			stack.append((pos, head.val))
            head = head.next
        return ans
```