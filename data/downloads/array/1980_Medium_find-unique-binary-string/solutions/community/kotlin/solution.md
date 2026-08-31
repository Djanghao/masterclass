# Kotlin Solution with for loop beats 100%

**Author:** mahmudxon
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4293550/](https://leetcode.com/problems/find-unique-binary-string/solutions/4293550/)

---

Kotlin 100%
# Code
```
class Solution {
    fun findDifferentBinaryString(nums: Array<String>): String {
    val sb = StringBuilder()
    nums.forEachIndexed { index, s ->
        val c = if (s[index] == '0') '1' else '0'
        sb.append(c)
    }

    return sb.toString()
}
}
```