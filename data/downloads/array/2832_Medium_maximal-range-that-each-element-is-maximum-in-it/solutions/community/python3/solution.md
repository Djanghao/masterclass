# Python3 Monotonic stakc solution, O(N)

**Author:** cosmicshuai
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3951443/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3951443/)

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
    def maximumLengthOfRanges(self, nums: List[int]) -> List[int]:
        stack = [] #(idx, val), decresing order
        n = len(nums)
        ans = [0] * n 
        nums.append(10**9)
        for i, num in enumerate(nums):
            while stack and stack[-1][1] < num:
                idx, val = stack.pop()
                left = -1 if not stack else stack[-1][0]
                ans[idx] = i - left - 1
            stack.append((i, num))
        return ans
```