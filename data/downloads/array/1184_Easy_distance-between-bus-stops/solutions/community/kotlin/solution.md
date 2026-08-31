# Route distance calculation in Kotlin

**Author:** krnets
**Votes:** 1
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/2466082/](https://leetcode.com/problems/distance-between-bus-stops/solutions/2466082/)

---

```kotlin
class Solution {
    fun distanceBetweenBusStops(distance: IntArray, start: Int, destination: Int): Int {
        val totalDistance = distance.sum()
       
        val routeDistance =
            if (start < destination)
                distance.drop(start).take(destination - start).sum()
            else distance.drop(destination).take(start - destination).sum()

        return minOf(routeDistance, totalDistance - routeDistance)
    }
}
```