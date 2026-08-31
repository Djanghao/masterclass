# Merge + bisect_left

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5922783/](https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5922783/)

---

```
class Solution:
    def minConnectedGroups(self, intervals: List[List[int]], k: int) -> int:
        intervals.sort()
        merged = []
        for s,e in intervals:
            if not merged:
                merged.append([s, e])
            elif merged[-1][1] >= s:
                merged[-1][1] = max(merged[-1][1], e)
            else:
                merged.append([s,e])
        min_count = len(merged)
        N = len(merged)
        for i in range(N):
            t = merged[i][1] + k
            reachable_i = bisect_left(merged, t, key=lambda x: x[0]) # t is in merged[reachable_i]
            shift_left = reachable_i < N and t >= merged[reachable_i][0] # or in the previous interval
            min_count = min(min_count, N - (reachable_i - i) + 1 - shift_left)
        return min_count
```