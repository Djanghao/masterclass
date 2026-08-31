# [Python3] top-down dp

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1242138/](https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1242138/)

---


```
class Solution:
    def minSkips(self, dist: List[int], speed: int, hoursBefore: int) -> int:
        if sum(dist)/speed > hoursBefore: return -1 # impossible 
        
        @cache
        def fn(i, k): 
            """Return min time (in distance) of traveling first i roads with k skips."""
            if k < 0: return inf # impossible 
            if i == 0: return 0 
            return min(ceil((fn(i-1, k) + dist[i-1])/speed) * speed, dist[i-1] + fn(i-1, k-1))
        
        for k in range(len(dist)):
            if fn(len(dist)-1, k) + dist[-1] <= hoursBefore*speed: return k 
```