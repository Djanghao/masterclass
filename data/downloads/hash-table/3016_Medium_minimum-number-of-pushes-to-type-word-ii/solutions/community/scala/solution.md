# scala oneliner

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5158718/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5158718/)

---

```
object Solution {
  def minimumPushes: String => Int =
    _.groupMapReduce(identity)(_ => 1)(_ + _).values.to(List).sorted.reverse
      .sliding(8,8).zipWithIndex.map{case (k,v) => k.sum * (v+1)}.sum
}
```