# [Python] easy understanding solution

**Author:** liuys614
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3474976/](https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3474976/)

---

Notice:
- Could optimize with counter to substitude set to decrease memory usage and runtime, but this version has better readibility.

```
class Solution:
    def guessMajority(self, reader: 'ArrayReader') -> int:
        g1, g2= set([3]), set() # g1: elements same as index 3, g2: others
        n = reader.length()
        
		# identify nums[0] to nums[2]
        ans0124 = reader.query(0,1,2,4)
        for i in range(3):
            qa = [n for n in range(5) if n != i]
            if reader.query(*tuple(qa)) == ans0124:
                g1.add(i)
            else:
                g2.add(i)
            
	    # identify nums[4] to nums[n-1]
        ans0123 = reader.query(0,1,2,3)
        for i in range(4, n):
            if reader.query(0,1,2,i) == ans0123:
                g1.add(i)
            else:
                g2.add(i)
                
        if len(g1)==len(g2):
            return -1
        
        return 3 if len(g1)>len(g2) else list(g2)[0]
```