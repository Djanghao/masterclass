# Kotlin Declarative Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/5329677/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/5329677/)

---

# Code
```
class Solution {
    fun separateDigits(nums: IntArray): IntArray {
        return nums.flatMap {
            getDigits(it).toList()
        }.toIntArray()
    }

    fun getDigits(n: Int): IntArray {
        return n.toString().map { it.toString().toInt() }.toIntArray()
    }
}
```