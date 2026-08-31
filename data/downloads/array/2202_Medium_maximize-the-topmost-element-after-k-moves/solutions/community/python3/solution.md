# [Python 3] Find Maximum of first k-1 elements or (k+1)th element | Beats 100%

**Author:** hari19041
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1844186/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1844186/)

---

The num after the kth element do not matter as they can't be accessed.
So, handling some corner cases like:
1. If len(num) == 1.
2. if k == 0
3. Comparing k and len(nums)

**DO UPVOTE if you found it useful.**
```
class Solution:
    def maximumTop(self, nums: List[int], k: int) -> int:
        if len(nums) == 1:
            if k%2 != 0:
                return -1
            return nums[0]
        
        if k == 0:
            return nums[0]
        if k == len(nums):
            return max(nums[:-1])
        if k > len(nums):
            return max(nums)
        if k == 1:
            return nums[1]
        m = max(nums[:k-1])
        m = max(m, nums[k])
        return m
```
Time Complexity: O(n) - finding max
Space Complexity: O(1)