# Priority Queue with Set | Explained

**Author:** nadaralp
**Votes:** 24
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/2261425/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/2261425/)

---

We will have a `next_num` runner to know what is the next number to return from the infinite set.

To handle the "addBack" logic we are going to have a priority queue.

To stop "addBack" from inserting the same number multiple times, for example: addBack -> 3,3,3, we are going to have a set.

# Code
```
from heapq import heapify, heappop, heappush

class SmallestInfiniteSet:
    def __init__(self):
        self.next_num = 1
        self.added_back_heap = []
        self.added_back_set = set()
        

    def popSmallest(self) -> int:
        if self.added_back_heap:
            smallest = heappop(self.added_back_heap)
            self.added_back_set.remove(smallest)
            return smallest
    
        num_to_return = self.next_num
        self.next_num += 1
        return num_to_return
        

    def addBack(self, num: int) -> None:
        if num < self.next_num and num not in self.added_back_set:
            self.added_back_set.add(num)
            heappush(self.added_back_heap, num)
        
```