# Kotlin O(n) "Your last submission beat 100% of other submissions' runtime." (No sorting, only array)

**Author:** etasdemir
**Votes:** 1
**Link:** [https://leetcode.com/problems/car-fleet/solutions/4249364/](https://leetcode.com/problems/car-fleet/solutions/4249364/)

---

First create an remaining time array with size of target. This array will act like this, the position of the car as index and it's remaining time as value.
Fill this array with remaining times for each cars as [(target - pos).toFloat / speed] and put it to [position]. 
When we iterate this array from end to start, we will know which car closest to end and it is remaining time to finish. Track a variable for the last fleet's remaing time. So that:
1. if current remaining <= last fleet's, then this car is in the current fleet
2. if current remaining > last fleet's remaining then new fleet created.

# Code
```
class Solution {
    fun carFleet(target: Int, position: IntArray, speed: IntArray): Int {
        val remainingArr = Array<Float?>(target, {_ -> null})
        var fleetCount = 0
        for (i in 0 .. position.size - 1) {
            val pos = position[i]
            val s = speed[i]
            remainingArr[pos] = (target - pos).toFloat() / s
        }
        var lastFleetRem = 0f
        for (i in remainingArr.size - 1 downTo 0) {
            val element = remainingArr[i] ?: continue

            if (element > lastFleetRem) {
                lastFleetRem = element
                fleetCount += 1
            }
        }

        return fleetCount
    }
}
```