# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/3135160/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/3135160/)

---

```
class Solution {
    fun containsPattern(arr: IntArray, m: Int, k: Int): Boolean {
        val n = arr.size
        var count = 0
        for (i in 0..n-1-m) {
            if (arr[i] == arr[i+m]) count++
            else count = 0

            if (count == m * (k-1)) return true
        }

        return false
    }
}
```