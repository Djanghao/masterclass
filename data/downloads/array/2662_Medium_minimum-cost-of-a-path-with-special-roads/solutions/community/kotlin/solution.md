# Kotlin solution(with enhanced readability)

**Author:** seonwoo960000
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3469675/](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3469675/)

---

# Intuition
1. Convert to nodes : start, target, node of edges 
2. Remove duplicates and sort the nodes 
3. Use priority queue to get the minimum distance from start to taget

# Approach
1. Create a list of nodes 
2. Remove duplicates and sort the nodes 
3. Add an map that maps node position(x, y) to index in list: Map[(x, y)] = (index in list) 
4. Add a map that tracks costs: Map[(nodeIdx1, nodeIdx2)] = cost 
5. Use priority queue to find the minimum distance to target 

# Complexity
- Time complexity:
O(N * N)

- Space complexity:
O(N * N)

# Code
```
import java.util.*
import kotlin.math.abs
import kotlin.math.cos

class Solution {
    fun minimumCost(start: IntArray, target: IntArray, specialRoads: Array<IntArray>): Int {
        val nodes = mutableListOf<Pair<Int, Int>>()
        nodes.add(Pair(start[0], start[1]))
        nodes.add(Pair(target[0], target[1]))
        for ((x1, y1, x2, y2, cost) in specialRoads) {
            nodes.add(Pair(x1, y1))
            nodes.add(Pair(x2, y2))
        }

        val sortedNodes = nodes.distinct().sortedWith(compareBy({ it.first }, { it.second }))
        val indexes = HashMap<Pair<Int, Int>, Int>()
        for ((idx, pos) in sortedNodes.withIndex()) {
            indexes[pos] = idx
        }

        val costs = HashMap<Pair<Int, Int>, Int>() // pair(nodeIdx1, nodeIdx2) = cost
        for ((x1, y1, x2, y2, cost) in specialRoads) {
            val idx1 = indexes[Pair(x1, y1)]!!
            val idx2 = indexes[Pair(x2, y2)]!!
            val pair = Pair(idx1, idx2)
            costs[pair] = minOf(costs[pair] ?: Int.MAX_VALUE, cost)
        }

        val pq = PriorityQueue<Pair<Int, Int>>(compareBy({ it.first }, { it.second }))
        pq.add(Pair(0, 0))
        val visited = HashSet<Int>() // nodeIdx

        while (pq.isNotEmpty()) {
            val (cumulativeDis, nodeIdx) = pq.poll()
//            println("node: ${sortedNodes[nodeIdx]}, dis: $cumulativeDis")
            if (nodeIdx == sortedNodes.lastIndex) return cumulativeDis

            if (visited.contains(nodeIdx)) continue
            visited.add(nodeIdx)

            for (j in 0 until sortedNodes.size) {
                if (visited.contains(j)) continue

                val checkPair = Pair(nodeIdx, j)
                var dis = getCost(sortedNodes[nodeIdx], sortedNodes[j])
                if (costs.containsKey(checkPair)) {
//                    println("${sortedNodes[nodeIdx]} --> ${sortedNodes[j]}: ${dis}")
                    dis = minOf(dis, costs[checkPair]!!)
                }
                pq.add(Pair(cumulativeDis + dis, j))
            }
        }

        return -1
    }


    fun getCost(p1: Pair<Int, Int>, p2: Pair<Int, Int>): Int {
        return abs(p1.first - p2.first) + abs(p1.second - p2.second)
    }
}


```