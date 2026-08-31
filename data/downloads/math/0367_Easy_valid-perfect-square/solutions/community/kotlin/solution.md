# .::kotlin: Binary search

**Author:** dzmtr
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/5278532/](https://leetcode.com/problems/valid-perfect-square/solutions/5278532/)

---

```
class Solution {
    fun isPerfectSquare(num: Int): Boolean {
        var l = 1
        var r = minOf(num, 46340)

        while (l <= r) {
            val mid = l + (r - l) / 2
            val square = mid * mid
            when {
                square == num -> return true
                square > num -> r = mid - 1 
                else -> l = mid + 1
            }
        }

        return false
    }
}
```