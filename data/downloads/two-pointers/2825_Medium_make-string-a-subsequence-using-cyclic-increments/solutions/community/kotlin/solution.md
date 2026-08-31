# Kotlin, short and simple with two pointers, 5 ms

**Author:** user7581dN
**Votes:** 3
**Link:** [https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/6112708/](https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/6112708/)

---

# Approach
If the current `str2` character is the same as the current `str1` character or a result of its cyclic increment, consider it as matched and move to the next `str2` character. Otherwise, try to match it with the next character in `str2`.
Fail-fast if less characters remaining in `str1` than in `str2`.

# Complexity
- Time complexity:
$$O(n+m)$$

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun canMakeSubsequence(str1: String, str2: String): Boolean {
        val n = str1.length
        val m = str2.length
        var i = 0
        var j = 0
        while (j < m) {
            if (n - i < m - j) return false
            val d = str2[j] - str1[i]
            if (d == 0 || d == 1 || d == -25) j++
            i++
        }
        return true
    }
}
```