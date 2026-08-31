# Python: binary search on ranges

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/4166305/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/4166305/)

---

```
class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        """
        banned [1...10^9]
        
     b: 1     5      15]
          2-4   6-14
                                s       e
        s = '0' e = 1  -> i = ('0'+1) - (1-1) = 1-0 -> 0-1+1=0
        s = 1   e = 5  -> i = (1+1) - (5-1)   = 2-4 -> 4-2+1=3
        s = 5   e = 15 -> i = (5+1) - (15-1)  = 6-14 > 14-6+1=9
          
     b:     6 7 8]
        1-5       9-11

        s = '0' e = 6  -> i = ('0'+1) - (6-1) = 1-5 -> 5-1+1=5
        s = 6   e = 7  -> i = (6+1) - (7-1)   = 7-6 -> 7-6+1=0
        s = 7   e = 8  -> i = (7+1) - (8-1)   = 8-7 -> 8-7+1=0

     b: 1     5  7     15
          2-4   6 9-14
                                s       e
        s = '0' e = 1  -> i = ('0'+1) - (1-1) = 1-0 -> 0-1+1=0

        """
        ap = lambda s,e: running_sum + (s + e) * (e - s + 1) // 2
        banned.sort()
        banned.append(n + 1)
        N = len(banned)
        start = end = running_sum = count = i = 0
        while i < N and running_sum < maxSum:
            start,end = end,banned[i]
            range_start,range_end = start + 1,end - 1
            if range_end - range_start + 1 > 0:
                if ap(range_start, range_end) > maxSum:
                    left = range_start
                    right = range_end + 1
                    while left < right:
                        mid = left + (right - left) // 2
                        if ap(range_start, mid) <= maxSum:
                            left = mid + 1
                        else:
                            right = mid
                    range_end = left - 1
                running_sum = ap(range_start, range_end)
                count += range_end - range_start + 1
            i += 1
        return count
```