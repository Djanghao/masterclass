# Python 3  ||   5 lines, combinations  ||   T/S: 99% / 92%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2670072/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2670072/)

---

```
class Solution:
    def maximumRows(self, mat: List[List[int]], cols: int) -> int:
	
        m, n, ans = len(mat), len(mat[0]), -inf
        
        for comb in combinations(range(n),n-cols):
        
            ct = len(set(r for r in range(m) for c in comb if mat[r][c] == 1))

            ans = max(ans,m-ct)

        return ans
```
[https://leetcode.com/problems/maximum-rows-covered-by-columns/submissions/1287518760/](https://leetcode.com/problems/maximum-rows-covered-by-columns/submissions/1287518760/)

I could be wrong, but I think that time complexity is *O*(*M*  * *N*^2) and space complexity is *O*(1), in which *N* ~ `m` and *N* ~ `n`.

