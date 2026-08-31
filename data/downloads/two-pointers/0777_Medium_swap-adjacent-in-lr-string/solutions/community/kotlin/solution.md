# Beats 100%

**Author:** GroundZeroCro
**Votes:** 1
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/4420934/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/4420934/)

---

# Code
```
class Solution {
    fun canTransform(start: String, end: String): Boolean {

        val size = start.length

        var i = 0
        var j = 0

        while (i < size || j < size) {
            while (i < size  && start[i] == 'X') {
                i++
            }
            while (j < size && end[j] == 'X') {
                j++
            }
            if(i == size || j == size) {
                break
            }
            if (
                start[i] != end[j] ||
                (start[i] == 'L' && i < j) ||
                (start[i] == 'R' && i > j)
            ) {
                return false
            }
            i++
            j++
        }

        return i == size && j == size
    }
}
```