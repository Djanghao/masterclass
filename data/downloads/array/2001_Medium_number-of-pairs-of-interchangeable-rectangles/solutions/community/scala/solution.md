# [Scala] 100%, fast, concise, literate 4 lines -- group by minimal rectangle and sum handshakes

**Author:** stewSquared
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/2440987/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/2440987/)

---

gcf to calculate minimal interchangeable rectangle, which is used as a grouping key, then sum "handshakes" for each group size

```scala
  def gcf(a: Int, b: Int): Int = if (b == 0) a.abs else gcf(b, a % b)
  
  def minimal(rec: Array[Int]) = rec match { case Array(m, n) => gcf(m, n).pipe(f => (m/f, n/f)) }
  
  def numPairs(n: Long): Long = n * (n-1) / 2
  
  def interchangeableRectangles(rectangles: Array[Array[Int]]): Long =
    rectangles.groupBy(minimal).values.map(recs => numPairs(recs.size)).sum
```
