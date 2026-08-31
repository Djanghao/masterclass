# Beats 98%, use Python's iterator/generator, easy to understand.

**Author:** hackeveryday
**Votes:** 2
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/4599881/](https://leetcode.com/problems/zigzag-iterator/solutions/4599881/)

---

# Intuition
Use Python's generator (i.e., `yield`) with `zip_longest` function to implement the zigzag iterator. 

# Complexity
- Time complexity:
`next()` takes $$O(1)$$; `hasNext()` takes $$O(1)$$.

- Space complexity:
$$O(N)$$ because of `zip_longest` needs to remember all elemnts from $$v1$$ & $$v2$$. The state management takes $$O(1)$$.

# Code
```
from itertools import zip_longest

class ZigzagIterator:
    def __init__(self, v1: List[int], v2: List[int]):
        self.data = zip_longest(v1, v2, fillvalue=None)
        self.it = self.gen()
        self.next_item = None

    def gen(self):
        for i, j in self.data:
            if i is not None:
                yield i
            if j is not None:
                yield j

    def next(self) -> int:
        if self.next_item is not None:
            val = self.next_item
            self.next_item = None
            return val
        return next(self.it)

    def hasNext(self) -> bool:
        if self.next_item is not None:
            return True
        self.next_item = next(self.it, None)
        return (self.next_item is not None)

# Your ZigzagIterator object will be instantiated and called as such:
# i, v = ZigzagIterator(v1, v2), []
# while i.hasNext(): v.append(i.next())
```