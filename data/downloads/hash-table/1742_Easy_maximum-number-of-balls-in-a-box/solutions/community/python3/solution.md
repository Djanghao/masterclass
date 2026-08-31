# [Python3] freq table

**Author:** ye15
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1042922/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1042922/)

---

**Algo**
Scan through all numbers from `lowLimit` to `highLimit` and calculate their sum of digits. Maintain a frequency table to keep track of their frequency. 

**Implementation**
```
class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        freq = defaultdict(int)
        for x in range(lowLimit, highLimit+1):
            freq[sum(int(xx) for xx in str(x))] += 1
        return max(freq.values())
```

**Analysis**
Time complexity `O(NlogM)`
Space complexity `O(logN)`