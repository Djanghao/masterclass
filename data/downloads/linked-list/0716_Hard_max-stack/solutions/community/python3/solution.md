# Python O(logN) use double linked list + heap + dictionary

**Author:** cixih
**Votes:** 25
**Link:** [https://leetcode.com/problems/max-stack/solutions/1003655/](https://leetcode.com/problems/max-stack/solutions/1003655/)

---

Use doubly linked list + heap + dictionary to achieve O(logN) time complexity.
The basic idea is to use the heap to find the max in O(logN) and do removal in O(1) with the help of dict and doubly linked list.
```
from collections import defaultdict
from heapq import heappush, heappop, heapify
class DoubleLinkedList:
    def __init__(self, val=None):
        self.val = val
        self.next = None
        self.pre = None
	
class MaxStack:
    def __init__(self):
        """
        initialize your data structure here.
        """
        
        self.stack = DoubleLinkedList(float('-inf')) # init a dummy node
        self.last = self.stack                       # reference the stack tail
        self.heap = []
        self.hmap = defaultdict(list)
        

    def push(self, x: int) -> None:
        # O(logn)
        node = DoubleLinkedList(x)
        
        # update the tail
        self.last.next = node
        node.pre = self.last
        self.last = node
        
        # push -x to the min heap
        heappush(self.heap, -x)
        
        # append node the the map entry
        self.hmap[x].append(node)
        
    def pop(self) -> int:
        # O(1)
        # pop from the stack and remove from map
        num = self.last.val
        self.last = self.last.pre
        self.last.next = None
        
        self.hmap[num].pop()
        if not self.hmap[num]:
            del self.hmap[num]
        return num

    def top(self) -> int:
        # O(1)
        return self.last.val

    def peekMax(self) -> int:
        # O(logN)
        # during the pop(), we didn't remove the element from heap
        # So here is to remove the the poped elements from heap
        while -self.heap[0] not in self.hmap:
            heappop(self.heap)
        
        return -self.heap[0]

    def popMax(self) -> int:
        # O(logN)
        # get the top-most node from map
        num = self.peekMax()
        node = self.hmap[num].pop()
        if not self.hmap[num]:
            del self.hmap[num]
        
        # update the tail reference
        if node == self.last:
            self.last = self.last.pre
        
        # remove the node from stack
        if node.pre:
            node.pre.next = node.next
        if node.next:
            node.next.pre = node.pre
        return num
```