# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 8
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/1649048/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/1649048/)

---

```
fun firstUniqChar(s: String) = s.indexOfFirst { s.indexOf(it) == s.lastIndexOf(it) }
```