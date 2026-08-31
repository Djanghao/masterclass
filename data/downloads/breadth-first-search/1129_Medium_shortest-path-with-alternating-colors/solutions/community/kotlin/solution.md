# Kotlin | just BFS

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3171245/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3171245/)

---

#### Join me on Telegram
https://t.me/leetcode_daily_unstoppable/115
#### Intuition
We can calculate all the shortest distances in one pass BFS. 
#### Approach
Start with two simultaneous points, one for red and one for blue. Keep track of the color.
#### Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(n)$$
#### Code
```
class Solution {
    fun shortestAlternatingPaths(n: Int, redEdges: Array<IntArray>, blueEdges: Array<IntArray>): IntArray {
        val edgesRed = mutableMapOf<Int, MutableList<Int>>()
        val edgesBlue = mutableMapOf<Int, MutableList<Int>>()
        redEdges.forEach { (from, to) ->
            edgesRed.getOrPut(from, { mutableListOf() }).add(to)
        }
        blueEdges.forEach { (from, to) ->
            edgesBlue.getOrPut(from, { mutableListOf() }).add(to)
        }
        val res = IntArray(n) { -1 }
        val visited = hashSetOf<Pair<Int, Boolean>>()
        var dist = 0
        with(ArrayDeque<Pair<Int, Boolean>>()) {
            add(0 to true)
            add(0 to false)
            visited.add(0 to true)
            visited.add(0 to false)
            while (isNotEmpty()) {
                repeat(size) {
                    val (node, isRed) = poll()
                    if (res[node] == -1 || res[node] > dist) res[node] = dist
                    val edges = if (isRed) edgesRed else edgesBlue
                    edges[node]?.forEach {
                        if (visited.add(it to !isRed)) add(it to !isRed)
                    }
                }
                dist++
            }
        }
        return res
    }
}
```