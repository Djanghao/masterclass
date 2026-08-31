# Python 3   ||   10 lines,  recursion, w/ brief explanation   ||   T/S: 42% / 90%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/2926597/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/2926597/)

---

```
class Solution:
    def smallestValue(self, n):

        prev, ans = n, 0

        while not n%2:                  # 2 is the unique even prime
                ans += 2
                n//= 2

        for i in range(3,n+1,2):        #  <\u2013\u2013 prune even divisors...
                while not n%i:
                    ans += i
                    n//= i

        return self.smallestValue(ans) if ans != prev else ans
```
[https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/submissions/1290506391/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/submissions/1290506391/)


I could be wrong, but I think that time complexity is *O*(sqrt *N* * log *N*) and space complexity is *O*(log *N*), in which *N* ~ `n`.
