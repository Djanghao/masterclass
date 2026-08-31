# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/4533755/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/4533755/)

---

# Code
```
class Solution {
    fun trapRainWater(heightMap: Array<IntArray>): Int {
        val q = PriorityQueue<Pair<Int,Int>> { p1, p2 -> p1.first - p2.first }
        val m = heightMap.size
        if (m==0) return 0
        val n = heightMap.first().size
        val visited = BooleanArray(m*n)

        heightMap.indices.forEach { i ->
            heightMap.first().indices.forEach { j ->
                if ((i == 0 || i == m-1 || j == 0 || j == n-1) && !visited[i*n+j]) visited[i*n+j] = q.add(Pair(heightMap[i][j], i*n+j)) } }
                var res = 0
                while (q.isNotEmpty()) {
                    val p = q.poll()!!
                    val curr = C(p.second / n, p.second % n)
                    arrayOf(C(0,1), C(0,-1), C(1,0), C(-1,0)).forEach {
                        val d = C(curr.i + it.i,curr.j + it.j)
                        if (!(d.i < 0 || d.i >= m || d.j < 0 || d.j >= n || visited[d.i * n + d.j])) {
                            res += max(0, p.first - heightMap[d.i][d.j])
                            visited[d.i * n + d.j] = q.add(Pair(max(p.first, heightMap[d.i][d.j]), d.i * n + d.j)) } } }
        return res
    }

    private data class C(val i: Int, val j: Int)
}
```