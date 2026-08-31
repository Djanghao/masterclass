# [We💕Simple] One Liner! (Beat 100%)

**Author:** YooSeungKim
**Votes:** 3
**Link:** [https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4432718/](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4432718/)

---

``` Kotlin []
class Solution {
    fun maxWidthOfVerticalArea(points: Array<IntArray>): Int =
        points.map { it[0] }.sorted().zipWithNext { a, b -> b - a }.max()
}
```
.
``` Python3 []
class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        return max([
            y-x
            for x,y in pairwise(sorted(p[0] for p in points))
        ])
```