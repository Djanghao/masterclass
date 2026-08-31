# Clean Two Pointer One Pass O(N)

**Author:** LayzerK
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-consecutive-subarrays/solutions/5773517/](https://leetcode.com/problems/sum-of-consecutive-subarrays/solutions/5773517/)

---

A lot of the other python solutions are using over complicated approaches. All we need to do is keep track of a variable that represents the current sum of all windows ending at this position. This can be done using a classic two pointer left/right approach where left indicates the start of your subarray and right indicates the end.

This becomes a little bit tricky because we can have a sequence like 99 100 99. While the absolute difference is all 1 for these, it goes from 1 to -1 which is not allowed. However, the 100 is still valid to be used in both. To handle such cases, we can simply move our left pointer to right-1 to indicate that the new subarray starts at the prior element. Lastly, to detect such cases, we need to store whether the prior difference was -1 or 1. 

Note that for a subarray of [left, right], when you are including the rightmost element, it will have (right-left+1) subarrays that have it as an ending point. Thus, you add that much to the current sum.

```python
class Solution:
    def getSum(self, nums: List[int]) -> int:
        ans = nums[0]
        MOD = 10**9 + 7
        
        curr = nums[0]
        left = 0
        prior = 0
        for right in range(1, len(nums)):
            diff = nums[right] - nums[right-1]
            
            if abs(diff) != 1:
                prior = 0
                left = right
                curr = 0
            elif prior != diff:
                    curr = nums[right-1]
                    left = right-1
                    prior = diff
            curr += nums[right] * (right-left+1)
            ans = (ans + curr)  % MOD
        return ans
```