# [Python3] binary search

**Author:** ye15
**Votes:** 9
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/1524190/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/1524190/)

---


```
class Solution:
    def kthSmallestProduct(self, nums1: List[int], nums2: List[int], k: int) -> int:
        
        def fn(val):
            """Return count of products <= val."""
            ans = 0
            for x in nums1: 
                if x < 0: ans += len(nums2) - bisect_left(nums2, ceil(val/x))
                elif x == 0: 
                    if 0 <= val: ans += len(nums2)
                else: ans += bisect_right(nums2, floor(val/x))
            return ans 
            
        lo, hi = -10**10, 10**10 + 1
        while lo < hi: 
            mid = lo + hi >> 1
            if fn(mid) < k: lo = mid + 1
            else: hi = mid
        return lo 
```

```
class Solution:
    def kthSmallestProduct(self, nums1: List[int], nums2: List[int], k: int) -> int:
        neg = [x for x in nums1 if x < 0]
        pos = [x for x in nums1 if x >= 0]
        
        def fn(val):
            """Return count of products <= val."""
            ans = 0
            lo, hi = 0, len(nums2)-1
            for x in neg[::-1] + pos if val >= 0 else neg + pos[::-1]: 
                if x < 0: 
                    while lo < len(nums2) and x*nums2[lo] > val: lo += 1
                    ans += len(nums2) - lo
                elif x == 0: 
                    if 0 <= val: ans += len(nums2)
                else: 
                    while 0 <= hi and x*nums2[hi] > val: hi -= 1
                    ans += hi+1
            return ans 
        
        lo, hi = -10**10, 10**10 + 1
        while lo < hi: 
            mid = lo + hi >> 1
            if fn(mid) < k: lo = mid + 1
            else: hi = mid
        return lo 
```