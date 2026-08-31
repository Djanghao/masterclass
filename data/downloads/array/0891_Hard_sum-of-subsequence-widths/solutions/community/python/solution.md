# easy solution there lads

**Author:** Chandvanibharat
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5337593/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5337593/)

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
    def sumSubseqWidths(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        MOD = 1000000007
        nums.sort()
        n = len(nums)
        
        power_of_2 = [1] * n
        for i in range(1, n):
            power_of_2[i] = power_of_2[i-1] * 2 % MOD
        
        result = 0
        for i in range(n):
            result = (result + nums[i] * (power_of_2[i] - power_of_2[n-i-1])) % MOD
        
        return result

```