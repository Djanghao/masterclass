# Python funny one-liner

**Author:** AntonBorzenko
**Votes:** 5
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/2942418/](https://leetcode.com/problems/armstrong-number/solutions/2942418/)

---

# Explanation
Armstrong (or narcissistic) numbers sequence is a strictly limited sequence: http://oeis.org/A005188

And there are only 27 Armstrong numbers in the range from 1 to 10^8. 

# Code
```
class Solution:
    def isArmstrong(self, n: int) -> bool:
        return n in {1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748, 92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315, 24678050, 24678051, 88593477}
```