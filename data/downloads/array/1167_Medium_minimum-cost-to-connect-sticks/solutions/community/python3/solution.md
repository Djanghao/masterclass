# [Python3] min heap

**Author:** zhanweiting
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/373531/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/373531/)

---

```
import heapq
class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        res = 0
        heapq.heapify(sticks)
        while len(sticks) > 1:
            c = heapq.heappop(sticks)+heapq.heappop(sticks)
            res += c
            heapq.heappush(sticks,c)
        return res
```