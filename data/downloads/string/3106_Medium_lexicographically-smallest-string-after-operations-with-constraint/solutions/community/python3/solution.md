# Python 3 || 9 lines,  w/ explanation  || T/S: 99% / 93%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4989744/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4989744/)

---

Here's the plan:

1. We iterate across the *ords* of the characters in `s`.

1. If the value of `k` is sufficient, we move each character of `s` to *a* along the shortest path for that character and decrement `k` accordingly.
1. If the value of `k` is not sufficient, we spend all of `k` to move a character as far forward toward *a* as possible.
1. We append any tail of `s` left after `k` is exhausted.


```
class Solution:
    def getSmallestString(self, s: str, k: int, ans = '' ) -> str:

        for i, num in enumerate(map(lambda x: ord(x) - 97, s)):
                                                # <--1)
            dist = min(num, 26 - num)
            if dist <= k:                       # <--2)
                k-= dist
                ans+= 'a'
            else: 
                ans+= chr(num + 97 - k)         # <--3)
                break

        return ans + s[i+1:]                    # <--4)
```
[https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/submissions/1266897847/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/submissions/1266897847/)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.