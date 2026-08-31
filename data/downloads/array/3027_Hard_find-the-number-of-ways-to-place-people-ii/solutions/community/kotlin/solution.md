# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4673643/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4673643/)

---

# Code
```
class Solution {
    fun numberOfPairs(points: Array<IntArray>): Int {
        points.sortWith { a, b -> if (a[0] == b[0]) b[1] - a[1] else a[0] - b[0] }
        return points.indices.sumOf {  i ->
                        var y = Int.MIN_VALUE
                        (i + 1..points.lastIndex).count { j -> (points[i][1] >= points[j][1] && y < points[j][1]).also { if (it) y = points[j][1] } } }
        
}
```