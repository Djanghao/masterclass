# Scala tailrec

**Author:** skaz_
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/4737677/](https://leetcode.com/problems/valid-triangle-number/solutions/4737677/)

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
import scala.annotation.tailrec

object Solution {
    def triangleNumber(nums: Array[Int]): Int = {
        val sorted = nums.sorted
        @tailrec
        def loop(i: Int, acc: Int): Int = {
            @tailrec
            def getTriangles(low: Int, high: Int, acc: Int): Int = {
                if (high > low) {
                    if (sorted(low) + sorted(high) > sorted(i)) getTriangles(low, high - 1, acc + high - low)
                    else getTriangles(low + 1, high, acc)
                }
                else acc
            }

            if (i < 2) acc
            else loop(i - 1, getTriangles(0, i - 1, acc))
        }

        loop(nums.length - 1, 0)
    }
}
```