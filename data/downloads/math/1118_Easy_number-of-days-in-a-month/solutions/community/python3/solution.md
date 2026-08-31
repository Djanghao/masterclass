# Python 3 self-explained solution

**Author:** ye15
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/416459/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/416459/)

---

The algorithm to determine leap year is below:
* if (year is divisible by 4) and (year is not divisible by 100) then (it is a leap year);
* if (year is divisible by 400) then (it is a leap year).

```
class Solution:
    def numberOfDays(self, Y: int, M: int) -> int:
        if M in {1,3,5,7,8,10,12}: return 31
        elif M != 2: return 30
        else: return 28 + (Y % 4 == 0 and Y % 100 != 0 or Y % 400 == 0)
```

Edited on 2/4/2021
```
class Solution:
    def numberOfDays(self, Y: int, M: int) -> int:
        days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        return days[M-1] + (M == 2 and (Y%4 == 0 and Y%100 != 0 or Y%400 == 0))
```