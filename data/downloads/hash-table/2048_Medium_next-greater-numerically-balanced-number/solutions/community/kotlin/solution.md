# Kotlin easy functional approach

**Author:** StrongWings
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/4764535/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/4764535/)

---

Kotlin easy functional approach 

# Code
```
class Solution {
    fun nextBeautifulNumber(n: Int): Int =
        (n + 1).rangeTo(10000000).first {
                it.toString().toCharArray().toList()
                    .groupingBy { it }
                    .eachCount()
                    .all { it.key.toString().toInt() == it.value}
            }
}
```