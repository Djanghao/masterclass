# [Python 3] Binary Search + Greedy

**Author:** huangshan01
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3357304/](https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3357304/)

---

Hints followed. Binary search for minimum time required. Starting leftmost hen, optimally, in time allowed, it must try to consume the leftmost uneaten grain and eats as many grains to its right. 

Two options for each hen if there are unconsumed grains to its left, and the following two examples illustrating the situation:

- Move left to [0] then go right to [9], totally 10 seconds (17 sec if go right first).
hens = [1]
grains = [0,2,9]

- Move right to [9] then go left to [0], totally 10 seconds (17 sec if go left first).
hens = [8]
grains = [0,7,9]


# Code
```
class Solution:
    def minimumTime(self, hens: List[int], grains: List[int]) -> int:
        def check(t):
            x = 0
            for h in hens:
                r_reach = t
                if grains[x] < h:
                    l_cost = h - grains[x]
                    if l_cost > t:
                        return False
                    # 1) left to grains[x], return to h, then right
                    # 2) right, return to h, then left to grains[x]
                    # which ever gives maximum right reach
                    r_reach = max(0, t - 2 * l_cost, (t - l_cost) // 2)
                # 
                if h + r_reach >= grains[x]:
                    x = bisect_right(grains, h + r_reach, lo = x)
                    if x == ng:
                        return True
            return False
        
        hens.sort()
        grains.sort()
        nh, ng = len(hens), len(grains)
        l = 0
        r = 2 * (max(grains[-1], hens[-1]) - min(grains[0], hens[0]))
        while l < r:
            mid = (l + r) // 2
            if check(mid):
                r = mid
            else:
                l = mid + 1
        return l
```