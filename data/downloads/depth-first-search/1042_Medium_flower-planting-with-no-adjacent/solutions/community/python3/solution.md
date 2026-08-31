# Python 3   ||   5 lines,  sets, w/ with comments   ||   T/S: 88% / 78%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/2976696/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/2976696/)

---

```
class Solution:
    def gardenNoAdj(self, n: int, paths: List[List[int]]) -> List[int]:

        d, ans = defaultdict(list), [0]*(n+1)
      
        for a, b in paths: d[a].append(b) ; d[b].append(a)          # construct graph
         
        for i in range(1,n+1):                                      # determine available flowers
            ans[i] = ({1,2,3,4}-{ans[node] for node in d[i]}).pop()
            
        return ans[1:]                                              # return ans, one-indexed
```
[https://leetcode.com/problems/flower-planting-with-no-adjacent/submissions/1273661863/](https://leetcode.com/problems/flower-planting-with-no-adjacent/submissions/1273661863/)

I could be wrong, but I think that time is *O*(*N*) and space is *O*(*N*), in which *N* ~ `len(paths)`.