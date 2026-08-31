# Kotlin Short & Easy Solution 264ms, faster than 50.00%

**Author:** Z3ROsum
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2100275/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2100275/)

---

just do what the problem says, along with 1 edge case
```
class Solution {
    fun digitCount(num: String): Boolean {
        val map = num.groupingBy { it }.eachCount()
        return num.indices.all {
            val count = map[('0'..'9').toList()[it]] ?: 0
            count == num[it].toString().toInt()
        }
    }
}
```