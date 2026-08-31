# Kotlin | O(1) solution

**Author:** aw_s
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/5956049/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/5956049/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We know that any `targetSeconds` value can be represented in a regular way, when seconds part has range from `0` to `59`:
* `targetSeconds` = 159
* `minutes` = 2; `seconds` = 39.

But in our case seconds have range from `0` to `99`, that creates another possibility (in some cases) to represent given `targetSeconds` value in extended format:
* `targetSeconds` = 159
* `minutes` = 1; `seconds` = 99.

After that we just need to calculate which format in 'cheaper' to calculate given `startAt`, `moveCost` and `pushCost` parameters.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Transform `targetSeconds` to a regular and extended (if possible) formats;
2. Calculate costs;
3. Return cheaper.

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun minCostSetTime(startAt: Int, moveCost: Int, pushCost: Int, targetSeconds: Int): Int {
        val variants = mutableListOf<String>()

        val timeInRegularFormat = targetSeconds.asRegularFormat()
        val costForTimeInRegularFormat = calculateCost(timeInRegularFormat, startAt, moveCost, pushCost)
        val costForTimeInExtendedFormat = targetSeconds.asExtendedFormat()?.let { time -> calculateCost(time, startAt, moveCost, pushCost) } ?: Int.MAX_VALUE

        return minOf(costForTimeInRegularFormat, costForTimeInExtendedFormat)
    }

    private fun Int.asRegularFormat(): String {
        val minutes = (this / 60).coerceAtMost(99)
        val seconds = this - minutes * 60

        val sb = StringBuilder()
        if (minutes > 0) {
            sb.append("$minutes")
        }
        if (seconds == 0) {
            sb.append("00")
        } else if (seconds < 10 && sb.isNotEmpty()) {
            sb.append("0")
            sb.append("$seconds")
        } else {
            sb.append("$seconds")
        }
        return sb.toString()
    }

    private fun Int.asExtendedFormat(): String? {
        val minutes = (this / 60).coerceAtMost(99) - 1
        if (minutes >= 0) {
            val seconds = this - minutes * 60
            if (seconds <= 99) {
                val sb = StringBuilder()
                if (minutes > 0) {
                    sb.append("$minutes")
                }
                if (seconds == 0) {
                    sb.append("00")
                } else if (seconds < 10 && sb.isNotEmpty()) {
                    sb.append("0")
                    sb.append("$seconds")
                } else {
                    sb.append("$seconds")
                }
                return sb.toString()
            }
        }
        return null
    }

    private fun calculateCost(time: String, startAt: Int, moveCost: Int, pushCost: Int): Int {
        var currentDigit = startAt
        var result = 0
        (0..time.lastIndex).forEach { timeCharIdx ->
            val digit = time[timeCharIdx].digitToInt()
            if (digit == currentDigit) {
                result += pushCost
            } else {
                result += moveCost
                result += pushCost
                currentDigit = digit
            }
        }
        return result
    }

}
```