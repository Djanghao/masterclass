# Scala

**Author:** kamikumakun
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/3065965/](https://leetcode.com/problems/maximum-product-subarray/solutions/3065965/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.math.{min, max}

object Solution {
    def maxProduct(nums: Array[Int]): Int = {
        
        var result = nums.head
        var minSoFar = nums.head
        var maxSoFar = nums.head

        nums.tail.foreach { num =>

            val x = num * minSoFar
            val y = num * maxSoFar

            minSoFar = min(num, min(x, y))
            maxSoFar = max(num, max(x, y))

            result = max(result, maxSoFar)
        }

        result
    }
}
```