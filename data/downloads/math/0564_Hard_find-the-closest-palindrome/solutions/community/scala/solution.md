# 10 lines scala solution

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/5684189/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/5684189/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def nearestPalindromic(n: String): String = {
    lazy val nLong = n.toLong
    if(n=="11") "9"
    else if(nLong<10 || (n.head == '1' && n.iterator.drop(1).forall(_ == '0'))) (nLong-1).toString
    else {
      lazy val l = n.take((n.length+1)/2)
      lazy val List(l1,l0) = List(1,-1).map(x => (l.toLong + x).toString)
      List(l,l1,l0).map{case a:String =>
        (a + a.take(n.length/2).reverse).toLong pipe {m => ((nLong - m).abs, m) }
      }.filter(_._1 != 0).min._2.toString
    }
  }
}
```