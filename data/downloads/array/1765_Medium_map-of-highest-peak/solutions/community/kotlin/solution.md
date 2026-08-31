# :: Kotlin :: Floodfill Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-of-highest-peak/solutions/3555334/](https://leetcode.com/problems/map-of-highest-peak/solutions/3555334/)

---

# Code
```
class Solution {
    fun highestPeak(isWater: Array<IntArray>): Array<IntArray> {
        val h = isWater.size
        val w = isWater[0].size

        val directs = arrayOf(intArrayOf(1, 0), intArrayOf(-1, 0), intArrayOf(0, 1), intArrayOf(0, -1))

        val map = Array(h){ IntArray(w){ 0 } }
        val visit = Array(h){ BooleanArray(w){ false } }
        var queue = LinkedList<Pair<Int, Int>>()

        for (r in 0 until h) {
            for (c in 0 until w) {
                if (isWater[r][c] == 0) continue
                visit[r][c] = true
                queue.offer(Pair(r, c))
            }
        }

        var height = 0

        while(!queue.isEmpty()) {
            var nq = LinkedList<Pair<Int, Int>>()

            while(!queue.isEmpty()) {
                val coord = queue.poll()
                val y = coord.first
                val x = coord.second
                map[y][x] = height

                for (direct in directs) {
                    val ny = y + direct[0]
                    val nx = x + direct[1]

                    if (ny >= h || ny < 0) continue
                    if (nx >= w || nx < 0) continue
                    if (visit[ny][nx]) continue

                    visit[ny][nx] = true
                    nq.offer(Pair(ny, nx))                    
                }
            }

            height++
            queue = nq
        }

        return map
    }
}
```