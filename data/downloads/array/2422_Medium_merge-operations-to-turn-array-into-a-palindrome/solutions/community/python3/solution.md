# [Python3] - Two Pointers + Greedy

**Author:** dolong2110
**Votes:** 5
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/3450834/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/3450834/)

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
    def minimumOperations(self, nums: List[int]) -> int:
        res = 0
        l, r = 0, len(nums) - 1
        while l < r:
            if nums[l] == nums[r]:
                l += 1
                r -= 1
            else:
                if nums[l] + nums[l + 1] < nums[r] + nums[r - 1]:
                    nums[l + 1] += nums[l]
                    l += 1
                else:
                    nums[r - 1] += nums[r]
                    r -= 1
                res += 1
        return res
```