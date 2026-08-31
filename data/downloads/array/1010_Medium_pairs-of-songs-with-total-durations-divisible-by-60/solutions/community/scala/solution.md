# O(n) Scala Solution

**Author:** turingcomplete
**Votes:** 0
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/4191137/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/4191137/)

---

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(n)$$ 

# Code
```
import scala.collection.mutable._
object Solution {
    def numPairsDivisibleBy60(time: Array[Int]): Int = {
        var result = 0
        val counts = time.foldLeft(Map[Int, Int]()) { (acc, n) =>
            val r = n % 60
            val required = (60 - r) % 60
            result += acc.getOrElse(required, 0)
            val count = acc.getOrElseUpdate(r, 0) + 1
            acc += (r -> count)
        }
        result
    }
}
```