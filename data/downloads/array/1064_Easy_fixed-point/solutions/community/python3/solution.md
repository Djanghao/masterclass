# Python 3 one-liner (86.51%)

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/fixed-point/solutions/416513/](https://leetcode.com/problems/fixed-point/solutions/416513/)

---

A descent one-liner is below which utilizes Python generator (86.51%). 
```
class Solution:
    def fixedPoint(self, A: List[int]) -> int:
        return next((i for i in range(len(A)) if i == A[i]), -1)
```

The above solution doesn't take advantage of the fact that `A` is an array of distinct integers in ascending order, which indicates change of `A` cannot be slower than change of its index. With this in mind, we can implement below `O(log(n))`solution based on binary search. 
```
class Solution:
    def fixedPoint(self, arr: List[int]) -> int:
        lo, hi = 0, len(arr)-1
        while lo < hi: 
            mid = lo + hi >> 1
            if arr[mid] - mid < 0: lo = mid + 1
            else: hi = mid
        return lo if arr[lo] == lo else -1
```