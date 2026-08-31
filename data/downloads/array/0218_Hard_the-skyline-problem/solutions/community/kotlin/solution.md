# Kotlin Solution

**Author:** 1huzz
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/817724/](https://leetcode.com/problems/the-skyline-problem/solutions/817724/)

---

```
class Solution {
    fun getSkyline(buildings: Array<IntArray>): List<List<Int>> {
        if (buildings.isEmpty()) {
            return emptyList()
        }

        val sortedList = PriorityQueue<Int>(compareByDescending { it })
        val removedPoints = sortedMapOf<Int, List<Int>>()
        val result = mutableListOf<List<Int>>()

        var index = 0
		// move left to right until right point of buildings.last()
        while (index < buildings.size || removedPoints.isNotEmpty()) {
            if (index > buildings.lastIndex || (removedPoints.isNotEmpty() && removedPoints.firstKey() < buildings[index][0])) {
				// remove buildings
                removedPoints[removedPoints.firstKey()]!!.forEach { height ->
                    sortedList.remove(height)
                }
				// add to result when height change occur
                if (sortedList.firstOrNull() != result.last()[1]) {
                    result.add(listOf(removedPoints.firstKey(), sortedList.firstOrNull() ?: 0))
                }
                removedPoints.remove(removedPoints.firstKey())
            } else {
				// add buildings (if there are buildings have same height, then all the buildings should be added at the same time.)
                var nextIndex = buildings.indexOfFirst { buildings[index][0] < it[0] }
                if (nextIndex == -1) {
                    nextIndex = buildings.size
                }
                (index until nextIndex).forEach {
                    sortedList.add(buildings[it][2])
                    removedPoints[buildings[it][1]] = (removedPoints[buildings[it][1]] ?: emptyList()) + listOf(buildings[it][2])
                }
				// add to result when height change occur or add the first building
                if (result.isEmpty() || sortedList.first() != result.last()[1]) {
                    result.add(listOf(buildings[index][0], sortedList.first()))
                }
                index = nextIndex
            }
        }
        return result
    }
}
```