# Simple Python Solution

**Author:** chrischika
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123307/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123307/)

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
```python3 []
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        numsSet = set(nums)
        mn = min(numsSet)
        if mn < k:
            return -1
        elif mn > k:
            return len(numsSet)
        else:
            return len(numsSet) - 1
        
        
```