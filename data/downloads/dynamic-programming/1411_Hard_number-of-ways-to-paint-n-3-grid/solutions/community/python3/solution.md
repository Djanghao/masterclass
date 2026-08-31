# Python 3 || 3 lines, linear transformation on R2  || T/S: 94% / 76%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/5637437/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/5637437/)

---

Here's the intuition:
- The computation is an iterative process; that is, we can determine `numOfWays(n)`if we know certain information about the *n - 1* level. 
- The top row for *n - 1* has two possibilities: a) the colors are of the form *abc* (all three colors) or *aba* (two of the three colors). The actual colors do not matter, only the patterns.
- The transformation to move from *n - 1* to *n* is to apply this *linear transformation*:
```
                    x = 3*x + 2*y
                    y = 2*x + 2*y    
```
- Here, `x` is the count of *aba* and `y` is the count of *abc*. (A few moments with example 1 and some scratch paper will convince the interested reader.)

____

```Python3 []
class Solution:
    def numOfWays(self, n: int, x = 0, y = 3, mod = 1_000_000_007) -> int:

        for _ in range(n):
            x, y = (3*x + 2*y) %mod, (2*x + 2*y)  %mod

        return (x+y) %mod
```
[https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/submissions/1438818284/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/submissions/1438818284/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `n`.