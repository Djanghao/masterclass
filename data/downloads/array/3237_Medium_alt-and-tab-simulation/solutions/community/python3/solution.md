# Python 3 ||| 7 lines, set and filter  ||

**Author:** Spaulding_
**Votes:** 1
**Link:** [https://leetcode.com/problems/alt-and-tab-simulation/solutions/5565345/](https://leetcode.com/problems/alt-and-tab-simulation/solutions/5565345/)

---


```
class Solution:
    def simulationResult(self, windows: List[int], queries: List[int], ) -> List[int]:

        ans, moved = [], set()

        for window in queries[::-1]:

            if window not in moved:
                ans.append(window)
                moved.add(window)

        ans.extend(filter (lambda x: x not in moved, windows)) 
```