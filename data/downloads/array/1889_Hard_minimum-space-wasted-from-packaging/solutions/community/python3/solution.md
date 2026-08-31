# [Python3] prefix sum & binary search

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1253918/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1253918/)

---


```
class Solution:
    def minWastedSpace(self, packages: List[int], boxes: List[List[int]]) -> int:
        packages.sort()
        prefix = [0]
        for x in packages: prefix.append(prefix[-1] + x)
        
        ans = inf 
        for box in boxes: 
            box.sort()
            if packages[-1] <= box[-1]: 
                kk = val = 0 
                for x in box: 
                    k = bisect_right(packages, x)
                    val += (k - kk) * x - (prefix[k] - prefix[kk])
                    kk = k
                ans = min(ans, val)
        return ans % 1_000_000_007 if ans < inf else -1 
```

Edited on 6/6/2021
It turns out that we don't need prefix sum (per @lee215). 

```
class Solution:
    def minWastedSpace(self, packages: List[int], boxes: List[List[int]]) -> int:
        packages.sort()
        
        ans = inf 
        for box in boxes: 
            box.sort()
            if packages[-1] <= box[-1]: 
                kk = val = 0 
                for x in box: 
                    k = bisect_right(packages, x)
                    val += (k - kk) * x
                    kk = k
                ans = min(ans, val)
        return (ans - sum(packages)) % 1_000_000_007 if ans < inf else -1 
```