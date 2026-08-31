# [Kotlin] Prefix Sum Clean Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/1409251/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/1409251/)

---

```
class Solution {
    fun maxNonOverlapping(nums: IntArray, target: Int): Int {
        val currentSums = mutableSetOf(0)
        return IntArray(nums.size).also {
            it[0] = nums[0]
            for (i in 1..nums.lastIndex) {
                it[i] = it[i - 1] + nums[i]
            }
        }.fold(0) { acc, currentSum ->
            if (currentSums.contains(currentSum - target)) {
                currentSums.clear()
                currentSums.add(currentSum)
                acc + 1
            } else {
                currentSums.add(currentSum)
                acc
            }
        }
    }
}
```