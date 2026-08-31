# Scala ( filter )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/2712303/](https://leetcode.com/problems/string-matching-in-an-array/solutions/2712303/)

---

```
object Solution {
    def stringMatching(words: Array[String]): List[String] =
        words.toList filter
            {sub => words exists {word => (sub != word) && (word contains sub)}}
}
```