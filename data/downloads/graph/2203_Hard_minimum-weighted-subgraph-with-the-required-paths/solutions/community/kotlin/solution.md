# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/4517697/](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/4517697/)

---

# Code
```
class Solution {
    fun minimumWeight(n: Int, edges: Array<IntArray>, src1: Int, src2: Int, dest: Int): Long {

        val al = Array(n) {mutableListOf<Pair<Int,Int>>()}
        val ral = Array(n) {mutableListOf<Pair<Int,Int>>()}
        val maxVal = Long.MAX_VALUE/4
        val gd = LongArray(n) { maxVal }.also { it[dest] = 0 }
        val g1 = LongArray(n) { maxVal }.also { it[src1] = 0 }
        val g2 = LongArray(n) { maxVal }.also { it[src2] = 0 }
        edges.forEach { e ->
            al[e[0]].add(Pair(e[1],e[2]))
            ral[e[1]].add(Pair(e[0],e[2]))
        }

        val bfs = fun(st: Int, al: Array<MutableList<Pair<Int, Int>>>, vs: LongArray) =
            generateSequence(PriorityQueue<Pair<Long, Int>> { p1, p2 -> if (p1.first == p2.first) p2.second - p1.second else (p2.first - p1.first).toInt() }.also { it.add(Pair(0,st)) }) { pq ->
                val v = pq.poll()!!
                if (vs[v.second] == v.first) al[v.second].forEach { if (vs[it.first] > v.first + it.second) vs[it.first] = (v.first + it.second).also { v-> pq.add(Pair(v, it.first))} }
                pq }.takeWhile { it.isNotEmpty() }.last()

        bfs(dest, ral, gd)
        bfs(src1, al, g1)
        bfs(src2, al, g2)

        return if (gd[src1] == maxVal || gd[src2] == maxVal) -1
               else (0..<n).fold(Long.MAX_VALUE) { r, i -> min(r, gd[i]+g1[i]+g2[i]) }
    }
}
```