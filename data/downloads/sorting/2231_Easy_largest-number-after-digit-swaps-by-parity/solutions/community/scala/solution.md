# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/4311152/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/4311152/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def largestInteger(num: Int): Int = {
      val nums = num.toString.toArray
      for (i <- nums.indices; j <- i + 1 until nums.length)
          if (nums(j) > nums(i) && (nums(j) - nums(i)) % 2 == 0) {
            val tmp = nums(i)
            nums(i) = nums(j)
            nums(j) = tmp
          }
      nums.mkString.toInt
    }
}
```