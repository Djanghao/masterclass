# Python3 solution w/ SortedList, O(logM) add, O(1) calculate

**Author:** chuan-chih
**Votes:** 54
**Link:** [https://leetcode.com/problems/finding-mk-average/solutions/1152629/](https://leetcode.com/problems/finding-mk-average/solutions/1152629/)

---

python3 doesn't have a built-in [order statistic tree](https://en.wikipedia.org/wiki/Order_statistic_tree) or even a basic BST and that may be why `sortedcontainers` is one of the few third-party libraries allowed.

Anyway, with a [SortedList](http://www.grantjenks.com/docs/sortedcontainers/sortedlist.html) this solution is conceptually simple. I use both a deque and a SortedList to keep track of the last m numbers, FIFO. It's trivial to maintain the total sum of them. To maintain the sum of the smallest/largest k numbers, we examine the index at which the new number will be inserted into the SortedList and the index at which the oldest number will be removed from the SortedList. If the new number to be inserted will become one of the smallest/largest k numbers, we add it to self.first_k/self.last_k and subtract out the current kth smallest/largest number. The operation for removing the oldest number is similar but the reverse. The only gotcha is the off-by-1 error.

```
from sortedcontainers import SortedList

class MKAverage:

    def __init__(self, m: int, k: int):
        self.m, self.k = m, k
        self.deque = collections.deque()
        self.sl = SortedList()
        self.total = self.first_k = self.last_k = 0

    def addElement(self, num: int) -> None:
        self.total += num
        self.deque.append(num)
        index = self.sl.bisect_left(num)
        if index < self.k:
            self.first_k += num
            if len(self.sl) >= self.k:
                self.first_k -= self.sl[self.k - 1]
        if index >= len(self.sl) + 1 - self.k:
            self.last_k += num
            if len(self.sl) >= self.k:
                self.last_k -= self.sl[-self.k]
        self.sl.add(num)
        if len(self.deque) > self.m:
            num = self.deque.popleft()
            self.total -= num
            index = self.sl.index(num)
            if index < self.k:
                self.first_k -= num
                self.first_k += self.sl[self.k]
            elif index >= len(self.sl) - self.k:
                self.last_k -= num
                self.last_k += self.sl[-self.k - 1]
            self.sl.remove(num)

    def calculateMKAverage(self) -> int:
        if len(self.sl) < self.m:
            return -1
        return (self.total - self.first_k - self.last_k) // (self.m - 2 * self.k)
```

Time complexity: O(logM) add due to operations on the SortedList (essentially an [order statistic tree](https://en.wikipedia.org/wiki/Order_statistic_tree)). O(1) calculate is trivial.
Space complexity: O(M) due to the deque and SortedList.