# [Python3] greedy O(N)

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/1026736/](https://leetcode.com/problems/largest-subarray-length-k/solutions/1026736/)

---

**Algo**
Leveraging on the fact that all numbers are distinct in `nums`, we can find the largest number with enough. 

**Implementation**
```
class Solution:
    def largestSubarray(self, nums: List[int], k: int) -> List[int]:
        ii = 0
        for i in range(len(nums)-k+1): 
            if nums[i] > nums[ii]: ii = i
        return nums[ii:ii+k]
```

**Analysis**
Time complexity `O(N)`
Space complexity `O(1)`

```
class Solution:
    def largestSubarray(self, nums: List[int], k: int) -> List[int]:
        loc = {x: i for i, x in enumerate(nums)}
        for x in sorted(nums, reverse=True): 
            i = loc[x]
            if i + k <= len(nums): return nums[i:i+k]
```