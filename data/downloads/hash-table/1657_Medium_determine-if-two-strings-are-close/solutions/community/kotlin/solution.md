# Elegant Kotlin solution using groupBy

**Author:** gaojude
**Votes:** 3
**Link:** [https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4566437/](https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4566437/)

---

# Code
```
class Solution {
    private fun String.getFrequencyList(): List<Int> {
        return groupBy { it }.map { it.value.size }.sorted()
    }

    fun closeStrings(word1: String, word2: String): Boolean {
        return when {
            word1.length != word2.length -> false
            word1.toSet() != word2.toSet() -> false
            word1.getFrequencyList() != word2.getFrequencyList() -> false
            else -> true
        }
    }
}
```