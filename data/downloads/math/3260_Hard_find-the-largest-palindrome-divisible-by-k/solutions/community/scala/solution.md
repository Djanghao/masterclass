# scala divisibility rules based solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5685966/](https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5685966/)

---

https://en.wikipedia.org/wiki/Divisibility_rule
```scala []
// Forming an alternating sum of blocks of three
// from right to left gives a multiple of 7.
// NB: 999999 % 7 == 0
object Solution {
  import scala.util.chaining._
  // Forming an alternating sum of blocks of three from right to left gives a multiple of 7
  lazy val map7 = ("" +: List.range(1, 12).map{len2 =>
    import scala.util.chaining._
    ("9"*((len2+1)/2)).toLong pipe {m9 =>
      LazyList.range(m9,0L,-1L)
        .map(_.toString pipe {s => (s + s.take(len2 / 2).reverse).toLong})
        .dropWhile(_ % 7 != 0).head.toString}
  }).zipWithIndex.map(_.swap).to(Map)
  def largestPalindrome(n: Int, k: Int): String = {
    def digit(i: Int): String = LazyList.range(k,10,k).last.toString
    k match {
      case _ if n==1     => digit(k)
      case 2|5           => s"${digit(k)}${"9"*(n-2)}${digit(k)}"
      case 4 if n > 4    => s"88${"9"*(n-4)}88" 
      case 8 if n > 6    => s"888${"9"*(n-6)}888"
      case 4|8|1|3|9     => s"${digit(k)}"*n
      case 7 if n<12     => map7(n)
      case 7             => map7(6)*(n/12) + map7(n%12) + map7(6)*(n/12)
      case 6 if n==2     => "66"
      case 6             => (((n - 3) / 2) max 0, if ((n & 1) == 1) "8" else "77")
        .pipe {case (l9,mid) =>s"8${"9"*l9}${mid}${"9"*l9}8"}
      case _ => ???
    }
  }
}
```