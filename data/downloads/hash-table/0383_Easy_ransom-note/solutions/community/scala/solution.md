# Scala, diff

**Author:** MihailsC
**Votes:** 2
**Link:** [https://leetcode.com/problems/ransom-note/solutions/3125019/](https://leetcode.com/problems/ransom-note/solutions/3125019/)

---

# Code
```scala
object Solution {
    def canConstruct(ransomNote: String, magazine: String): Boolean = {
        (ransomNote diff magazine).isEmpty
    }
}
```