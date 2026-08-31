# Kotlin solution :)

**Author:** Npwtps14
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-manhattan-distances/solutions/4960888/](https://leetcode.com/problems/minimize-manhattan-distances/solutions/4960888/)

---

# Intuition
The problem requires finding the minimum maximum distance between any two points in a set of points. One approach to solving this problem is to consider the two-dimensional Manhattan distance between points. The Manhattan distance between two points (x1, y1) and (x2, y2) is defined as |x1 - x2| + |y1 - y2|. By transforming the coordinates appropriately, we can convert this problem into finding the minimum and maximum values along two perpendicular axes, which can be done efficiently.
# Approach
- Transform the points into two different axes by applying specific transformations to the coordinates.
- Sort the transformed points along both axes to find the minimum and maximum values efficiently.
- Iterate through each point and calculate the Manhattan distance to the nearest point along both axes.
- Update the minimum maximum distance encountered so far.
- Return the minimum maximum distance.
# Complexity
- Sorting the points along both axes takes O(n log n) time.
- Iterating through each point to calculate distances takes O(n) time.
- Thus, the overall time complexity is O(n log n).

- Space complexity:
- use additional space to store transformed points, which is O(n).
- the space complexity is O(n). 
# Code
```
class Solution {
    fun minimumDistance(points: Array<IntArray>): Int {
        val n = points.size
        var minMaxDist = Int.MAX_VALUE
        val v1 = ArrayList<Pair<Int, Int>>()
        val v2 = ArrayList<Pair<Int, Int>>()
        
        for (i in 0 until n) {
            v1.add(points[i][0] + points[i][1] to i)
            v2.add(points[i][0] - points[i][1] to i)
        }
        
        v1.sortBy { it.first }
        v2.sortBy { it.first }

        for (i in 0 until n) {
            val v1Max = if (v1[n - 1].second == i) v1[n - 2] else v1[n - 1]
            val v2Max = if (v2[n - 1].second == i) v2[n - 2] else v2[n - 1]
            val v1Min = if (v1[0].second == i) v1[1] else v1[0]
            val v2Min = if (v2[0].second == i) v2[1] else v2[0]
            minMaxDist = minOf(minMaxDist, maxOf(v1Max.first - v1Min.first, v2Max.first - v2Min.first))
        }
        return minMaxDist
    }
}

```