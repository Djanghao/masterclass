# python3 simple soln

**Author:** user2613C
**Votes:** 25
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/1979837/](https://leetcode.com/problems/peeking-iterator/solutions/1979837/)

---

```
class PeekingIterator:
    def __init__(self, iterator):
        """
        Initialize your data structure here.
        :type iterator: Iterator
        """
        self.iterator = iterator
        self.current = self.iterator.next() if self.iterator.hasNext() else None        

    def peek(self):
        """
        Returns the next element in the iteration without advancing the iterator.
        :rtype: int
        """
        return self.current
        

    def next(self):
        """
        :rtype: int
        """
        value = self.current
        self.current = self.iterator.next() if self.iterator.hasNext() else None       
        return value
            
    def hasNext(self):
        """
        :rtype: bool
        """
        return self.current != None
      
