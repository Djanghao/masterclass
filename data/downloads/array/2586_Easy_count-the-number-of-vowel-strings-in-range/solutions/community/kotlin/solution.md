# Simple Kotlin solution

**Author:** armat
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3441301/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3441301/)

---

# Code
```
class Solution {
    private val vowels = "aeiou"

    fun vowelStrings(words: Array<String>, left: Int, right: Int): Int =
        (left..right).count { i ->
            vowels.contains(words[i].first()) && vowels.contains(words[i].last())
        }
}
```