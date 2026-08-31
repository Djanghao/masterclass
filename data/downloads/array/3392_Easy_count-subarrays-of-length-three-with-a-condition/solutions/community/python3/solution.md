# Python one-liner

**Author:** blue_sky5
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6178914/](https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6178914/)

---

```
class Solution:
    def countSubarrays(self, nums: List[int]) -> int:
        return sum(nums[i-2] + nums[i] == nums[i-1]/2 for i in range(2, len(nums)))
```