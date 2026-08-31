# Python | Greedy | O(n^2)

**Author:** aryonbe
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4416852/](https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4416852/)

---

# Code
```
from collections import Counter
class Solution:
    def divisibleTripletCount(self, nums: List[int], d: int) -> int:
        n = len(nums)
        counter = Counter()
        res = 0
        for j in range(n-2, 0, -1):
            counter[nums[j+1]%d] += 1
            for i in range(j):
                res += counter[(d-nums[i]-nums[j])%d]
        return res

        
```