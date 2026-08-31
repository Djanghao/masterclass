# Python 3 || 5 lines,   || T/S: 94% / 51%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4948382/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4948382/)

---

```
class Solution:
    def minimumLevels(self, possible: List[int]) -> int:

        possible = [x + x -1 for x in possible]
        win, score = sum(possible)//2, 0

        for i in range(len(possible)-1):
            score+= possible[i]
            if score > win: return i+1

        return -1
```
[https://leetcode.com/problems/minimum-levels-to-gain-more-points/submissions/1218517817/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/submissions/1218517817/)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(possible)`.