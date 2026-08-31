# Python 3   ||   5 lines,  dp recursion   ||   67% / 41%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4329837/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4329837/)

---


The problem is equivalent to:   *from position `idx` in `price`, move to the most efficient position with in the next `idx+1` positions in `price`.*
```
class Solution:
    def minimumCoins(self, prices: List[int]) -> int:

        @lru_cache(None)
        def dp(idx = 0)-> int:
            if idx >= n: return 0
            return prices[idx]+ min(dp(i) for i in range(idx+1, 2*idx+3))
        

        n = len(prices)
        return dp()
```
[https://leetcode.com/problems/minimum-number-of-coins-for-fruits/submissions/1295782594/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/submissions/1295782594/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.