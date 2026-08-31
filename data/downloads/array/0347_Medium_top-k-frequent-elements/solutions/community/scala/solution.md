# Use groupMapReduce instead of groupBy to save memory

**Author:** kelemensayni
**Votes:** 1
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/3888053/](https://leetcode.com/problems/top-k-frequent-elements/solutions/3888053/)

---

# Complexity
- Time complexity:
O(n log n )

- Space complexity:
O(n)

# Code
```
import scala.collection.mutable
object Solution {
    def topKFrequent(nums: Array[Int], k: Int): Array[Int] = {
        nums.groupMapReduce(identity)(_ => 1)(_ + _)
            .toSeq
            .sortBy(-_._2)
            .take(k)
            .map(_._1)
            .toArray
    }
}
```