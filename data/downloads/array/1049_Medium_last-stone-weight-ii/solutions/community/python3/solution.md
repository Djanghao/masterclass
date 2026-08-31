# Python3 All possible sums

**Author:** tp99
**Votes:** 8
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/461955/](https://leetcode.com/problems/last-stone-weight-ii/solutions/461955/)

---

I did not see the knapsack intuition when solving this problem.
But since the weight of the final stone will be a formation sum of all stones with +- signs (because any new stones is an absolute difference of two stones). So, I approach this by generating all possible sums. 

```python
class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        s = {0}
        for st in stones:
            tmp = set()
            for i in s:
                tmp.add(abs(i + st))
                tmp.add(abs(i - st))
            s = tmp
        return min(s) if len(s) > 0 else 0
```