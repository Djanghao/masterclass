# Nth Digit solution (128ms)

**Author:** Miktarn
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-digit/solutions/5668849/](https://leetcode.com/problems/nth-digit/solutions/5668849/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
   fun findNthDigit(n: Int): Int {
        var prevThreshold = 0L
        var threshold = 9L
        var currentNumberLength = 1
        var neededNumber = 0L //The number where is n_th digit is sits
        while (n > threshold) {
            prevThreshold = threshold
            currentNumberLength++
            threshold += countThresholdAddition(currentNumberLength)
        }

        var step = 9
        for (i in 1 until currentNumberLength) {
            neededNumber += step
            step *= 10
        }
        neededNumber += (n - prevThreshold + currentNumberLength - 1) / currentNumberLength


        var index = (n - prevThreshold + currentNumberLength - 1) % currentNumberLength

        return neededNumber.toString()[index.toInt()].digitToInt()
    }

    private fun countThresholdAddition(currentNumberLength: Int): Long {
        var thresholdAddition = 9L * currentNumberLength
        for (i in 1 until currentNumberLength) thresholdAddition *= 10
        return thresholdAddition
    }
}
```