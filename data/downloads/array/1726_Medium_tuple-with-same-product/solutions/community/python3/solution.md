# [Python3] freq table

**Author:** ye15
**Votes:** 35
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/1020657/](https://leetcode.com/problems/tuple-with-same-product/solutions/1020657/)

---

**Algo**
Use a nested loop to scan possible `x*y` and keep a frequency table. When a product has been seen before, update `ans` with counting before the current occurrence. Return `8*ans`. 

**Implementation**
```
class Solution:
    def tupleSameProduct(self, nums: List[int]) -> int:
        ans = 0
        freq = {}
        for i in range(len(nums)):
            for j in range(i+1, len(nums)): 
                key = nums[i] * nums[j]
                ans += freq.get(key, 0)
                freq[key] = 1 + freq.get(key, 0)
        return 8*ans
```

**Analysis**
Time complexity `O(N^2)`
Space complexity `O(N^2)`