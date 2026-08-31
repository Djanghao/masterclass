# [Python3] Clean code

**Author:** SPark9625
**Votes:** 7
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/1223913/](https://leetcode.com/problems/next-closest-time/solutions/1223913/)

---

```python
class Solution:
    def nextClosestTime(self, time: str) -> str:
        h, m = map(int, time.split(':'))
        digits = {h%10, m%10, h//10, m//10}
        
        while True:
            m += 1
            if m >= 60:
                h += 1
                m = m % 60
                if h >= 24:
                    h = h % 24
            if all([x in digits for x in [h%10, m%10, h//10, m//10]]):
                return f'{h:02}:{m:02}'
```

Everytime we increment the time by 1 minute and see if the result can be created by reusing the given digits.
Since there are only 24 hours and 60 minutes, we loop at most 24 * 60 times in the theoretical worst case.