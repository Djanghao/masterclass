# [Python3] almost LIS

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1635109/](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1635109/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/55c6a88797eef9ac745a3dbbff821a2aac735a70) for solutions of weekly 272. 

```
class Solution:
    def kIncreasing(self, arr: List[int], k: int) -> int:
        
        def fn(sub): 
            """Return ops to make sub non-decreasing."""
            vals = []
            for x in sub: 
                k = bisect_right(vals, x)
                if k == len(vals): vals.append(x)
                else: vals[k] = x
            return len(sub) - len(vals)
        
        return sum(fn(arr[i:len(arr):k]) for i in range(k))
```

Alternative implementation 
```
class Solution:
    def kIncreasing(self, arr: List[int], k: int) -> int:
        ans = 0 
        for _ in range(k): 
            vals = []
            for i in range(_, len(arr), k): 
                if not vals or vals[-1] <= arr[i]: vals.append(arr[i])
                else: vals[bisect_right(vals, arr[i])] = arr[i]
            ans += len(vals)
        return len(arr) - ans
```