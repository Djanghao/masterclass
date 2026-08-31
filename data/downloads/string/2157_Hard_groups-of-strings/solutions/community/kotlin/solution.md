# Clean Kotlin Solution

**Author:** CelonyMire
**Votes:** 0
**Link:** [https://leetcode.com/problems/groups-of-strings/solutions/4340060/](https://leetcode.com/problems/groups-of-strings/solutions/4340060/)

---

```
private class UnionFind(n: Int) {
    val s = IntArray(n) { 1 }
    var d = n
    val p = IntArray(n) { it }

    fun unite(u: Int, v: Int) {
        @Suppress("NAME_SHADOWING") var u = find(u)
        @Suppress("NAME_SHADOWING") var v = find(v)
        if (u == v) return
        if (size(u) < size(v)) u = v.also { v = u }
        s[u] += s[v]
        p[v] = u
        d--
    }

    fun find(u: Int): Int = if (p[u] == u) u else run { p[u] = find(p[u]); return p[u] }
    fun size(u: Int): Int = s[find(u)]
}

class Solution {
    fun groupStrings(words: Array<String>): IntArray {
        val n = words.size
        val masks = words.map { it.fold(0) { x, y -> x or (1 shl (y - 'a')) } }
        val mp = masks.withIndex().groupingBy { it.value }.fold(0) { _, y -> y.index }
        val uf = UnionFind(n)
        for ((i, m) in masks.withIndex()) for (j in 0 until 26) for (k in 0 until 26)
            mp[m and (1 shl j).inv() or (1 shl k)]?.also { uf.unite(i, it) }
        return intArrayOf(uf.d, uf.s.max())
    }
}
```