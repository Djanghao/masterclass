# Kotlin, 148 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/6114283/](https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/6114283/)

---

# Intuition
Essentially, we need to find the largest $$x_1\\cdot x_2\\cdot...\\cdot x_n$$ given that each $$x_i$$ can be either 2 or 3, and $$x_1+x_2+...+x_n = primeFactors$$.

# Approach
To speed up, we'll be incrementally calculating 3 raised to a power of $$p$$, where $$p$$ itself is a power of 2 - i.e. $$3^1, 3^2, 3^4$$, etc - until $$3\\cdot p$$ exceeds the current remaining sum.
Having found the largest $$3^p$$, we multiply the result by it, subtract $$3\\cdot p$$ from the current sum, and look for a new power of 3 for the updated sum.

# Complexity
- Time complexity:
$$O(\\log n)$$

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun maxNiceDivisors(primeFactors: Int): Int {
        var num = primeFactors
        var count = 1L

        while (num > 4) {
            var sumOf3 = 3
            var powerOf3 = 3L
            val limit = num - 4
            while (true) {
                sumOf3 = sumOf3 shl 1
                if (sumOf3 >= limit) break
                powerOf3 = (powerOf3 * powerOf3) % 1000000007
            }
            num -= sumOf3 ushr 1
            count = (count * powerOf3) % 1000000007
        }
        return ((count * num) % 1000000007).toInt()
    }
}
```