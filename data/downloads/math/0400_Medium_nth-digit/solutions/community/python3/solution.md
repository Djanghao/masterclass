# [Python3] O(logN) solution

**Author:** ye15
**Votes:** 42
**Link:** [https://leetcode.com/problems/nth-digit/solutions/828924/](https://leetcode.com/problems/nth-digit/solutions/828924/)

---

Observe that there are 9 numbers with 1 digit, 90 numbers with 2 digits, 900 numbers with 3 digits, ... A `O(logN)` solution can be derived from it. 

```
    1-9     | 9
   10-99    | 90
  100-999   | 900 
 1000-9999  | 9000 
10000-99999 | 90000
```

```
class Solution:
    def findNthDigit(self, n: int) -> int:
        digit = base = 1 # starting from 1 digit
        while n > 9*base*digit: # upper limit of d digits 
            n -= 9*base*digit
            digit += 1
            base *= 10 
        q, r = divmod(n-1, digit)
        return int(str(base + q)[r])
```