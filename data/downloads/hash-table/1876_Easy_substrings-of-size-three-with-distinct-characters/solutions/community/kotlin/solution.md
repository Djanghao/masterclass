# Idiomatic Kotlin

**Author:** venkat20
**Votes:** 5
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/3070161/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/3070161/)

---

# Explanation
Divide the input by a substrings of three (by default increments of 1). Obtained substrings of size are still the same size after they are added to a set, we can conclude that the characters are unique
# Code
```
class Solution {
    fun countGoodSubstrings(s: String): Int {
        return s.windowed(3).count { it.toSet().size == 3}
    }
}
```