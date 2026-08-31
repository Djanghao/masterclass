# Beats 100%, Disjoint union set

**Author:** dev_lazy25
**Votes:** 0
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/4836862/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/4836862/)

---

# Complexity
- Time complexity:
$$O((Q+M)logN).$$

- Space complexity:
$$O(N+Q)$$

# Code
```
class Solution {
    fun distanceLimitedPathsExist(
        n: Int, edgeList: Array<IntArray>, queries: Array<IntArray>
    ): BooleanArray {
        val dsu = UnionFind<Int>()
        edgeList.sortBy { it[2] } // sort by distance
        for (i in queries.indices) {
            queries[i] = intArrayOf(queries[i][0], queries[i][1], queries[i][2], i)
        }
        queries.sortBy { it[2] } // sort by value
        var i = 0
        val ans = BooleanArray(queries.size)
        for (j in queries.indices) {
            val query = queries[j]
            val limit = query[2]
            while (i < edgeList.size && edgeList[i][2] < limit) {
                val u = edgeList[i][0]
                val v = edgeList[i][1]
                dsu.union(u, v)
                i++
            }
            val p = query[0]
            val q = query[1]
            val qIndex = query[3]
            if (dsu.find(p) == dsu.find(q)) {
                ans[qIndex] = true
            }
        }
        return ans
    }

    class UnionFind<T> {
        private val id = HashMap<T, T>()

        fun find(x: T): T {
            var y = id.getOrDefault(x, x)
            if (y != x) {
                y = find(y)
                id[x] = y
            }
            return y
        }

        fun union(x: T, y: T) {
            id[find(x)] = find(y)
        }
    }    
}
```