# Kotlin beats 100%

**Author:** GroundZeroCro
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/4624042/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/4624042/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun getSmallestString(n: Int, k: Int): String {
        val arr = IntArray(n) { 1 }
        var maxIterations = k - n

        var index = 0
        while (maxIterations > 0) {
            if (arr[index] == 26) index++
            arr[index]++
            maxIterations--
        }
        val stringBuffer = StringBuffer()

        for (i in arr.lastIndex downTo 0) {
            stringBuffer.append('a' + arr[i] - 1)
        }
        return stringBuffer.toString()
    }
}
```