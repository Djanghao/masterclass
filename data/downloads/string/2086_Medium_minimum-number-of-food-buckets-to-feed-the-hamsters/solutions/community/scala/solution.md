# scale recursion with list pattern matching

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/5240536/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/5240536/)

---

```scala
object Solution {
  val H = 'H'
  val E = '.'
  def minimumBuckets(hamsters: String): Int =
    def f(seq:List[Char], acc: Int): Int =
      // println(s"  f($seq, $acc)")
      seq match {
        case H :: H :: _      | H :: Nil          => -1
        case Nil              | E :: Nil          => acc
        case E :: H :: Nil    | H :: E :: Nil     => acc+1
        case E :: E :: _      | E :: H :: E :: _  => f(seq.drop(1), acc)
        case E :: H :: H :: _ | H :: E :: E :: _  => f(seq.drop(2), acc+1)
        case H :: E :: H :: _                     => f(seq.drop(3), acc+1)
        case _ => ???
      }
    f(hamsters.toList,0)
}
```