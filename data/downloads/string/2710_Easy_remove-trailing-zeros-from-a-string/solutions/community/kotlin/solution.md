# Kotlin using drop last while

**Author:** CommanderPepper
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5297754/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5297754/)

---

# Code
```
class Solution {
    fun removeTrailingZeros(num: String): String {
        return num.dropLastWhile { it == '0' }
    }
}
```