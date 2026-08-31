# Python O(n) 6 Lines beats 86% time

**Author:** macqueen
**Votes:** 30
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/422213/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/422213/)

---

```python
class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        res  , count  = 0,  [0] * 60
        for one in range(len(time)):
            index = time[one] % 60
            res += count[(60 - index)%60] # %60 is for index==0
            count[index] += 1
        return res
```

**If it helps you ,Please give me a star.
Thanks**