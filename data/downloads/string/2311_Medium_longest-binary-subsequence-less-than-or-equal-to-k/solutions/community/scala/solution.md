# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/5883565/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/5883565/)

---

greedily take all from the right until reach `k` than take remaining `0`s
```scala []
object Solution {
  import scala.util.chaining._
  def longestSubsequence(s: String, k: Int): Int =
    List.unfold((0,0,1,s.reverse.to(List).map(_ - '0'))){case (acc,v,p,l) =>
      Option.when(!(l.isEmpty || v+p*l.head > k || p>k)) {
        ((acc+1,l.tail),(acc+1,v+p*l.head,p<<1,l.tail))
      }
    }.last pipe {case (acc,l) => acc + l.count(_ == 0)}
}
```