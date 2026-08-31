# Kotlin Easy Union Find

**Author:** kotlinc
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330586/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330586/)

---

Find the number of the islands, and connect them with `islands - 1`

```
class Solution {
  private lateinit var parents: IntArray

  private fun find(x: Int): Int {
    if (parents[x] != x) parents[x] = find(parents[x])
    return parents[x]
  }
  private fun union(x: Int, y: Int) {
    val px = find(x)
    val py = find(y)
    parents[py] = px
  }
  fun makeConnected(n: Int, connections: Array<IntArray>): Int {
    if (connections.size < (n - 1)) return -1
    parents = IntArray(n + 1) { it }
    for ((a, b) in connections) union(a, b)
    var res = 0
    for(i in 0 until n)
      if (find(i) == i) res++
    return res - 1
  }
}

```