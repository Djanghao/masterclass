# Easy and Brute force solution in python ✅

**Author:** shyam_3017
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4672337/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4672337/)

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
    def maximumSubarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        # ans = float('-inf')
        
        # for left in range(len(nums)):
        #     for right in range(left, len(nums)):
        #         if abs(nums[left] - (nums[right])) == k:
        #             ans = max(ans, sum(nums[left:right + 1]))
            
        # if ans == float('-inf'):
        #     return 0
        # return ans

        n = len(nums)
        prefix_sum = [0] * (n + 1)
        for i, num in enumerate(nums):
            prefix_sum[i + 1] = prefix_sum[i] + num
        seen = {}
        ans = float('-inf')
        for i, num in enumerate(nums):
            if num - k in seen:
                j = seen[num - k]
                ans = max(ans, prefix_sum[i + 1] - prefix_sum[j])
            if num + k in seen:
                j = seen[num + k]
                ans = max(ans, prefix_sum[i + 1] - prefix_sum[j])
            if num in seen:
                j = seen[num]
                if prefix_sum[i] - prefix_sum[j] < 0:
                    seen[num] = i
            else:
                seen[num] = i
        return ans if ans > float('-inf') else 0

 
```