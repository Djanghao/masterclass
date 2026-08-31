# Kotlin Clean, Short and Simple code

**Author:** qing306038
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2832244/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2832244/)

---

Explanation: just get the sizes of every subtree and divide them by the number of seats
```
class Solution {
    val adj = Array<MutableList<Int>>(100001) { mutableListOf() }
    val size = IntArray(100001)
    fun minimumFuelCost(roads: Array<IntArray>, seats: Int): Long {
        for (i in roads) {
            adj[i[0]].add(i[1])
            adj[i[1]].add(i[0])
        }
        
        var count = 0L
        getSize(0, -1)
        for (i in 0 .. 100000) {
            if (size[i] > 0 && i != 0) {
                count += if (size[i] % seats == 0) {
                    size[i] / seats
                } else (size[i] / seats) + 1
            }
        }
        return count
    }
    
    fun getSize(curr: Int, prev: Int): Int {
        var total = 0
        for (i in adj[curr]) {
            if (i != prev) total += getSize(i, curr)
        }
        size[curr] = total + 1
        return size[curr]
    }
}
```