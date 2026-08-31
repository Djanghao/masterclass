# Simple Recursive DP with Explanation

**Author:** ipuppyian
**Votes:** 3
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3219586/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3219586/)

---

# Solution

We divide the problem into smaller problems until we reach 0, which will give only 1 combination.

Every time we set a pivot and keep changing its pair. This will divide the people and leave us two groups (both groups need to have even numbers of people). In each pairing, we have `total people - 2` after taking out the pivot pairing. We find all possile pairing and sum up the combinations of each one. 

# Complexity
- Time complexity: $$O(n^2)$$
- Space complexity: $$O(n)$$

# Code
```
from functools import cache

class Solution:
    def numberOfWays(self, numPeople: int) -> int:
        @cache
        def dp(num_people):
            if num_people == 0:
                return 1
            return sum(dp(group1) * dp(num_people-2-group1) for group1 in range(0, num_people-1, 2))
        
        return dp(numPeople) % (10**9+7)
```