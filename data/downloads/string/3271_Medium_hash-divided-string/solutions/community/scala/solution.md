# Scala solution

**Author:** aoka
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5717489/](https://leetcode.com/problems/hash-divided-string/solutions/5717489/)

---

# Code
```scala []
object Solution {
    def stringHash(s: String, k: Int): String = {
        s.toCharArray.grouped(k).map { substring =>
            val hash = substring.map(c => c - 'a').sum % 26
            ('a' + hash).toChar
        }.foldLeft("")((x: String, y: Char) => x + y.toString)
    }
}
```