# [Scala] One-liner

**Author:** Pony1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1805056/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1805056/)

---

```
object Solution {
    def prefixCount(words: Array[String], pref: String): Int = {
        words.count(_.startsWith(pref))
    }
}
```