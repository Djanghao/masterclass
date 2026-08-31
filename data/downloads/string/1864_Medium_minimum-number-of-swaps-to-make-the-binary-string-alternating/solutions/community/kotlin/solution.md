# Kotlin. Fast and Easy

**Author:** anton-pogonets
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/5656194/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/5656194/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun minSwaps(s: String): Int {
        val a = minSwaps('0', s)
        val b = minSwaps('1', s)

        if (a == Int.MAX_VALUE && b == Int.MAX_VALUE) {
            return -1
        }

        return minOf(a, b)
    }

    fun minSwaps(start: Char, s: String): Int {
        var misplacedOnes = 0
        var misplacedZeros = 0

        var expected = start
        for (c in s) {
            if (c != expected && c == '0') {
                misplacedZeros++
            }
            if (c != expected && c == '1') {
                misplacedOnes++
            }

            expected = if (expected == '0') '1' else '0'
        }

        if (misplacedOnes == misplacedZeros) {
            return misplacedOnes
        }

        return Int.MAX_VALUE
    }
}
```