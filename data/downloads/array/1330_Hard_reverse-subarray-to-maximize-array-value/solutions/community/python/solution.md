# here you go lads- learn and keep growing

**Author:** Chandvanibharat
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5338717/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5338717/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution(object):
    def maxValueAfterReverse(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        total, diff, min_val, max_val = 0, 0, float('inf'), float('-inf')
        for i in range(n - 1):
            total += abs(nums[i] - nums[i + 1])
            diff = max(diff, abs(nums[0] - nums[i + 1]) - abs(nums[i] - nums[i + 1]))
            diff = max(diff, abs(nums[n - 1] - nums[i]) - abs(nums[i + 1] - nums[i]))
            min_val, max_val = min(min_val, max(nums[i], nums[i + 1])), max(max_val, min(nums[i], nums[i + 1]))
        return total + max(diff, (max_val - min_val) * 2)

```