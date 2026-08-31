# ✨🚀 Easy || 💯 Beats 100% Beginner Python Solution

**Author:** Ravi_Prakash_Maurya
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355125/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355125/)

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
    def minimumAverage(self, nums: List[int]) -> float:
        minx = float('inf')
        miny = float('inf')
        maxx = 0
        maxy = 0
        x = 0
        for i in range(len(nums)):
            for j in range(len(nums)):
                if nums[i] == 1:
                    minx = min(minx, j)
                    miny = min(miny, i)
                    maxx = max(maxx, j)
                    maxy = max(maxy, i)
        x = (maxx - minx + 1) * (maxy - miny + 1)
        return x
```