# Optimal Easy to Understand O(n) beats 94% Python Code

**Author:** ivankatrump
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/256463/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/256463/)

---

A lot of solutions here either put `i+1` to history (sum) hashmap or start it with `{0: -1}`, which makes the code just less maintainable, and to be honest the reason of doing so isn't very obvious. I just couldn't get my head around that. Following solution solves the same problem without going through that indexing mess.

```python
class Solution(object):
    def maxSubArrayLen(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        seen_sum = {0:0}
        total_sum, largest_len = 0, 0
        for i in range(len(nums)):
            total_sum += nums[i]
            if total_sum == k:
                largest_len = i + 1
            else: 
                required = total_sum - k
                if required in seen_sum:
                    largest_len = max(largest_len, i - seen_sum[required])
            if total_sum not in seen_sum:
                seen_sum[total_sum] = i
        return largest_len
        
```