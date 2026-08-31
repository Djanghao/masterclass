# Scala 3 lines

**Author:** soft_mittens
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1874403/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1874403/)

---

```
object Solution {
  def getSmallestString(n: Int, k: Int): String = {
    val (zeds, remainderInt): (Int, Int) = (((k - n) / 25), ((k - n) % 25))
    val (remainderLetter, remainderCount) = ((remainderInt + 'a').toChar.toString, (remainderInt compare 0))
    "a" * (n - zeds - remainderCount) + remainderLetter * remainderCount + "z" * zeds
  }
}
```