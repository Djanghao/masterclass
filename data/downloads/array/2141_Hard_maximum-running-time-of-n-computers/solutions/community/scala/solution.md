# Binary Search + Greedy

**Author:** ChristopherTang
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3826042/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3826042/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Binary + Greedy

# Approach
<!-- Describe your approach to solving the problem. -->
- To support a computer to reach x time:
  - If one battery can support the whole x time, the extra amount of the battery cannot be transferred
  - If multiple batteres can support the x time, the extra amount of the battery then can be transferred

# Complexity
- Time complexity: O(log(SUM))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log(SUM))
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/*
 Binary Search + Greedy

 - To support a computer to reach x time:
  - If one battery can support the whole x time, the extra amount of the battery cannot be transferred
  - If multiple batteres can support the x time, the extra amount of the battery can be transferred
*/
object Solution {
    def maxRunTime(n: Int, batteries: Array[Int]): Long = {
      def f(low: Long, high: Long): Long = {
        if (low > high) high
        else {
          val mid = (low + high) / 2

          val res = batteries.foldLeft((0, 0L)) {
            (tuple, battery) => {
              val (total, sum) = tuple
              if (battery >= mid)
                (total + 1, sum)
              else if (sum + battery < mid)
                (total, sum + battery)
              else 
                (total + 1, sum + battery - mid)
            }
          }

          //println(s"expect_mins=$mid, support_computers=${res._1}")

          if (res._1 >= n)
            f(mid + 1, high)
          else
            f(low, mid - 1)
        }
      }

      val sum = batteries.foldLeft(0L)(_ + _)
      val min = batteries.min.toLong
      f(min, sum)
    }
}
```