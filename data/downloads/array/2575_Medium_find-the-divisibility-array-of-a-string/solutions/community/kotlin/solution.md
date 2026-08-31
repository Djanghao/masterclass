# Kotlin EZ solution

**Author:** trenatov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3232065/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3232065/)

---

```
class Solution {
    fun divisibilityArray(word: String, m: Int): IntArray {
        val ans = IntArray(word.length)
        val prevRemainder = StringBuilder()

        for (i in word.indices) {
            val number = prevRemainder.append(word[i]).toString().toLong()
            if (number != 0L && number < m) {
                continue
            }

            val remainder = number % m
            prevRemainder.clear()

            if (remainder == 0L) {
                ans[i] = 1
            } else {
                prevRemainder.append(remainder)
            }
        }

        return ans
    }
}
```