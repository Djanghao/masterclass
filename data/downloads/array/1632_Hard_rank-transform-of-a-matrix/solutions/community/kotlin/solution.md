# :: Kotlin :: Union-Find

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3450197/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3450197/)

---


# Code
```
class UnionFind {
    val id: IntArray
    val rank: IntArray
    val visit: BooleanArray

    constructor(n: Int) {
        id = IntArray(n){ it }
        rank = IntArray(n){ 0 }
        visit = BooleanArray(n){ false }
    }

    fun find(x: Int): Int {
        return if (id[x] == x) x else find(id[x])
    }

    fun union(x: Int, y: Int) {
        visit[x] = true
        visit[y] = true

        val fx = find(x)
        val fy = find(y)

        if (fx == fy) return
        
        if (rank[fx] < rank[fy]) {
            id[fy] = fx
        } else if (rank[fx] > rank[fy]) {
            id[fx] = fy
        } else {
            id[fx] = fy
            rank[fy]++
        }
    }
}

class Solution {
    fun matrixRankTransform(matrix: Array<IntArray>): Array<IntArray> {
        val groupByValue = TreeMap<Int, MutableList<Pair<Int, Int>>>()
        val height = matrix.size
        val width = matrix[0].size

        for (r in 0 until height) {
            for (c in 0 until width) {
                groupByValue.computeIfAbsent(matrix[r][c]){ mutableListOf<Pair<Int, Int>>() }.add(Pair(r, c))
            }
        }

        val rank = IntArray(height * width + 1){ 0 }
        for ((_, list) in groupByValue) {
            val uf = UnionFind(height * width + 1)
            val groups = HashMap<Int, MutableList<Pair<Int, Int>>>()

            for ( coord in list ) {
                val r = coord.first
                val c = coord.second
                uf.union(r, c + height)
            }

            for ( coord in list ) {
                val r = coord.first
                val c = coord.second
                val x = uf.find(r)

                groups.computeIfAbsent(x){ mutableListOf<Pair<Int, Int>>() }.add(coord)
            }

            for ((_, l) in groups) {
                var max = l.map{ Math.max(rank[it.first], rank[it.second + height]) }.max()!!.plus(1).toInt()

                l.forEach{
                    var _r = it.first
                    var _c = it.second
                    rank[_r] = max
                    rank[_c + height] = max
                    matrix[_r][_c] = max
                }
            }
        }

        return matrix
    }
}
```