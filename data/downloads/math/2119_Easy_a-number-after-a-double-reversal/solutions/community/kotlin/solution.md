# Kotlin Declarative Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5939606/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5939606/)

---

# Code
```kotlin []
class Solution {
  fun isSameAfterReversals(num: Int) = when {
    num == 0 -> true
    num % 10 == 0 -> false
    else -> true
  }
}
```