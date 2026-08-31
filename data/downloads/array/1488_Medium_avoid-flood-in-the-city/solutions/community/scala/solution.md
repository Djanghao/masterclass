# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/avoid-flood-in-the-city/solutions/3400458/](https://leetcode.com/problems/avoid-flood-in-the-city/solutions/3400458/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def avoidFlood(rains: Array[Int]): Array[Int] = {
      val n = rains.length
      val fullLakes = scala.collection.mutable.Map[Int, Int]()
      val dryDays = scala.collection.mutable.Set[Int]()
      val res = new Array[Int](n)

      for (i <- 0 until n) {
        if (rains(i) == 0) {
          dryDays += i
          res(i) = 1
        } else {
          val lake = rains(i)
          if (fullLakes.contains(lake)) {
            val dryDay = dryDays.find(_ > fullLakes(lake)).getOrElse(-1)
            if (dryDay == -1) return Array.empty
            res(dryDay) = lake
            dryDays -= dryDay
          }
          fullLakes(lake) = i
          res(i) = -1
        }
      }

      for (day <- dryDays) res(day) = 1
      res
    }
}
```