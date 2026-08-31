# simple noob kotlin solution

**Author:** skd88
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/1970479/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/1970479/)

---

```
class Solution {
    fun findTheDistanceValue(arr1: IntArray, arr2: IntArray, d: Int): Int {
        var result = 0
        loop@for (i in arr1) {
            for (j in arr2) {
                if (Math.abs(i - j) <= d) continue@loop
            }
            result++
        }
        return result
    }
}
```