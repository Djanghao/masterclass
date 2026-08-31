# scala simple recursive

**Author:** nrain8481
**Votes:** 2
**Link:** [https://leetcode.com/problems/decode-string/solutions/1339777/](https://leetcode.com/problems/decode-string/solutions/1339777/)

---

```scala
import scala.collection.mutable.Stack
object Solution {
    // s -> N ~ '[' ~ s ~ ']' ~ opt(s) | rep(char)
    def decodeString(s: String): String = {
        var i = 0
        def decode(j: Int): String = {
            if (j >= s.length || s(j) == ']') {
                i = j+1
                ""
            } else if (s(j).isDigit) {
                val num = s.slice(j, s.length()).takeWhile(_.isDigit)
                decode(j + 1 + num.length()) * num.toInt + decode(i)
            } else {
                val str = s.slice(j, s.length()).takeWhile(_.isLower)
                str + decode(j+str.length())
            }
        }
        decode(0)
    }
}
```