# [scala] - string interpolation

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3638548/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3638548/)

---

# Code
```
object Solution {

  private val fascinatingSet = (1 to 9).map('0' + _).toSet

  def isFascinating(n: Int): Boolean = {
    val string = s"$n${n * 2}${n * 3}"
    string.length == 9 && string.toSet == fascinatingSet
  }
}
```

```
object Solution {

  private val fascinatingString = (1 to 9).mkString

  def isFascinating(n: Int): Boolean =
    s"$n${n * 2}${n * 3}".sorted == fascinatingString
}
```