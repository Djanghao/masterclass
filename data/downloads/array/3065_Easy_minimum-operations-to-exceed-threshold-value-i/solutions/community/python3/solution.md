# [Python3] 1 line solution O(N) || 49ms / 16.44mb

**Author:** yourick
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4815847/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4815847/)

---

```python3 []
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        return sum(n < k for n in nums)
```