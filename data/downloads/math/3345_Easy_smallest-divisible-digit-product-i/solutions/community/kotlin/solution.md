# Kotlin Straightforward Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6095109/](https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6095109/)

---

# Code
```kotlin []
class Solution {
    fun digitsProduct(n: Int) = n.toString()
        .map { it -> it.digitToInt() }
        .reduce(Int::times)

    fun smallestNumber(n: Int, t: Int): Int {
        for (i in 0..10)
            if (digitsProduct(n + i) % t == 0)
                return n + i        
        return -1
    }
}
```