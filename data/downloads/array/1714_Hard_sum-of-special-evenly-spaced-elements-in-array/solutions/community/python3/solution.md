# Python (Simple Maths)

**Author:** rnotappl
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/solutions/3251640/](https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/solutions/3251640/)

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
class Solution:
    def solve(self, nums, queries):
        n = len(nums)

        m, mod = int(n**0.5), 10**9+7

        ans = [nums[:] for _ in range(m)]

        for i in range(1,m):
            for j in range(n-1,-1,-1):
                if i+j < n:
                    ans[i][j] = (ans[i][j] + ans[i][i+j])%mod

        return [ans[k][b] if k < m else sum(nums[b::k])%mod for b,k in queries]

        

        
        
```