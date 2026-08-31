# Kotlin binary search solution, faster than 100%

**Author:** rabusta
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/1981906/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/1981906/)

---

```
import kotlin.math.*

class Solution {
    fun findBestValue(a: IntArray, t: Int): Int {
        
        var l = -1
        var r = a.max()!! + 1
        var dif = Int.MAX_VALUE
        var res = 0
        
        while (l+1 < r) {
            val m = (r - l) / 2 + l
            val sm = a.sumBy { if (it > m) m else it }
            val d = abs(sm - t)
            if (d < dif || (d == dif && m < res)) {
                dif = d
                res = m
            }
            if (sm < t) {
                l = m
            } else {
                r = m
            }
        }
        
        return res
    }
}
```