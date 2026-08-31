# Kotlin

**Author:** GrSpirit
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/4645501/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/4645501/)

---



# Code
```
class Solution {
    fun maxAbsValExpr(arr1: IntArray, arr2: IntArray): Int = with(arr1 zip arr2) {
        val max1 = mapIndexed { i, (a, b) -> a + b + i}.max()
        val min1 = mapIndexed { i, (a, b) -> a + b + i}.min()
        val max2 = mapIndexed { i, (a, b) -> a + b - i}.max()
        val min2 = mapIndexed { i, (a, b) -> a + b - i}.min()
        val max3 = mapIndexed { i, (a, b) -> a - b + i}.max()
        val min3 = mapIndexed { i, (a, b) -> a - b + i}.min()
        val max4 = mapIndexed { i, (a, b) -> a - b - i}.max()
        val min4 = mapIndexed { i, (a, b) -> a - b - i}.min()
        return maxOf(max1 - min1, max2 - min2, max3 - min3, max4 - min4)
    }
}
```