# Kotlin Clean Solution O(nlogk)

**Author:** BrianCatraguna21
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/2824624/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/2824624/)

---

# Complexity
- Time complexity:
O(n*log k)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun kClosest(points: Array<IntArray>, k: Int): Array<IntArray> {
        val compareByDistance: Comparator<Pair<Double,IntArray>> = compareBy { it.first }
        val distances: PriorityQueue<Pair<Double,IntArray>> = PriorityQueue(compareByDistance)
        for (point in points) {
            val x = point[0].toDouble()
            val y = point[1].toDouble()
            val distance = Math.sqrt((x*x)+(y*y))
            distances.add(Pair(distance,point))
        }

        val result: Array<IntArray> = Array(k){intArrayOf()}
        for (i in 0 until k) {
            result[i] = distances.poll().second
        }
        return result
    }
}
```