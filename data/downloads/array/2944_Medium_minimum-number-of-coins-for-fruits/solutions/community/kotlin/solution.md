# Kotlin Easy Solution

**Author:** sofuming
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4739596/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4739596/)

---

# Code
```
class Solution {
    fun minimumCoins(prices: IntArray): Int {
        val dp = intArrayOf(0) + prices + IntArray(prices.size + 1) { 0 }

        for (i in prices.size downTo 1) {
            val nextSteps = dp.slice((i + 1)..(i * 2 + 1))
            dp[i] += nextSteps.min()
        }

        return dp[1]
    }
}
```
# Approach
<!-- Describe your approach to solving the problem. -->
IntArray `dp` stores the min cost needed if step `i` is taken.

The array is padded with `intArrayOf(0)` for having  1-indexed array, and doubled the size by `IntArray(prices.size + 1) { 0 }` to facilitate loop calculation.

The question can be simplified to just find out the sum of current step and the min value to take the next step, if we loop the array from end to start, and store the accumulative value in `dp`.

Worth to note that the range of `nextSteps` is till `i * 2 + 1`, indicating that it's selectable for the range of free fruits `i * 2`, PLUS the next fruit to pay `+ 1`.
>For example if prices = [1,10,1,1] and with index `1` (1-indexed), then the `nextSteps` is from `1 + 1 = 2` till `1 * 2 + 1 = 3`, i.e. `[10, 1]`. 
>Cuz' 10 is free-to-take and 1 is the next-to-pay, and both are possible next steps.