# Kotlin simple solution

**Author:** DanilaNovit
**Votes:** 8
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/3183905/](https://leetcode.com/problems/length-of-last-word/solutions/3183905/)

---

# Code
```
class Solution {
    fun lengthOfLastWord(s: String) = s.split(' ')
        .filter { it.isNotEmpty() }
        .last()
        .length
}
```