# [Python 3] Simple one-liner using permutations() | Straightforward

**Author:** TP0604
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1499029/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1499029/)

---

```
class Solution:
    def numOfPairs(self, nums, target):
        return sum(i + j == target for i, j in permutations(nums, 2))
```