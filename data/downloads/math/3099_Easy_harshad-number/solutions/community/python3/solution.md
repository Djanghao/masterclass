# Python 3 || 2 lines, map and check  || T/S: 98%  /  57%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/harshad-number/solutions/4949807/](https://leetcode.com/problems/harshad-number/solutions/4949807/)

---

Here's the plan:

1. We sum the digits of `x`.
2. We return the sum of these digits if this sum of digits is a factor of `x`, otherwise return `-1`.


```
class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:

        smDigits = sum(map(int,str(x)))

        return smDigits if x % smDigits == 0 else -1
```
[https://leetcode.com/problems/harshad-number/submissions/1227190044/](https://leetcode.com/problems/harshad-number/submissions/1227190044/)


I could be wrong, but I think that time complexity is *O*(log*N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.
```