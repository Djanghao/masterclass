# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/additive-number/solutions/5726941/](https://leetcode.com/problems/additive-number/solutions/5726941/)

---

```scala []
object Solution {
  def isAdditiveNumber(num: String): Boolean = {
    def f(a: String, b: String, c: String): Boolean = {
      lazy val sum = (BigInt(a)+BigInt(b)).toString
      lazy val (t,d) = c.splitAt(sum.length)
      (c.isEmpty) || ((c.head != '0') && (sum == t) && f(b,t,d))
    }
    (num.length >= 3 && num.forall(_ == '0')) ||
    (for{i <- Iterator.range(1, num.length); j <-Iterator.range(1, num.length)}
      yield{
        lazy val (t0,d0) = num.splitAt(i)
        lazy val (t1,d1) = d0.splitAt(j)
        (t0,t1,d1)
      }
    ).filterNot{case (a,b,c) =>
      List(a,b,c).exists(s1 => s1.isEmpty || (s1.length>1 && s1(0)=='0') )
    }.exists((f _).tupled)
  }
}
```