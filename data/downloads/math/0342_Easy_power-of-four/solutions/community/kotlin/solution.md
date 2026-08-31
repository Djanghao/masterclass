# Simple Recursion Using Switch Statement

**Author:** V1Nut
**Votes:** 2
**Link:** [https://leetcode.com/problems/power-of-four/solutions/5258784/](https://leetcode.com/problems/power-of-four/solutions/5258784/)

---

# Code
```
class Solution {
    fun isPowerOfFour(n: Int): Boolean {
        return when {
            n == 0 -> false 
            n == 1 -> true
            n % 4 != 0 -> false
            else -> isPowerOfFour(n / 4)
        }
    }
}
```