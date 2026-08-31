# [Kotlin] Prefix Sum Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1625430/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1625430/)

---

```
class Solution {
    fun maxTotalFruits(fruits: Array<IntArray>, startPos: Int, k: Int): Int {
        val prefixSum = fruits.fold(IntArray(maxOf(fruits.last()[0], startPos) + 1)) { acc, (position, amount) ->
            acc.also { acc[position] = amount }
        }.also {
            for (i in 1..it.lastIndex) {
                it[i] += it[i - 1]
            }
        }
        fun getSum(left: Int, right: Int): Int {
            return prefixSum[right] - if (left > 0) { prefixSum[left - 1] } else { 0 }
        }
        
        var res = getSum(startPos, startPos)
        for (right in startPos + 1..minOf(startPos + k, prefixSum.lastIndex)) {
            val left = maxOf(0, minOf(startPos, right - (k - (right - startPos))))
            res = maxOf(res, getSum(left, right))
        }
        for (left in startPos - 1 downTo maxOf(0, startPos - k)) {
            val right = minOf(prefixSum.lastIndex, maxOf(startPos, left + (k - (startPos - left))))
            res = maxOf(res, getSum(left, right))
        }
        return res
    }
}
```