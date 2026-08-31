# [Python] Just calculate (faster than 100.00%)

**Author:** pbelskiy
**Votes:** 72
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259200/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259200/)

---

Runtime: `797 ms`, faster than `100.00%` of Python3 online submissions for The Latest Time to Catch a Bus.
Memory Usage: `33.6 MB`, less than `100.00%` of Python3 online submissions for The Latest Time to Catch a Bus.

```python
class Solution:
    def latestTimeCatchTheBus(self, buses: List[int], passengers: List[int], capacity: int) -> int:
        passengers.sort()
        cur = 0

        for time in sorted(buses):
            cap = capacity
            while cur < len(passengers) and passengers[cur] <= time and cap > 0:
                cur += 1
                cap -= 1

        best = time if cap > 0 else passengers[cur - 1]

        passengers = set(passengers)
        while best in passengers:
            best -= 1
        return best
```