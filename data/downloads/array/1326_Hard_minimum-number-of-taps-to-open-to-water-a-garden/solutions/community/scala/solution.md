# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3984708/](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3984708/)

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
    def minTaps(n: Int, ranges: Array[Int]): Int = {
      val intervals = Array.tabulate(n + 1)(i => (i - ranges(i), i + ranges(i)))
      def loop(openTaps: Int, maxRight: Int, i: Int): Int = 
        if (maxRight >= n) openTaps
        else 
          intervals.filter(interval => interval._1 <= maxRight && interval._2 > maxRight) match {
            case x if x.isEmpty => -1
            case x => loop(openTaps + 1, x.maxBy(interval => interval._2)._2, i + 1)
          }
      loop(0, 0, 0)
    }
}
```