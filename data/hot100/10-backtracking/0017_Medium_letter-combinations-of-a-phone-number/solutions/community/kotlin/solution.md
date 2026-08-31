# Kotlin clean functional solution

**Author:** qveex
**Votes:** 8
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3858545/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/3858545/)

---

# Kotlin clean functional solution

# Result
- Runtime: 81%
- Memory: 50%

# Code
```
class Solution {
    
    fun letterCombinations(digits: String): List<String> =
        digits.takeIf { it.isNotEmpty() }?.fold(listOf("")) { acc, c ->
            c.letters.flatMap { letter -> acc.map { it + letter } }
        } ?: emptyList()

    private val Char.letters get() = when(this) {
        '2' -> listOf('a', 'b', 'c')
        '3' -> listOf('d', 'e', 'f')
        '4' -> listOf('g', 'h', 'i')
        '5' -> listOf('j', 'k', 'l')
        '6' -> listOf('m', 'n', 'o')
        '7' -> listOf('p', 'q', 'r', 's')
        '8' -> listOf('t', 'u', 'v')
        '9' -> listOf('w', 'x', 'y', 'z')
        else -> listOf()
    }
}
```