# Recursive sliding window

**Author:** jazzdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/6042469/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/6042469/)

---

# Intuition
Small change to my solution for 1004. Max Consecutive Ones III
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.annotation.tailrec
import scala.math.max

object Solution {
  def longestSubarray(nums: Array[Int]): Int = {

    @tailrec
    def recurse(l: Int = 0, r: Int = 0, zeroes: Int = 0, maxLength: Int = 0): Int = {

      @tailrec
      def contractWindowIfTooManyZeroes(l: Int, zeroes: Int): (Int, Int) =
        if zeroes <= 1 then (l, zeroes) else
          contractWindowIfTooManyZeroes(
            l + 1,
            if nums(l) == 0 then zeroes - 1 else zeroes
          )

      if r == nums.length then maxLength else {

        val (contractedWindowL, contractedWindowZeroes) =
          contractWindowIfTooManyZeroes(l, if nums(r) == 0 then zeroes + 1 else zeroes)

        recurse(
          contractedWindowL,
          r + 1,
          contractedWindowZeroes,
          max(maxLength, r - contractedWindowL)
        )
      }
    }

    recurse()
  }
}

```