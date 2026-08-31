# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/4168338/](https://leetcode.com/problems/painting-the-walls/solutions/4168338/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach recursive
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def paintWalls(cost: Array[Int], time: Array[Int]): Int = {
      val len = cost.length
      val dp = Array.fill(len+1)(Int.MaxValue.toLong)
      dp(0) = 0

      def loop(i: Int, j: Int): Unit = 
        if (i < len) 
          if (j > 0) {
            dp(j) = dp(j).min(dp((j - time(i) - 1).max(0)) + cost(i))
            loop(i, j - 1)
          } else loop(i + 1, len)

      loop(0, len)
      dp(len).toInt
    }
}
```