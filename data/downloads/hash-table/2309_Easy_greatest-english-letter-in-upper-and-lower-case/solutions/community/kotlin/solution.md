# [Kotlin] Two-liner Using partition and intersect

**Author:** Pony1999
**Votes:** 2
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2176374/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2176374/)

---

```
class Solution {
    fun greatestLetter(s: String): String {
        val (lower, upper) = s.asSequence().partition { it.isLowerCase() }
        return lower.map { it.toUpperCase() }.intersect(upper).max()?.toString() ?: ""
    }
}
```