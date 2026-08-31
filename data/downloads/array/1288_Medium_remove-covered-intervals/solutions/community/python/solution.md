# Python Simple Solution Explained (video + code) (Fastest)

**Author:** spec_he123
**Votes:** 15
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/878478/](https://leetcode.com/problems/remove-covered-intervals/solutions/878478/)

---

[](https://www.youtube.com/watch?v=emPnw5m2nN0)
https://www.youtube.com/watch?v=emPnw5m2nN0
```
class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals = sorted(intervals, key = lambda x : (x[0], -x[1]))
        
        res = 0
        ending = 0
        
        for _, end in intervals:
            if end > ending:
                res += 1
                ending = end
        
        return res
```