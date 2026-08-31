# Easy Python Solution - O(n) time and O(1) space

**Author:** rohanvedula
**Votes:** 2
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/4988837/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/4988837/)

---

# Intuition / Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Consider a sequence `01001` we know that there is exactly 3 places we can create a divsion in this sequence `01|001`, `010|01`, and `0100|1`. We can see that the number of divisions between any 2 subsequent ones is the number of `0` plus 1.  

Now consider a string with multiple ones, if we know that there are $w_1$ ways to put a division between 2 subsequent 1s, then we know that the total number of divisions is $\\Pi_1^n w_i$ where $w_i$ is the number of ways to divide the $i$-th and $i+1$-th one. With this reasoning, we can use a sliding window idea to keep track on the number of `0s` between any 2 ones and multiply our answer by that much.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ --> 

# Code
```
class Solution:
    def numberOfGoodSubarraySplits(self, nums: List[int]) -> int:
        if sum(nums) == 0:
            return 0
        
        ans = 1        
        first_pos = nums.index(1)
        curr_run = 1
        for i in range(first_pos+1, len(nums)):
            if nums[i]==0:
                curr_run+=1
            else:
                ans*=curr_run
                ans%=(10**9+7)
                curr_run = 1
        return ans
```