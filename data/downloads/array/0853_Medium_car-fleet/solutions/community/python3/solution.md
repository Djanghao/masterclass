# [Python3] greedy O(NlogN)

**Author:** ye15
**Votes:** 45
**Link:** [https://leetcode.com/problems/car-fleet/solutions/939525/](https://leetcode.com/problems/car-fleet/solutions/939525/)

---

Algo 
Sort the position-speed pair in reverse order. Compute the times for the cars to arrive at target. If a car located further away from target arrives at target with less time compared to cars closer to target. They will bump into a group. 

Implementation (156ms, 94.92%)
```
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        ans = prev = 0
        for pp, ss in sorted(zip(position, speed), reverse=True): 
            tt = (target - pp)/ss # time to arrive at target 
            if prev < tt: 
                ans += 1
                prev = tt
        return ans 
```

Analysis
Time complexity `O(NlogN)` due to sorting
Space complexity `O(N)` due to usage of `sorted()`