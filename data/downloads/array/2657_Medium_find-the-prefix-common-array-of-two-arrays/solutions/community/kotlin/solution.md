# Easy Kotlin solution with just one Set

**Author:** armat
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3829437/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3829437/)

---

# Code
```
class Solution {
    fun findThePrefixCommonArray(A: IntArray, B: IntArray): IntArray {
        val result = IntArray(A.size)
        val set = mutableSetOf<Int>()
        var i = 0
        var commonPrefixCounter = 0

        while (i < A.size) {
            if (!set.add(A[i]))
                commonPrefixCounter++
                
            if (!set.add(B[i]))
                commonPrefixCounter++

            result[i] = commonPrefixCounter
            i++
        }

        return result
    }
}
```