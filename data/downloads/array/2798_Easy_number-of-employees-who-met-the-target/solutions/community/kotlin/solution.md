# Kotlin using count

**Author:** CommanderPepper
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/5029070/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/5029070/)

---

# Code
```
class Solution {
    fun numberOfEmployeesWhoMetTarget(hours: IntArray, target: Int): Int {
        return hours.count { it >= target }
    }
}
```