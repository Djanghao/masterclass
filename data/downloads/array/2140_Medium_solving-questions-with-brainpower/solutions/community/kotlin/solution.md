# Kotlin easy, few lines

**Author:** c4tdog
**Votes:** 1
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/2947649/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/2947649/)

---


# Code
```
class Solution {
    fun mostPoints(q: Array<IntArray>): Long {
        var a = LongArray(q.size)
        for (i in q.size - 1 downTo 0) {
            a[i] = Math.max(
                if (i + 1 < q.size) a[i + 1] else 0,
                q[i][0] + (if (i + q[i][1] + 1 < q.size) a[i + q[i][1] + 1] else 0))
        }
        return a[0]
    }
}
```