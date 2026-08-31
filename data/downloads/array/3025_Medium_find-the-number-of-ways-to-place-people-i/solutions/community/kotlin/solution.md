# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4673760/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4673760/)

---


# Code
```
class Solution {
    fun numberOfPairs(points: Array<IntArray>): Int {
        points.sortWith{ a,b -> if (a[0]==b[0]) b[1]-a[1] else a[0]-b[0] }
        return points.indices.sumOf { i ->
                        (i+1..points.lastIndex).count { j ->
                            points[i][1]>=points[j][1] && (i+1..<j).all { points[it][1] > points[i][1] || points[it][1] < points[j][1]  } } }
    }
}
```