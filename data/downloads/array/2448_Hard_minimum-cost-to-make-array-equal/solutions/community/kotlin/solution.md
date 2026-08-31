# Kotlin Prefix/Suffix Simple Solution

**Author:** Z3ROsum
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2734422/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2734422/)

---

```
class Solution {
    fun minCost(nums: IntArray, cost: IntArray): Long {
        val max = Collections.max(nums.toList())
        val arr = IntArray(max + 1)
        for (i in nums.indices) {
            arr[nums[i]] += cost[i]
        }
        val pref = LongArray(arr.size)
    
        var currAdd = 0L
        var curr = 0L
        for (i in arr.indices) {
            currAdd += arr[i]
            curr += currAdd
            pref[i] = curr
        }
        currAdd = 0L
        curr = 0L
        val suf = LongArray(arr.size + 1)
        for (i in arr.size - 1 downTo 0) {
            currAdd += arr[i]
            curr += currAdd
            suf[i] = curr
        }
        var minT = Long.MAX_VALUE
        for (i in nums) {
            minT = Math.min(minT, pref[i - 1] + suf[i + 1])
        }
        return minT
    }
}
```