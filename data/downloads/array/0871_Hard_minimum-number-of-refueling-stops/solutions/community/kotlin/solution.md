# Kotlin - Greedy, and Dynamic Programming(1 dimensional)

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/881104/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/881104/)

---

[Solutions - Github](https://github.com/An7One/leetcode-solutions-kotlin-an7one/tree/main/src/main/kotlin/com/an7one/leetcode/lvl4/lc0871)

[Problems Related to "Subsequence" - Github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_algorithm/dynamic_programming/by_topic/subsequence)

```
/**
 * https://leetcode.com/problems/minimum-number-of-refueling-stops/
 *
 * Time Complexity:     O(`totalStations` * lg(`totalStations`))
 * Space Complexity:    O(`totalStations`)
 *
 * References:
 *  https://leetcode.com/problems/minimum-number-of-refueling-stops/discuss/294025/Java-Simple-Code-Greedy
 */
class Solution {
    fun minRefuelStops(target: Int, startFuel: Int, stations: Array<IntArray>): Int {
        val nStations = stations.size

        val maxHeap = PriorityQueue<Int>(compareBy { -it })

        var furthest = startFuel
        var idx = 0
        var refuel = 0

        while (furthest < target) {
            while (idx < nStations && furthest >= stations[idx][0]) {
                maxHeap.offer(stations[idx][1])
                ++idx
            }

            if (maxHeap.isEmpty()) return -1

            furthest += maxHeap.poll()
            ++refuel
        }

        return refuel
    }
}
```

```
/**
 * https://leetcode.com/problems/minimum-number-of-refueling-ts/
 *
 * Time Complexity:     O(`totalStations` ^ 2)
 * Space Complexity:    O(`totalStations`)
 *
 * dp[t], means the furthest distance one can get with `t` times of refueling
 *  if dp[t] >= stations[idx][0], one can refuel:
 *  dp[t + 1] = max(dp[t + 1], dp[t] + stations[idx][1])
 *
 * References:
 *  https://leetcode.com/problems/minimum-number-of-refueling-ts/discuss/149839/DP-O(N2)-and-Priority-Queue-O(NlogN)
 */
class Solution {
    fun minRefuelStops(target: Int, startFuel: Int, stations: Array<IntArray>): Int {
        val nStations = stations.size

        val dp = IntArray(nStations + 1) { 0 }.also {
            it[0] = startFuel
        }

        for (idx in stations.indices) {
            for (t in idx downTo 0) {
                if (dp[t] >= stations[idx][0]) {
                    dp[t + 1] = maxOf(dp[t + 1], dp[t] + stations[idx][1])
                }
            }
        }

        return dp.indexOfFirst { it >= target }
    }
}
```