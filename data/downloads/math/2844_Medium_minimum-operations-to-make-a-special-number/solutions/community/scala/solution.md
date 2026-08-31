# scala soluiton

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/5149918/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/5149918/)

---

```scala
object Solution {
  def minimumOperations(num: String): Int =
    lazy val rev = num.reverse.to(List)
    lazy val zeroInc = if(rev.contains('0')) 1 else 0
    def count(c1:Char, c2: Char): Int =
      lazy val (d1,t1) = rev.span(_ != c1)
      lazy val (d2,t2) = t1.drop(1).span(_ != c2)
      if(t2.isEmpty) rev.size - zeroInc else rev.size - t2.size - 1
    count('0', '0') min count('5', '2') min count('0', '5') min count('5', '7')
}
```