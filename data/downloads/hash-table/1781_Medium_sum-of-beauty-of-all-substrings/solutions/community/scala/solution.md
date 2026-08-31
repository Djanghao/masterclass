# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5449984/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5449984/)

---

```scala
object Solution {
  def beautySum(s: String): Int = 
    s.zipWithIndex
      .foldLeft((0, List(Map.empty[Char,Int].withDefaultValue(0)))){case ((acc,l),(c,i)) =>
        lazy val bMap = l.head + ((c,l.head(c)+1))
        lazy val acc1:Int = acc + l.zipWithIndex.map{case (cMap,j) =>
          lazy val y0 = bMap.iterator.collect{case (k,v) if v > cMap(k) => v - cMap(k)}.toList
          if(y0.size < 1) 0 else  y0.max - y0.min
        }.sum
        (acc1, bMap +: l)
      }._1
}
```