# [Kotlin] a functional solution

**Author:** martin0327
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/4342373/](https://leetcode.com/problems/find-words-containing-character/solutions/4342373/)

---

```
class Solution {
    fun findWordsContaining(a: Array<String>, x: Char): List<Int> {
        return (0 until a.size).filter {
            i -> x in a[i]
        }.toList()
    }
}
```