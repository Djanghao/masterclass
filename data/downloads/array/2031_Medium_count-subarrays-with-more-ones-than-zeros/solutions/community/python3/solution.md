# [Python3] O(N) Calculate Difference Between Ones and Zeros

**Author:** licpotis
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1554228/](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1554228/)

---

Time O(N)
Space O(N)

Let say the number of `1` in a subarray is `ones` and `0` is `zeros`. We can calculate `(ones - zeros)` of `nums[:i+1]` for each position `i` through the array `nums` and store them in an array `diffs`. 

At each position `i` we know that the difference at `j` where `j < i` and `diffs[j] < diffs[i]` guarantees that `nums[j+1:i+1]` is a good subarray which is `ones > zeros`. 

In addition,  we also know `diffs[i] == diffs[i - 1]) +/- 1`. Let say `dp[i] `is the number of good substrings with the end of `nums[i]`, we know that

1. if ` nums[i] == 1` , then `diffs[i] == diffs[i - 1] + 1`, and `dp[i] = dp[i - 1] + (the number of j, where j < i and diffs[j] == nums[i - 1]`. 
2. if ` nums[i] == 0` , then `diffs[i] == diffs[i - 1]  - 1`, and `dp[i] = dp[i - 1] - (the number of j,  where j < i and diffs[j] == nums[i - 1]  - 1`. 

If we maintain a dictionary `counts`through the iteration, then we can simply get the plus/minus between `dp[i]` and `dp[i - 1]`. Here is my code:
```
class Solution:
    def subarraysWithMoreZerosThanOnes(self, nums: List[int]) -> int:
        MOD = 10** 9 + 7
        counts = collections.Counter({0:1})
        res = s = dp = 0
        for n in nums:
            if n:
                s += 1
                dp += counts[s - 1]
            else:
                s -= 1
                dp -= counts[s]
            res = (res + dp) % MOD
            counts[s] += 1
        
        return res % MOD
```