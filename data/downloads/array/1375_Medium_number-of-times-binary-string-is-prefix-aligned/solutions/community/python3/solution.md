# Python 3   ||   6 lines,  w/ explanation   ||   T/S:   94% / 98%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/2884695/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/2884695/)

---

Here's the plan:
- The binary string is prefix-aligned if and only if the flips comprise a set of consecutive integers beginning with one (`123` is valid, `234` or `125` is not)
- The indices will always comprise a set of consecutive integers beginning with zero.
- The binary string is prefix-aligned after `k` flips if and only if `sum (i+1) = sum (flips[:i+1])` for `i < k`.
```
class Solution:
    def numTimesAllBlue(self, flips: List[int]) -> int:

        ans = fSum = iSum = 0

        for i,flip in enumerate(flips):

            fSum+= flip
            iSum+= i+1

            ans+= (iSum==fSum)

        return ans

```
[https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/submissions/1277608664/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/submissions/1277608664/)


I could be wrong, but I think that time is *O*(*N*) and space is *O*(1), in which *N* ~ `len(flips)`.