# Kotlin 100%

**Author:** daouddexter
**Votes:** 0
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/4789440/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/4789440/)

---

# Intuition
Start from 0,0 and try to get shortest part to next smallest tree, once reached that tree add steps to total steps now try to reach next smallest tree. Continue this untill all trees are covered

# Approach
Use Priority queue to sort trees and BFS to find shortest path

# Complexity
- Time complexity:
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    private val dr = intArrayOf(-1, 1, 0, 0)
    private val dc = intArrayOf(0, 0, 1, -1)

    fun cutOffTree(forest: MutableList<MutableList<Int>>): Int {
        val pq = PriorityQueue<IntArray>(compareBy { it[2] })
        for (i in forest.indices) {
            for (j in forest[0].indices) {
                if (forest[i][j] > 1) {
                    pq.offer(intArrayOf(i, j, forest[i][j]))
                }
            }
        }
        var curr = intArrayOf(0, 0)
        var steps = 0
        var trees = pq.size
        while (pq.isNotEmpty()) {
            val target = pq.poll()
            val visited = Array(forest.size) { BooleanArray(forest[0].size) }
            val q: Queue<IntArray> = LinkedList()
            q.offer(curr)
            visited[curr[0]][curr[1]] = true
            q@ while (q.isNotEmpty()) {
                var size = q.size
                while (size-- > 0) {
                    val loc = q.poll()
                    curr = loc
                    if (loc[0] == target[0] && loc[1] == target[1]) {
                        forest[loc[0]][loc[1]] = 1
                        trees--
                        break@q
                    }
                    for (k in 0..3) {
                        val nextI = loc[0] + dr[k]
                        val nextJ = loc[1] + dc[k]
                        if (nextI >= 0 && nextJ >= 0 && nextI < forest.size && nextJ < forest[0].size
                            && !visited[nextI][nextJ] && forest[nextI][nextJ] > 0
                        ) {
                            visited[nextI][nextJ] = true
                            q.offer(intArrayOf(nextI, nextJ))
                        }
                    }
                }
                steps++
            }
        }
        return if(trees == 0) steps else -1
    }
}
```