# Scala 100% runtime one line solution

**Author:** tarasbabii18
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1135409/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1135409/)

---

```
object Solution {
    def generateTheString(n: Int): String = {
        if (n % 2 == 0) "a" * (n - 1) + "b" else "a" * n
    }
}
```