# [Python3] 2 pointers

**Author:** ye15
**Votes:** 10
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/1624252/](https://leetcode.com/problems/watering-plants-ii/solutions/1624252/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/f57038d6cca9ccb356a137b3af67fba615a067dd) for solutions of weekly 271. 

```
class Solution:
    def minimumRefill(self, plants: List[int], capacityA: int, capacityB: int) -> int:
        ans = 0 
        lo, hi = 0, len(plants)-1
        canA, canB = capacityA, capacityB
        while lo < hi: 
            if canA < plants[lo]: ans += 1; canA = capacityA
            canA -= plants[lo]
            if canB < plants[hi]: ans += 1; canB = capacityB
            canB -= plants[hi]
            lo, hi = lo+1, hi-1
        if lo == hi and max(canA, canB) < plants[lo]: ans += 1
        return ans 
```