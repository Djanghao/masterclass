# [Scala] Functional Programming Simple Solution

**Author:** shankarshastri
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-palindromes/solutions/1197578/](https://leetcode.com/problems/super-palindromes/solutions/1197578/)

---

# Super Palindrome Compute Using Immutable Set Solution In Scala
```scala
object Solution {
  lazy val pL = (1 to 9).foldLeft(Set.empty[BigInt])((a, b) => a + b) | (1 to 10000).foldLeft(Set.empty[BigInt])((a, b) => {
    val l = b.toString
    val r = l.reverse
    val res = a + BigInt(l + r)
    (0 to 9).foldLeft(res)((a, b) => {
      a + BigInt(l + b + r)
    })
  })

  def superpalindromesInRange(left: String, right: String): Int = {
    val leftBI = BigInt(left)
    val rightBI = BigInt(right)
    pL.foldLeft(0)((a, b) => {
      val bSquare = b * b
      val f = bSquare.toString
      if (bSquare >= leftBI && bSquare <= rightBI && f == f.reverse) a + 1
      else a
    })
  }
}
```
