# Python 3   ||   11 lines,  dp   ||   T/S: 98% / 99%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/3781063/](https://leetcode.com/problems/remove-boxes/solutions/3781063/)

---

```
class Solution:
    def removeBoxes(self, boxes: List[int]) -> int:

        @lru_cache(None)
        def dfs(grps: tuple) -> int:
            
            if not grps: return 0
            (colorL, lenL), grps = grps[0], grps[1:]

            res = lenL*lenL + dfs(grps)

            for i, (colorR, lenR) in enumerate(grps):
                if colorL == colorR:
                    res = max(res, dfs(grps[:i]) + 
                              dfs(((colorL, lenL+lenR),) + grps[i+1:]))

            return res


        box_grps = tuple((k, len(list(g))) for k,g in groupby(boxes))
        return dfs(box_grps)
```
[https://leetcode.com/problems/remove-boxes/submissions/1270999351/](https://leetcode.com/problems/remove-boxes/submissions/1270999351/)

I could be wrong, but I think that time complexity is *O*(*N*^3) and space complexity is *O*(*N*^2), in which *N* ~ `len(boxes)`.