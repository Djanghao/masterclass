# Python O(n) time, O(1) space

**Author:** wzmao
**Votes:** 145
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/299071/](https://leetcode.com/problems/house-robber-ii/solutions/299071/)

---

Notice that the first house and the last house can not be both robbed, so we have rob(nums) = max(rob(nums[1:], nums[:-1]). Since there are no circles in both nums[1:] and nums[:-1], we can simply apply the answers from **House Rob**. https://leetcode.com/problems/house-robber/discuss/299056/Python-O(n)-time-O(1)-space-4-lines

```
class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def simple_rob(nums):
            rob, not_rob = 0, 0
            for num in nums:
                rob, not_rob = not_rob + num, max(rob, not_rob)
            return max(rob, not_rob)
        
        if not nums:
            return 0
        elif len(nums) == 1:
            return nums[0]
        else:
            return max(simple_rob(nums[1:]), simple_rob(nums[:-1]))
```

Slicing a list is actually O(n) space in Python (thanks post2web for pointing out). In our case, nums[1:], nums[:-1] create copies, to avoid this, we can pass indices into the simple_rob function instead of sliced lists. Below is the less elegant, but true O(1) space solution:

```
class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def simple_rob(nums, i, j):
            rob, not_rob = 0, 0
            for idx in range(i, j):
                num = nums[idx]
                rob, not_rob = not_rob + num, max(rob, not_rob)
            return max(rob, not_rob)
        
        if not nums:
            return 0
        elif len(nums) == 1:
            return nums[0]
        else:
            n = len(nums)
            return max(simple_rob(nums, 1, n), simple_rob(nums, 0, n-1))