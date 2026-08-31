# Python 3   ||   1 line   ||   T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3344897/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3344897/)

---

```
class Solution:
    def kItemsWithMaximumSum(self, numOnes: int, numZeros: int,
                                   numNegOnes: int, k: int) -> int:

        return k if k<= numOnes else numOnes - max(0, k-numOnes-numZeros)
```
[https://leetcode.com/problems/k-items-with-the-maximum-sum/submissions/922565182/](https://leetcode.com/problems/k-items-with-the-maximum-sum/submissions/922565182/)

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).
