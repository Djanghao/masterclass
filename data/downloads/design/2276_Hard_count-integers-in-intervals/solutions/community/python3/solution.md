# [Python3] built-in List beats SortedList

**Author:** yag313
**Votes:** 47
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/2039730/](https://leetcode.com/problems/count-integers-in-intervals/solutions/2039730/)

---

### Idea
1. Initialize list `interv` with  `[(-inf, -inf), (inf, inf)]` to store the merged intervals and integer `cov = 0`, to be updated after addition of each interval
2. Whenever an interval must be added, the following must be done
- Using binary search, find the range of affected intervals in `interv`, denoted by `li` for left most, `ri` for right most + 1
- the range of the new merged interval (`lval`, `rval`)
- replace the range of [li, ri - 1], inclusive with the new merged interval `(lval, rval)`
3. Update the coverege by
- Finding and subtracting the coverage of deleted intervals `to_delete`
- Adding the coverage of new interval `rval - lval + 1`

### Code
#### Built-in List
```
class CountIntervals:

    def __init__(self):
	# initialize the merged intervals list as below to handle edge cases
        self.interv = [(-inf, -inf), (inf, inf)]
        self.cov = 0   

    def add(self, left: int, right: int) -> None:
        
        interv = self.interv
        
		# find the left most position for inserting of the new potentially merged interval
		# we use `left - 1` because the interval coverage is inclusive
        li = bisect.bisect_left(interv, left - 1, key=itemgetter(1))
        lval = min(interv[li][0], left)
		
		# find the right most position for inserting the new potentially merged interval
		# we use `right + 1` because the interval coverage is inclusive
        ri = bisect.bisect_right(interv, right + 1, key=itemgetter(0))
        rval = max(interv[ri - 1][1], right)

		# find the coverage of the intervals that will be replaced by the new interval
        to_delete = 0
        for _ in range(li, ri):
            to_delete += interv[_][1] - interv[_][0] + 1
            
		# udpate the coverage
        self.cov += rval - lval + 1 - to_delete
        interv[li: ri] = [(lval, rval)]

    def count(self) -> int:
        return self.cov
```

#### SortedList
```
from sortedcontainers import SortedList

class CountIntervals:

    def __init__(self):
        self.cov = 0 
        self.interv = SortedList([(-inf, -inf), (inf, inf)])

    def add(self, left: int, right: int) -> None:
        li = self.interv.bisect_left((left - 1, -inf))
        if self.interv[li - 1][1] >= left - 1:
            li -= 1
        lval = min(self.interv[li][0], left)
        ri = self.interv.bisect_right((right + 1, inf))
        rval = max(self.interv[ri - 1][1], right)
        
        
        to_delete = 0
        for _ in range(li, ri):
            to_delete += self.interv[_][1] - self.interv[_][0] + 1
        self.cov += rval - lval + 1 - to_delete
        del self.interv[li: ri]
        self.interv.add((lval, rval))

    def count(self) -> int:
        return self.cov
```

### Feedback
I appreciate your feedback and support! :)