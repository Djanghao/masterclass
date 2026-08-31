# ✅Python || Easy Approach

**Author:** chuhonghao01
**Votes:** 40
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2395275/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2395275/)

---

```
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        
        ans = 0
        n = len(nums)
        for i in range(n):
            if nums[i] + diff in nums and nums[i] + 2 * diff in nums:
                ans += 1
        
        return ans
```