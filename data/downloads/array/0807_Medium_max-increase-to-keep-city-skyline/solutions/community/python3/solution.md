# Python 3 (two lines) (beats ~100%)

**Author:** junaidmansuri
**Votes:** 7
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/445773/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/445773/)

---

```
class Solution:
    def maxIncreaseKeepingSkyline(self, G: List[List[int]]) -> int:
        M, N, R, C = len(G), len(G[0]), [max(r) for r in G], [max(c) for c in zip(*G)]
        return sum(min(R[i],C[j]) - G[i][j] for i,j in itertools.product(range(M),range(N)))
		
		
- Junaid Mansuri
- Chicago, IL