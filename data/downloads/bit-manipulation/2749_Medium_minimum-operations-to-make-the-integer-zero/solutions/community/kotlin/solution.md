# Simple bit manipulation solution

**Author:** HarshPanchal18
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/4996732/](https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/4996732/)

---

# Complexity
- Time complexity: $$O(61)$$
- Space complexity: $$O(log n)$$

# Code
```kotlin
class Solution {
    fun makeTheIntegerZero(num1: Int, num2: Int): Int {
        // if num1 < 0 after minus of num2, return -1
        if (num1 < num2)
    		return -1

        // otherwise, count the number of bit 1 in num1
        for (i in 0..60) {
            val diff = num1 - num2.toLong() * i
            val bits = countBits(diff)

            if (i in bits..diff)
                return i

        }

        return -1
    }

    private fun countBits(num: Long): Int {
        var num = num
        var counter = 0
        while (num > 0) {
            counter += (num and 1).toInt()
            num = num shr 1
        }
        return counter
    }
}
```