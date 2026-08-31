# Python, Simple dynamic programming, O(N) time complexity

**Author:** yz_chen
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-consecutive-subarrays/solutions/5872669/](https://leetcode.com/problems/sum-of-consecutive-subarrays/solutions/5872669/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use dynamic programming to bookkeep sums of consecutive subarrays that end at different locations.

# Approach
<!-- Describe your approach to solving the problem. -->
We let

```dp[i][0]``` record total the sum of **ascending consecutive subarrays** ends at ```i```

```dp[i][i]``` record the number of ascending consecutive subarrays ends at ```i```

Hence for ```nums[i]-nums[i-1] == 1```, we can have ```dp[i-1][1]``` subarrays in the form of ```[..., nums[i-2], nums[i-1], nums[i]]```. Their total sum is simply just the total sum of subarrays end at ```i-1``` plus ```nums[i]``` for each subarray:

```python []
dp[i-1][0] + dp[i-1][1] * nums[i]
```


In any scenarios, we could always select just a single number as an subarray. So before moving to ```i+1```, don't forget:

```python []
dp[i][0] += nums[i]
dp[i][1] += 1
```

Similarly,

```dp2[i][0]``` records the total sum of **decending consecutive subarrays** ends at ```i```
```dp2[i][i]``` records the number of decending consecutive subarrays ends at ```i```

Same strategy applies to the descending consecutive subarrays.
 
The final results would be:
```python []
(sum([dp[i][0] for i in range(len(dp))])+ sum([dp2[i][0] for i in range(len(dp2))]) - sum(nums)) 
```
each individual single ```nums[i]``` has been regarded as both an ascending and descending subarray with length 1, so minus the sum of the array to remove repeated count.

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code
```python []
class Solution(object):
    def getSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        mod = 10**9 + 7

        # dp[i][0]: 
        #           sum of ascending consecutive subarrays ends at i (inclusive)
        # dp[i][1]: number of consecutive subarrays ends at i
        dp = [[0,0] for i in range(len(nums))]

        # dp2[i][0]: 
        #           sum of descending consecutive subarrays ends at i (inclusive)
        # dp[i][1]: number of consecutive subarrays ends at i
        dp2 = [[0,0] for i in range(len(nums))]
    
        dp[0][0] = nums[0]
        dp[0][1] = 1

        dp2[0][0] = nums[0]
        dp2[0][1] = 1

        for i in range(1, len(nums)):
            if nums[i]-nums[i-1] == 1:
                dp[i][0] += dp[i-1][0] + dp[i-1][1] * nums[i]
                dp[i][1] += dp[i-1][1]
            if nums[i]-nums[i-1] == -1:
                dp2[i][0] += dp2[i-1][0] + dp2[i-1][1] * nums[i]
                dp2[i][1] += dp2[i-1][1]

            # just itself
            dp[i][0] += nums[i]
            dp[i][1] += 1

            dp2[i][0] += nums[i]
            dp2[i][1] += 1

        return (sum([dp[i][0] for i in range(len(dp))])
        + sum([dp2[i][0] for i in range(len(dp2))]) 
        - sum(nums)) % mod
```