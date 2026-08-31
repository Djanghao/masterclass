# [Python 3] Prefix Sum + Hash Table - Easy to Understand

**Author:** dolong2110
**Votes:** 3
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/3789404/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/3789404/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maxScoreIndices(self, nums: List[int]) -> List[int]:
        cnt_1 = 0
        for num in nums:
            if num == 1: cnt_1 += 1
        
        cnt_0, max_division = 0, cnt_1
        d = collections.defaultdict(list)
        d[cnt_1].append(0)
        for i, num in enumerate(nums):
            cnt_0 += int(num == 0)
            cnt_1 -= int(num == 1)
            d[cnt_0 + cnt_1].append(i + 1)
            max_division = max(max_division, cnt_0 + cnt_1)
        return d[max_division]
```