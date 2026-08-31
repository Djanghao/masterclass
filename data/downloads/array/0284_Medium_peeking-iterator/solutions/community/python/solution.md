# Simple Python Solution

**Author:** softray
**Votes:** 151
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/72626/](https://leetcode.com/problems/peeking-iterator/solutions/72626/)

---

Store the next value outside the iterator.  When next is called return the stored value and populate with next value from iterator.

    class PeekingIterator(object):
        def __init__(self, iterator):
            self.iter = iterator
            self.temp = self.iter.next() if self.iter.hasNext() else None
    
        def peek(self):
            return self.temp
    
        def next(self):
            ret = self.temp
            self.temp = self.iter.next() if self.iter.hasNext() else None
            return ret
    
        def hasNext(self):
            return self.temp is not None