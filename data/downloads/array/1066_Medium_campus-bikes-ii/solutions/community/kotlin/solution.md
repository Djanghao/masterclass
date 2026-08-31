# Kotlin - Backtrcking

**Author:** jasonechiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/4486950/](https://leetcode.com/problems/campus-bikes-ii/solutions/4486950/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(m! * (m - n)!)$$
m: bikes.size
n: workers.size

- Space complexity:
$$O(n)$$
n: bikes.size

# Code
```
class Solution {
    
    fun assignBikes(workers: Array<IntArray>, bikes: Array<IntArray>) = backtracking(workers, bikes, 0, BooleanArray(bikes.size))

    fun backtracking(workers: Array<IntArray>, bikes: Array<IntArray>, workerIndex: Int, bikeAssigned: BooleanArray): Int {
        if (workerIndex >= workers.size) {
            return 0
        }
        var min = Int.MAX_VALUE
        for (i in 0..bikeAssigned.lastIndex) {
            if (!bikeAssigned[i]) {
                bikeAssigned[i] = true
                val dis = backtracking(workers, bikes, workerIndex + 1, bikeAssigned) + distance(workers[workerIndex], bikes[i])
                min = minOf(min, dis)
                bikeAssigned[i] = false
            }
        }
        return min
    }

    fun distance(worker: IntArray, bike: IntArray) = abs(worker[0] - bike[0]) + abs(worker[1] - bike[1])

}
```