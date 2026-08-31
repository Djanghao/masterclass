# Python Solution

**Author:** karthikna
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-average-subarray-ii/solutions/953639/](https://leetcode.com/problems/maximum-average-subarray-ii/solutions/953639/)

---

```
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        max_val, min_val, error = max(nums), min(nums), float('inf')
        prev_mid = max_val
        while error > 0.00001:
            mid = (max_val + min_val) / 2
            if self.check(nums, mid, k):
                min_val = mid
            else:
                max_val = mid
            error = abs(prev_mid - mid)
            prev_mid = mid
        return min_val
    
    def check(self, nums, mid, k):
        prev, min_sum = 0, 0
        total = sum([nums[i] - mid for i in range(k)])
        if total >= 0:
            return True
        for i in range(k, len(nums)):
            total += nums[i] - mid
            prev += nums[i-k] - mid
            min_sum = min(min_sum, prev)
            if total > min_sum:
                return True
        return False
```