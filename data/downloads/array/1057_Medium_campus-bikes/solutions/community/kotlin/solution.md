# Easy approach

**Author:** 1997onurcan
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/4906997/](https://leetcode.com/problems/campus-bikes/solutions/4906997/)

---

import kotlin.math.abs

class Solution {

// Or it could be Triple<Int,Int,Int>
    data class Assignments(
        val worker: Int,
        val bike: Int,
        val distance: Int
    )

    private val pairComparator = compareBy<Assignments> { distance -> distance.distance }
        .thenBy { worker -> worker.worker }
        .thenBy { bike -> bike.bike }

    fun assignBikes(workers: Array<IntArray>, bikes: Array<IntArray>): IntArray {
        val allAssignments = mutableListOf<Assignments>()

        workers.indices.forEach { i ->
            bikes.indices.forEach { j ->
                val distance = manhattan(workers[i], bikes[j])
                allAssignments.add(Assignments(worker = i, bike = j, distance = distance))
            }
        }
        allAssignments.sortWith(pairComparator)

        val bikeStat = BooleanArray(bikes.size)
        val workerStats = IntArray(workers.size) { -1 }
        var totalPairs = 0

        allAssignments.forEach {
            val worker = it.worker
            val bike = it.bike
            if (workerStats[worker] == -1 && !bikeStat[bike]) {
                bikeStat[bike] = true
                workerStats[worker] = bike
                totalPairs++
                if (totalPairs == workers.size) return workerStats
            }
        }
        return workerStats
    }

    private fun manhattan(worker: IntArray, bike: IntArray): Int =
        abs(worker[0] - bike[0]) + abs(worker[1] - bike[1])
}
```