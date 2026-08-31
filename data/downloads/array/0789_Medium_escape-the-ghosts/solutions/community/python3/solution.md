# Python 3   ||   2 lines,  w/ a brief explanation  ||   T/S: 96% / 96%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/3004926/](https://leetcode.com/problems/escape-the-ghosts/solutions/3004926/)

---

The problem reduces to whether any ghost`g`has a *manhattan-distance* to`target`that is less than the *manhattan-distance* to`target`from`(0,0)`.
```
class Solution:
    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:
        
        dist = lambda x : abs(x[0] - target[0]) + abs(x[1] - target[1])

        return dist((0,0)) < min(dist(g) for g in ghosts)
```
[https://leetcode.com/problems/escape-the-ghosts/submissions/1272573103/](https://leetcode.com/problems/escape-the-ghosts/submissions/1272573103/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(ghosts)`.
