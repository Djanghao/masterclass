# Scala - beats 100 % on runtime

**Author:** trololo999
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/4002524/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/4002524/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable.ArrayBuffer

object Solution {
      def earliestAcq(logs: Array[Array[Int]], n: Int): Int = {
    val sortedLogs = logs.sortBy(_(0))
    val roots = ArrayBuffer[Int]()
    var numberOfDisjointSets = n

    for (i <- 0 until n) {
      roots.addOne(i)
    }

    sortedLogs foreach { log =>
      val friendA = log(1)
      val friendB = log(2)

      if (roots(friendA) != roots(friendB)) {
        val newRoot = roots(friendA)
        val oldRoot = roots(friendB)

        for (i <- 0 until n) {
          if (roots(i) == oldRoot) {
            roots(i) = newRoot
          }
        }
        numberOfDisjointSets -= 1
        if (numberOfDisjointSets == 1) {
          return log(0)
        }
      }
    }

    -1
  }
}
```