# Python | Two pointer technique | Easy solution

**Author:** __Asrar
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/2304108/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/2304108/)

---

***Do hit like button if helpful!!!!***
```
class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        start,end = -1, -1
        res = 0
        for i in range(len(nums)):
            if nums[i] > right:
                start = end = i
                continue
                
            if nums[i] >= left:
                end = i
                
            res += end - start
        return res
```