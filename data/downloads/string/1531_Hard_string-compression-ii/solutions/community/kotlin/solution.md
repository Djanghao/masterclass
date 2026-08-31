# Kotlin 100% (230ms) with comments explained

**Author:** lgsmitty
**Votes:** 5
**Link:** [https://leetcode.com/problems/string-compression-ii/solutions/2705099/](https://leetcode.com/problems/string-compression-ii/solutions/2705099/)

---

Let's apply top-down dynamic programming approach.
Assume `minLength[pos][canDelete]` - minimal length of compressed prefix of length `pos` of input string while at most `canDelete` characters can be deleted. Then answer to this problem will be `minLength[s.length - 1][k]`

**Initial**: `minLength` is `0` when `pos = -1` for any value of `canDelete`. 
**Steps**: 
1. Case #1: deleting current character if `canDelete > 0`. `minLength[pos][canDelete]`  will be updated with `minLength[pos - 1][canDelete - 1]`.
2. Case #2: leaving current and, maybe, some other characters equal to current one, while deleting at most `canDelete` characters in between them. If `length` characters are being left with `deleted` (`deleted` <= `canDelete`) characters deleted in betweem them, `minLength[pos][canDelete]` will be updated with `minLength[pos - length - deleted][canDelete - deleted] + 1 + <number of digits in 'length'>`

There are `N*K` positions and at most 'N' operations are being performed at each of them. Which brings the following complexity:

**Time**: O(N^2*K)
**Space**: O(N*K)

```
class Solution {
    fun getLengthOfOptimalCompression(s: String, k: Int): Int {
        val numberLength = IntArray(s.length + 2) { num -> num.toString().length }
        numberLength[0] = 0
        numberLength[1] = 0

        val UNDEFINED = -1
        val mem = Array(s.length) { IntArray(k + 1) { UNDEFINED } }

        fun getMinLength(pos: Int, canDelete: Int): Int {
            if (pos == -1) {
                return 0
            }

            if (mem[pos][canDelete] != UNDEFINED) {
                return mem[pos][canDelete]
            }

            var result = Int.MAX_VALUE

            if (canDelete > 0) {
                result = minOf(result, getMinLength(pos - 1, canDelete - 1))
            }

            val curChar = s[pos]
            var deleted = 0
            var length = 0

            for (i in pos downTo 0) {
                if (s[i] == curChar) {
                    ++length
                } else {
                    if (deleted == canDelete) break
                    ++deleted
                }

                result = minOf(result, getMinLength(i - 1, canDelete - deleted) + 1 + numberLength[length])
            }

            mem[pos][canDelete] = result
            return result
        }

        return getMinLength(s.lastIndex, k)
    }
}
```

Have a nice day!