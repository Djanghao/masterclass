# Python Simple Solution Explained (video + code) (Fastest)

**Author:** spec_he123
**Votes:** 41
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/868985/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/868985/)

---

[](https://www.youtube.com/watch?v=4775IgUKfww)
https://www.youtube.com/watch?v=4775IgUKfww
```
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:        
        l = 0
        res = 0
        product = 1
        
        for r in range(len(nums)):
            product *= nums[r]
            
            if product >= k:
                while product >= k and l <= r:
                    product /= nums[l]
                    l += 1
            
            res += r - l + 1
        
        return res
```