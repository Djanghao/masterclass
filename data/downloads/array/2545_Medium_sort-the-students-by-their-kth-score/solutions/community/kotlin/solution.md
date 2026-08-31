# Kotlin Solution

**Author:** arwaniahmad659
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/5729028/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/5729028/)

---

# Code
```kotlin []
class Solution {
    fun sortTheStudents(score: Array<IntArray>, k: Int): Array<IntArray> {
        return score.sortedByDescending { it[k] }.toTypedArray()
    }
}
```