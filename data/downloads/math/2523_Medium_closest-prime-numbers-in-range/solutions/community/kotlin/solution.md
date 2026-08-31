# Kotlin solution, beats 100% by run time

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/5959763/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/5959763/)

---

# Approach
Nothing special, just avoiding unnecessary operations.

# Code
```kotlin []
class Solution {
    fun closestPrimes(left: Int, right: Int): IntArray {
        if (left == right) return intArrayOf(-1, -1)
        val nonPrime = BooleanArray(right + 1)
        nonPrime[1] = true
        for (n in 2 .. sqrt(right.toDouble()).toInt()) {
            if (nonPrime[n]) continue
            for (x in n * n..right step n) nonPrime[x] = true
        }

        var num1 = -1
        var num2 = -1
        var diff = 1000000
        var prev = -1000000
        for (n in left..right) if (!nonPrime[n]) {
            val d = n - prev
            if (d < diff) {
                num1 = prev
                num2 = n
                diff = d
            }
            prev = n
        }
        return intArrayOf(num1, num2)
    }
}
```