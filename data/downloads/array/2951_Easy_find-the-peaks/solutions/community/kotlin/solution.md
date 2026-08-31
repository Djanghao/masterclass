# Kotlin Declarative Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/5958513/](https://leetcode.com/problems/find-the-peaks/solutions/5958513/)

---

# Code
```kotlin []
class Solution {
    fun findPeaks(mountain: IntArray): List<Int> = (1 until mountain.size - 1)
        .filter { 
            mountain[it - 1] < mountain[it] 
            && mountain[it] > mountain[it + 1] 
        }
}
```