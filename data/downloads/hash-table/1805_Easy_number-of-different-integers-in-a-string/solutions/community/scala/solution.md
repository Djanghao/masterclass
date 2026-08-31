# Scala regex one line solution

**Author:** tarasbabii18
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1139342/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1139342/)

---

```
object Solution {
    def numDifferentIntegers(word: String): Int = {
        word.split("(\\\\D|^)0+(?!\\\\D|$)|\\\\D").distinct.count(_.nonEmpty)
    }
}
```