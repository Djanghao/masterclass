# [Python3] 5 LOC; 3 sum variation, O(N**2)

**Author:** salma2vec
**Votes:** 0
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/4366554/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/4366554/)

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
from collections import defaultdict

class Solution:
    def countTriplets(self, A: List[int]) -> int:
        pairs, N = defaultdict(int), len(A)
        for i in range(N):
            for j in range(N):
                pairs[A[i]&A[j]] += 1
        return sum(pairs[k] if A[i] & k == 0 else 0 for k in pairs for i in range(N))
```