# Simple Kotlin solution

**Author:** alexcheng1982
**Votes:** 6
**Link:** [https://leetcode.com/problems/detect-capital/solutions/1287789/](https://leetcode.com/problems/detect-capital/solutions/1287789/)

---

Check the number of uppercase chars

```kotlin
class Solution {
    fun detectCapitalUse(word: String): Boolean {
        val c = word.filter { it.isUpperCase() }.count()
        return c == word.length || c == 0 || c == 1 && word[0].isUpperCase()
    }
}
```