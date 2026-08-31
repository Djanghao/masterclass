# Python3 two-liner

**Author:** DrFirestream
**Votes:** 33
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/465288/](https://leetcode.com/problems/4sum-ii/solutions/465288/)

---

Instead of using a usual dictionary to store 2-sums and their counts we can use standard Counter class that does that automatically and write solution in the most pythonic way possible:

```
class Solution:
    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        sums = collections.Counter(c+d for c in C for d in D)
        return sum(sums.get(-(a+b), 0) for a in A for b in B)
```