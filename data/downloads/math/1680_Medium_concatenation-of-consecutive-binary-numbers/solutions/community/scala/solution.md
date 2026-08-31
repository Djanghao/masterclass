# Scala | Recursive Bitshift Solution

**Author:** pasverm
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/2615461/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/2615461/)

---

To get the solution for n, append n to the solution for n-1 in binary format
Do this by left-shifting the solution for n-1 by the binary length of n and then adding n
```scala
object Solution {
  def binLen(n: Int): Int = if (n == 0) 0 else 1 + binLen(n/2)
  val mod = scala.math.pow(10, 9) + 7
  def concatenatedBinary(n: Int): Int = if (n == 1) 1 else (((concatenatedBinary(n-1).toLong << binLen(n)) + n) % mod).toInt
}
```