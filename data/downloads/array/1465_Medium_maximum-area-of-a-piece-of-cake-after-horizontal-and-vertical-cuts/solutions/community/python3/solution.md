# Simple Python Max Gaps Product

**Author:** inasaaone
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/662041/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/662041/)

---

```
class Solution:
    def maxArea(self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]) -> int:
        horizontalCuts.sort()
        verticalCuts.sort()
        
        def getGap(arr, n):
            prev = 0
            res = 0
            for i in range(len(arr)):
                res = max(arr[i]-prev, res)
                prev = arr[i]
                
            return max(n-prev, res)
    
        return (getGap(horizontalCuts, h) * getGap(verticalCuts, w)) % (10**9 + 7)
```

**Another One**
```
class Solution:
    def maxArea(self, h: int, w: int, H: List[int], V: List[int]) -> int:
        def get_max_gap(arr : List[int]) -> int:
            # returns max gap from arr
            res = 0
            for i in range(1, len(arr)):
                res = max(res, arr[i] - arr[i-1])
            return res

        M = 10**9 + 7
        H = [0] + sorted(H) + [h]
        V = [0] + sorted(V) + [w]
        return (get_max_gap(H) * get_max_gap(V)) % M
```