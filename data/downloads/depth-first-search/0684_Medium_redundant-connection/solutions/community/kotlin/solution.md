# Kotlin: O(n) time and O(n) space with Union Find

**Author:** kotlinvim
**Votes:** 2
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/939483/](https://leetcode.com/problems/redundant-connection/solutions/939483/)

---


    class DSU(private val size: Int) {
        private lateinit var parent: IntArray
        
        init {
            parent = IntArray(size) { -1 }
        }
        
        fun find(x: Int): Int {
            var xroot = x
            while (parent[xroot] != -1) xroot = parent[xroot]
            return xroot
        }
        
        fun union(x: Int, y: Int): Boolean {
            var xroot = find(x)
            var yroot = find(y)
            if (xroot == yroot) return false
            parent[yroot] = xroot
            return true
        }
    }

    fun findRedundantConnection(edges: Array<IntArray>): IntArray {
        val dsu = DSU(1000 + 1)
        
        for (e in edges) {
            if (!dsu.union(e[0], e[1])) {
                return e
            }
        }
        
        throw Exception("")
    }
