# Kotlin DSU

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/899651/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/899651/)

---

DSU template
```
class DSU(val n: Int) {
    val parent = IntArray(n)
    val size = IntArray(n)
    
    init { makeSet() }
    
    private fun makeSet() {
        for (i in 0 until n) {
            parent[i] = i
            size[i] = 1
        }
    }
    
    fun find(a: Int): Int {
        if (parent[a] != a) {
            parent[a] = find(parent[a])
        }
        return parent[a]
    }
    
    fun union(a: Int, b: Int): Boolean {
        val (aP, bP) = find(a) to find(b)
        if (aP == bP) return false
        if (size[aP] > size[bP]) {
            size[aP] += size[bP]
            parent[bP] = aP
        } else {
            size[bP] += size[aP]
            parent[aP] = bP
        }
        return true
    }
    
    fun maxSize(a: Int): Int {
        return size[find(a)]
    }
}
```

Connect all the divisors of numbers till n.
To connect divisors, since they should be `> thresold`, iterate the same way.
```
    fun areConnected(n: Int, threshold: Int, queries: Array<IntArray>): List<Boolean> {
        val dsu = DSU(n + 1)
        for (d in threshold + 1 until n + 1) {
            for (m in 2 * d until n + 1 step d) {
                dsu.union(d, m)
            }
        }
        val ans = arrayListOf<Boolean>()
        for ((a, b) in queries) {
            ans.add(dsu.find(a) == dsu.find(b))
        }
        return ans
    }
```