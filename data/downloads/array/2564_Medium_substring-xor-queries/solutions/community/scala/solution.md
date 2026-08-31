# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/5486019/](https://leetcode.com/problems/substring-xor-queries/solutions/5486019/)

---

1. `10**9` occupies at most `30` bits
1. `val ^ first == second` <=> `val == first ^ second`
1. we can precalculate answers for prospect substrings
```scala
object Solution {
  def substringXorQueries(s: String, queries: Array[Array[Int]]): Array[Array[Int]] = {
    val xMap = s.toList.tails.zipWithIndex.filter(_._1.nonEmpty)
      .flatMap{case (tl,l) => tl.take(30).inits.filter(_.nonEmpty)
        .map{case in => in.foldLeft(0){case (acc,b) => (acc<<1) + (b-'0')} -> (l,l+in.size-1)}
      }.toList.sortBy{case (_,(l,r)) => (-(r-l), -l) }.toMap.view
      .mapValues{ case (l, r) => Array(l,r)}.toMap.withDefaultValue(Array(-1,-1))
    queries.map(_.reduce(_ ^ _)).map(xMap)
  }
}


```