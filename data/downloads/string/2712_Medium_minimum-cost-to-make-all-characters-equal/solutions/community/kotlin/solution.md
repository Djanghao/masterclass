# :: Kotlin :: Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3577167/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3577167/)

---

# Code
```
class Solution {
    fun minimumCost(s: String): Long {
        val n = s.length
        val h = n / 2
        val ca = s.toCharArray()
        var result = Long.MAX_VALUE

        // to 1's
        var m = 0L
        var inverse = false
        for (i in h downTo 0) {
            if (inverse) {
                if (ca[i] == '1') {
                    inverse = false
                    m += i + 1
                }
            } else {
                if (ca[i] == '0') {
                    inverse = true
                    m += i + 1
                }
            }
        }

        inverse = false
        for (i in h + 1 until n) {
            if (inverse) {
                if (ca[i] == '1') {
                    inverse = false
                    m += n - i
                }
            } else {
                if (ca[i] == '0') {
                    inverse = true
                    m += n - i
                }
            }
        }

        result = m

        // to 0's
        m = 0L
        inverse = false

        for (i in h downTo 0) {
            if (inverse) {
                if (ca[i] == '0') {
                    inverse = false
                    m += i + 1
                }
            } else {
                if (ca[i] == '1') {
                    inverse = true
                    m += i + 1
                }
            }
        }

        inverse = false
        for (i in h + 1 until n) {
            if (inverse) {
                if (ca[i] == '0') {
                    inverse = false
                    m += n - i
                }
            } else {
                if (ca[i] == '1') {
                    inverse = true
                    m += n - i
                }
            }
        }

        result = Math.min(result, m)
        
        return result
    }
}
```