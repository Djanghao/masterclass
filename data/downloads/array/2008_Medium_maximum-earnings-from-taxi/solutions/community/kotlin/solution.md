# [Kotlin] Simple DP O(n) Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/1470893/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/1470893/)

---

```
class Solution {
    fun maxTaxiEarnings(n: Int, rides: Array<IntArray>): Long {
        // map(end, list(start, earn))
        val allRides = rides.fold(mutableMapOf<Int, MutableList<Pair<Int, Int>>>()) { acc, ints ->
            acc.apply {
                getOrPut(ints[1], { mutableListOf() }).add(Pair(ints[0], ints[1] - ints[0] + ints[2]))
            }
        }
        val earnings = LongArray(n + 1)
        for (i in 1..n) {
            allRides[i]?.also { ridesEndNow ->
                val maxEarningsIfTakeARideEndNow = ridesEndNow.fold(0L) { acc, ride ->
                    maxOf(acc, earnings[ride.first] + ride.second)
                }
                earnings[i] = maxOf(earnings[i - 1], maxEarningsIfTakeARideEndNow)
            } ?: run {
                earnings[i] = earnings[i - 1]
            }
        }
        return earnings[n]
    }
}
```