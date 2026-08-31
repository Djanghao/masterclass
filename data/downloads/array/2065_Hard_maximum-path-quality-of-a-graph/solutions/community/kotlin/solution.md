# Crawl until exceed the max time

**Author:** user5522V
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/3471154/](https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/3471154/)

---

# Intuition
Iterative crawling in all possible nodes

# Approach
Continue visit more node if time not exceed the maximum. at then end find the highest value from founded paths.


# Code
```
class Solution {
    private val aIndex = 0
    private val bIndex = 1
    private val timeIndex = 2
    private var edgeNodes = HashMap<Int, MutableList<Int>>()
    private var times = HashMap<String, Int>()
    private var nodeValues = HashMap<Int, Int>()
    private val checkNodes = ArrayList<Track>()
    private var maxTime = 0

    private fun getKey(a: Int, b: Int): String {
        val (small, big) = if (a < b) Pair(a, b) else Pair(b, a)
        return "$small-$big"
    }

    private fun addPath(path: IntArray) {
        val a = path[aIndex]
        val b = path[bIndex]
        val distance = path[timeIndex]
        val key = getKey(a, b)
        if (times.getOrPut(key) { distance } < distance) times[key] = distance
        edgeNodes.getOrPut(a) { mutableListOf() }.add(b)
        edgeNodes.getOrPut(b) { mutableListOf() }.add(a)
    }


    private fun addEdgeNodesIfUnderMaxTime(track: Track) {
        edgeNodes[track.node]?.forEach { edgeNode ->
            val addedEdgeTime = times[getKey(track.node, edgeNode)]!! + track.sumTime
            if (addedEdgeTime <= maxTime) {
                checkNodes.add(
                    Track(
                        edgeNode, track.visitedNodes + edgeNode, addedEdgeTime
                    )
                )
            }
        }
    }

    data class Track(val node: Int, val visitedNodes: IntArray, val sumTime: Int)


    private fun getBigger(n1: Int, n2: Int) = if (n1 > n2) n1 else n2

    fun maximalPathQuality(values: IntArray, edges: Array<IntArray>, maxTime: Int): Int {
        edgeNodes.clear()
        nodeValues.clear()
        this.maxTime = maxTime
        values.forEachIndexed { index, i -> nodeValues[index] = i }
        edges.forEach { addPath(it) }
        var maxQuality = nodeValues[0]!!
        var index = 0
        checkNodes.add(Track(0, intArrayOf(0), 0))
        val pathsIndex = mutableListOf<Int>()
        do {
            val track = checkNodes[index]
            addEdgeNodesIfUnderMaxTime(track)
            if (track.node == 0) pathsIndex.add(index)
            index++
        } while (index < checkNodes.size)

        pathsIndex.forEach { index ->
            val track = checkNodes[index]
            maxQuality = getBigger(maxQuality, track.visitedNodes.toSet().sumBy { values[it] })
        }
        return maxQuality
    }
}
```