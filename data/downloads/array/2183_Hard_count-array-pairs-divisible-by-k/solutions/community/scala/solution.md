# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/6033195/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/6033195/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def countPairs(nums: Array[Int], k: Int): Long =
    nums.toList.groupMapReduce(num => (BigInt(num) gcd k).toLong)(_ => 1L)(_ + _)
      .pipe { cnts =>
        (for {a <- cnts.keysIterator; b <- cnts.keysIterator; if a <= b && a * b % k == 0} yield {
          if (a == b) cnts(a) * (cnts(a) - 1) / 2 else cnts(a) * cnts(b)
        }).sum
      }
}
```