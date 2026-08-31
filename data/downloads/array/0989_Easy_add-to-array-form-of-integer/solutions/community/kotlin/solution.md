# Kotlin functional one liner

**Author:** evan_hossain
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3190716/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3190716/)

---

# Code
```
class Solution {
    fun addToArrayForm(num: IntArray, k: Int) =
        num.joinToString("").toBigInteger().add(k.toBigInteger()).toString().map { it - '0' }
}

```