# Scala code

**Author:** codersergg
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/4199906/](https://leetcode.com/problems/reverse-string-ii/solutions/4199906/)

---

# Code
```
object Solution {
    def reverseStr(s: String, k: Int): String = {
        s.grouped(k + k)
            .map(_.splitAt(k))
            .map({ case (a, b) => a.reverse ++ b })
            .reduce(_ + _)
    }
}
```