# Python 3 || 3 lines, combinations  || T/S: 97% / 53%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/5545772/](https://leetcode.com/problems/simplified-fractions/solutions/5545772/)

---

Note that, for example:
```
combinations(1, 4+1) = [(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)]
```
If we filter for only those pairs `(m, d) ` for which `gcd(m,d) ==1`, we get:
```
               pairs = [(1,2), (1,3), (1,4), (2,3),     , (3,4)]
```
____
Here's the code:
```
class Solution:
    def simplifiedFractions(self, n: int) -> list[str]:

        isReduced = lambda x: gcd(*x) == 1

        pairs = filter(isReduced, combinations(range(1,n+1),2))

        return [f"{x}/{d}" for x, d in pairs]
        
```
[https://leetcode.com/problems/simplified-fractions/submissions/1335510547/](https://leetcode.com/problems/simplified-fractions/submissions/1335510547/)