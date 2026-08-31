# Easy Python3 Solution using Count

**Author:** Lalithkiran
**Votes:** 8
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/3164855/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/3164855/)

---


# Code
```
class Solution:
    def digitCount(self, num: str) -> bool:
        for i in range(len(num)):
            if int(num[i]) != num.count(str(i)):
                return False
        return True
```