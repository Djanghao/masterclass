# Simple Kotlin Solution

**Author:** ymkm
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/5114595/](https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/5114595/)

---


```
class Solution {
fun splitIntoFibonacci(num: String): List<Int> {
        val result = mutableListOf<Int>()
        fun backtrack(i: Int): Boolean {
            if (i == num.length) {
                return result.size > 2
            }
            for (j in i until num.length) {
                if (j > i && num[i] == '0') return false
                val n = num.substring(i, j + 1).toLong()
                if (n > Int.MAX_VALUE) {
                    return false
                }
                val size = result.size
                if (size >= 2 && n > result[size - 1] + result[size - 2]) return false
                if (size <= 1 || n == (result[size - 1] + result[size - 2]).toLong()) {
                    result.add(n.toInt())
                    if (backtrack(j + 1)) return true
                    result.removeLast()
                }
            }
            return false
        }
        backtrack(0)
        return result
    }
}
```