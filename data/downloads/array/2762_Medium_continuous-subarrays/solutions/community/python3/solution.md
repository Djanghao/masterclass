# [Python3] Sliding Window + Dictionary - Simple solution

**Author:** dolong2110
**Votes:** 14
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/3707414/](https://leetcode.com/problems/continuous-subarrays/solutions/3707414/)

---

# Intuition
at a time to satisfy the requirement we can only have a windows= set contains only 3 distinct number with values are in range 2. For ex: 1,2, 3. Each time we want to add new element to this window we have to update this range. If some number in old range not in new range remove this by move the window to its last existing number. To keep the position of each number of last existing position in the window, we use dictionary.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(3 * N)$$ ~ $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def continuousSubarrays(self, nums: List[int]) -> int:
        i = res = 0
        d = dict()
        for j, num in enumerate(nums):
            t = d.copy()
            for k, v in t.items():
                if abs(k - num) > 2:
                    i = max(i, v + 1)
                    d.pop(k)
            d[num] = j
            res += j - i + 1
        return res
```