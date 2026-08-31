# Linear time solution without DP

**Author:** qwert2603alex
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4518322/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4518322/)

---

# Intuition

Find the greatest number that is less or equal to `finish` and have digits only `<= limit`. Then convert it to Long with `radix=limit+1`.

# Approach

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    private fun numberOfPowerfulInt(finish: Long, limit: Int, s: String): Long {
        val radix = limit + 1

        val finishString = finish.toString()
        val adjustedFinishBuilder = StringBuilder()
        var over = false
        for (c in finishString) {
            val n = c - '0'
            if (n > limit) {
                over = true
            }
            if (over) {
                adjustedFinishBuilder.append(limit)
            } else {
                adjustedFinishBuilder.append(n)
            }
        }
        val adjustedFinishString = adjustedFinishBuilder.toString()

        var count = adjustedFinishString.dropLast(s.length).ifEmpty { "0" }.toLong(radix)
        if (adjustedFinishString.takeLast(s.length).toLong(radix) < s.toLong(radix)) --count

        return count
    }

    fun numberOfPowerfulInt(start: Long, finish: Long, limit: Int, s: String): Long {
        return numberOfPowerfulInt(finish, limit, s) - numberOfPowerfulInt(start - 1, limit, s)
    }
}
```