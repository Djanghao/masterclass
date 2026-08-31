# [Kotlin] Clean & Short Solution

**Author:** catcatcute
**Votes:** 3
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/1480806/](https://leetcode.com/problems/break-a-palindrome/solutions/1480806/)

---

```
class Solution {
    fun breakPalindrome(palindrome: String): String {
        return if (palindrome.length == 1) {
            "" // It's impassible to break palindrome when length == 1
        } else {
            palindrome.indexOfFirst { it != 'a' }
                .takeIf {
                    it != -1 && it < palindrome.length / 2
                }?.let { index ->
                    // If there exist a none 'a' character in the first half, change that character to 'a'
                    StringBuilder(palindrome).also { it[index] = 'a' }.toString()
                } ?: run { 
                    // Else change the last character to 'b'
                    StringBuilder(palindrome).also { it[it.lastIndex] = 'b' }.toString()
                }
        }
    }
}
```