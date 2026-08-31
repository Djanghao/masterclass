# Python 3   ||   8 lines,  mostly mathematics   ||   T/S: 94% / 99%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/3134089/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/3134089/)

---

```
class Solution:
    def atMostNGivenDigitSet(self, digits: List[str], n: int) -> int:

        f = lambda x: sum(ch < x for ch in digits)

        d, k = len(digits), len(str(n))
        
        ans = k-1 if d == 1 else (d**k - d)//(d - 1)
        
        for i, ch in enumerate(str(n)):

            ans += f(ch) * (d ** (k - i - 1))
            if ch not in digits: break

        else: ans += 1
            
        return ans 
```
[https://leetcode.com/problems/numbers-at-most-n-given-digit-set/submissions/890415119/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/submissions/890415119/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(digits)`.
