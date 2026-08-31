# Scala ( fold, triangular numbers )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/2765098/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/2765098/)

---

```
object Solution {
    def numberOfSubstrings(s: String): Long = {
        def comp(c: Char): Long = {
            val a: Long = s count {_ == c}
            ((a - 1) * a) >> 1
        }
        (s.distinct foldLeft s.length.toLong) {_ + comp(_)}
    }
}
```