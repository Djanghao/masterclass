# scala three-liner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/5586445/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/5586445/)

---

```scala
object Solution {
  def countSubstrings(s: String, t: String): Int = {
    lazy val s1 = s.inits.flatMap(_.tails).filter(_.nonEmpty)
      .toList.groupMapReduce(identity)(_ => 1)(_ + _)
      .groupBy(_._1.length)
    lazy val t1 = t.inits.flatMap(_.tails).filter(_.nonEmpty)
      .toList.groupMapReduce(identity)(_ => 1)(_ + _)
      .groupBy(_._1.length)
    (1 to (s.length min t.length)).flatMap{len =>
      for{(s2,s2c) <- s1(len); (t2,t2c) <- t1(len)
      } yield { if (s2.zip(t2).count{case (a,b) => a!=b} == 1) s2c*t2c else 0}
    }.sum
  }
}
```