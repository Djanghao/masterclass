# Kotlin Solution

**Author:** cerror
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/2067925/](https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/2067925/)

---

```kotlin
class Solution {
    
    // Kotlin 1.4 function
    private fun <T : Comparable<T>> Iterable<T>.maxOrNull(): T? {
        val iterator = iterator()
        if (!iterator.hasNext()) return null
        var max = iterator.next()
        while (iterator.hasNext()) {
            val e = iterator.next()
            if (max < e) max = e
        }
        return max
    }

    // Kotlin 1.4 function
    private inline fun <T> Iterable<T>.sumOf(selector: (T) -> Int): Int {
        var sum: Int = 0.toInt()
        for (element in this) {
            sum += selector(element)
        }
        return sum
    }

    fun maximumScore(scores: IntArray, edges: Array<IntArray>): Int {
        val adjacentMap = edges.flatMap {
                listOf(
                    it[0] to it[1],
                    it[1] to it[0]
                )
            }.groupBy { it.first }
            .mapValues { entry -> entry.value.map { it.second } }
            .mapValues { entry ->
                entry.value.sortedByDescending { scores[it] }.take(3)
            }
        return edges.flatMap { e ->
            val leftNeighbor = adjacentMap[e[0]] ?: listOf()
            val rightNeighbor = adjacentMap[e[1]] ?: listOf()
            leftNeighbor.flatMap { left ->
                rightNeighbor.mapNotNull { right ->
                    val nodeSet = setOf(left, e[0], e[1], right)
                    if (nodeSet.size == 4) {
                        nodeSet.sumOf { scores[it] }
                    } else null
                }
            }
        }.maxOrNull() ?: -1
    }
}
```