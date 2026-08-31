# Kotlin Declarative Solution

**Author:** curenosm
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/5329759/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/5329759/)

---

# Code
```
class Solution {
    fun numDifferentIntegers(word: String): Int = word
        .replace("[^\\\\d]".toRegex(), " ")
        .trim().split("\\\\s+".toRegex())
        .filter { !it.isEmpty() }
        .map { BigInteger(it) }
        .toSet()
        .size
}
```