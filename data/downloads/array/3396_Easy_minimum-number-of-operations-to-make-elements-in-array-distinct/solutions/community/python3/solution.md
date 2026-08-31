# [Python3] backward

**Author:** ye15
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6175384/](https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6175384/)

---


```
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        freq = Counter()
        for i, x in reversed(list(enumerate(nums))): 
            freq[x] += 1
            if freq[x] == 2: return (i+3)//3
        return 0
```