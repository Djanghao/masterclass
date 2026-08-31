# scala list comprehension

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/5492787/](https://leetcode.com/problems/count-square-sum-triples/solutions/5492787/)

---

```scala
object Solution {
  def countTriples(n: Int): Int =
    val c = (1 to 500).map(x => (x*x) -> x).toMap
    (for{
      a <- 1 until n
      b <- 1 until n
      if c.getOrElse(a*a+b*b,Int.MaxValue) <= n 
    } yield {1}).sum
}
```