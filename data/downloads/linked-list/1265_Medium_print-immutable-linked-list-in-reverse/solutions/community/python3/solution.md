# Python O(n) time + O(sqrt(n)) space using chunking (with comments)

**Author:** psykyck
**Votes:** 6
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/813855/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/813855/)

---

```
# """
# This is the ImmutableListNode's API interface.
# You should not implement it, or speculate about its implementation.
# """
# class ImmutableListNode:
#     def printValue(self) -> None: # print the value of this node.
#     def getNext(self) -> 'ImmutableListNode': # return the next node.

class Solution:
    def printLinkedListInReverse(self, head: 'ImmutableListNode') -> None:
        # get size of list in O(n) time
        size = 0
        temp = head
        while temp:
            temp = temp.getNext()
            size += 1
        
        # choose a size for our chunks
        optimal_size = int(sqrt(size))
        
        # store starts to sub chunks in O(n) time and O(sqrt(n)) space
        sub_heads = []
        count = 0
        while head:
            if count % optimal_size == 0:
                sub_heads.append(head)
            head = head.getNext()
            count += 1
        
        # start at last chunk and print it backwards
        # at worst we only keep sqrt(n) elements in the stack
        # so this step is also O(n) time and O(sqrt(n)) space
        stack = []
        while sub_heads:
            node = sub_heads.pop()
            i = 0
            while node and i < optimal_size:
                stack.append(node)
                node = node.getNext()
                i += 1
            while stack:
                stack.pop().printValue()
```