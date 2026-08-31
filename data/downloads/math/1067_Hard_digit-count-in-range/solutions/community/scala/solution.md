# Scala foldLeft solution not accepted

**Author:** graphex
**Votes:** 0
**Link:** [https://leetcode.com/problems/digit-count-in-range/solutions/792361/](https://leetcode.com/problems/digit-count-in-range/solutions/792361/)

---

The problem does not specify memory efficiency constraints but returns `Memory Limit Exceeded` for a solution that produces the correct result. While not necessarily the fastest solution, this solves the problem within the limits defined.

```scala
object Solution {
    def digitsCount(d: Int, low: Int, high: Int): Int = {
        val rgx = d.toString.r
        (low.to(high)).foldLeft(0){(acc:Int, cur:Int) =>
            rgx.findAllIn(cur.toString).length + acc
        }
    }
}
```
