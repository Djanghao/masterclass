# Kotlin | Binary Search

**Author:** jschnall
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/5801396/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/5801396/)

---

# Code
```kotlin []
import kotlin.random.Random

class Solution(val rects: Array<IntArray>) {
    val sums = IntArray(rects.size)

    init {
        sums[0] = (1 + rects[0][2] - rects[0][0]) * (1 + rects[0][3] - rects[0][1])

        for (i in 1 until rects.size) {
            sums[i] = (1 + rects[i][2] - rects[i][0]) * (1 + rects[i][3] - rects[i][1]) + sums[i - 1]
        }
    }

    fun pick(): IntArray {
        val randomIndex = Random.nextInt(0, sums.last() + 1)
        val result = sums.binarySearch(randomIndex)

        val index = if (result >= 0) result else -(result + 1)

        return intArrayOf(
            Random.nextInt(rects[index][0], rects[index][2] + 1),
            Random.nextInt(rects[index][1], rects[index][3] + 1)
        )
    }
}
```