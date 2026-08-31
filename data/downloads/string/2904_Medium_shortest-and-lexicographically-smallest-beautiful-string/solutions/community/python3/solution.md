# Python 3   ||   6 lines, with explanation  ||   T/S: 98% / 99%

**Author:** Spaulding_
**Votes:** 6
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4172386/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4172386/)

---

Here's the plan:

An analysis of the problem leads to this condition: the first and last characters of the solution must each be one. So:

1. We collect the indices of ones in `ones`.
2. We determine the delimiting indices `l` and `r` of those candidate strings in`cands` that (a) start and end with one and (b) contain`k`ones.
2. We determine `minLen`, the minimum `r-l` of elements in `cands`.
3. We filter`cands`to only include those candidates for which `l-r = minLen`
4. We determine the lexicographically smallest substring with`min`.

```
class Solution:
    def shortestBeautifulSubstring(self, s: str, k: int) -> str:

        ones = [i for i, digit in enumerate(s) if digit == '1']     # <-- 1.
        
        if len(ones) < k: return ''

        cands = list(zip(ones,ones[k-1:]))                          
        minLen = min(r-l for l, r in cands)                         # <-- 2.

        cands = list(filter(lambda x: x[1]-x[0] == minLen, cands))  # <-- 3.

        return min([s[l:r+1] for l,r in cands])                     # <-- 4.
```
[https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/submissions/1272097085/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/submissions/1272097085/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.


