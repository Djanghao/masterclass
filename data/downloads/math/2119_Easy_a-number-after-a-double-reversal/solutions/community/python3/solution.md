# [Python3] 1 Liner | O(1) Time and Space | Short and Clean Explanation

**Author:** PatrickOweijane
**Votes:** 15
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/1648940/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/1648940/)

---

1. The logic here is simple: The only time reversing a number twice is different from the original number is when you have a `0` at the end of the number (except for the case when `num==0`)
2. Here, `num % 10` is used to retrive the last number
```
class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        return not num or num % 10
```