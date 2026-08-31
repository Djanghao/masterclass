# Python 3   ||   12 lines,  bin search, w/ explanation   ||   T/S: 93% / 70%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/3099186/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/3099186/)

---

The number of zeros in the decimal representation of an integer is equal to the count of factors of`10` in the integer. The number of `10`-factors in an integer, in turn, is equal to the lesser of the counts of `5`-factors and of `2`-factors in that integer. For an integer n!, it is the count `5`-factors because the count of`2`-factors is at least thrice the count of `5`-factors.

The plan here is to determine the integers `atLeast_K(k)` and `atLeast_K(k-1)`, the greatest integers have at most`5`-factors counts of`k` and `k-1` respectively. The solution to the problem is the difference of these quantities. We use a binary search in `atLeast_K`.
```
class Solution:
    def preimageSizeFZF(self, k: int) -> int:  

        count = lambda x: 0 if x == 0 else x//5 + count(x//5)
        
        atLeast_K = lambda x: bisect_right(range(5*x + 5), x, key = count)

        return atLeast_K(k) - atLeast_K(k-1)
```
[https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/submissions/1403224986/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/submissions/1403224986/)

I could be wrong, but I think that time complexity is *O*(log *K*) and space complexity is *O*(1), in which *K* ~ `k`.