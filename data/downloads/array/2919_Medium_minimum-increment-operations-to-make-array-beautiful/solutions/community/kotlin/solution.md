# Kotlin DP

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4551758/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4551758/)

---

# Intuition
We need to make sure each window of 3 consecutive indices has atleast 1 element with element value >= k.

Keep a rolling DP window of 3 elements at all times and try to increase element when needed.

# Code
```
class Solution {
    fun minIncrementOperations(nums: IntArray, k: Int): Long {
        var dp = ArrayDeque(listOf(0L, 0L, 0L))
        for (n in nums) {
            dp.addLast((dp.min() ?: 0L) + maxOf(k - n, 0))
            dp.removeFirst()
        }

        return dp.min() ?: 0L
    }
}
```