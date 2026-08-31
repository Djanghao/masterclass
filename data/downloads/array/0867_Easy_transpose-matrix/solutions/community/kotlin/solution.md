# Kotlin simple 1 line

**Author:** grantapher
**Votes:** 8
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/2100235/](https://leetcode.com/problems/transpose-matrix/solutions/2100235/)

---

```kotlin
class Solution {
    fun transpose(matrix: Array<IntArray>): Array<IntArray> = 
        Array(matrix[0].size) { x -> IntArray(matrix.size) { y -> matrix[y][x] } }       
}
```

Array constructors in Kotlin accept an init function that includes an index as the input ([Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/-init-.html), [IntArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int-array/-init-.html#init)). Using these, we can complete the whole transposed array population in these init functions by indexing the original array with the opposite axis index.