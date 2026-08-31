# Kotlin easy understandable solution

**Author:** Roman_Samoilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/2574889/](https://leetcode.com/problems/count-square-sum-triples/solutions/2574889/)

---

Runtime: 378 ms, faster than 20.00% of Kotlin online submissions for Count Square Sum Triples.
Memory Usage: 33.4 MB, less than 80.00% of Kotlin online submissions for Count Square Sum Triples.

```
import kotlin.math.sqrt

class Solution {
    fun countTriples(n: Int): Int {
        var count = 0
        var x: Float
        for (i in 1..n) {
            for (j in 1..n) {
                x = sqrt((i * i + j * j).toFloat())
                if (x % 1 == 0f && x <= n) {
                    count++
                }
            }
        }
        return count
    }
}
```

If you like solution, please upvote!