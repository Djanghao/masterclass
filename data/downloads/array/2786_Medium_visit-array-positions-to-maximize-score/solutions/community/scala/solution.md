# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/4139944/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/4139944/)

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
object Solution {
  def maxScore(nums: Array[Int], x: Int): Long = {
    def go(i: Int, odd: Long, even: Long): Long = {
      if(i == nums.length) return odd max even
      if(nums(i) % 2 == 0) go(i + 1, odd, ((even + nums(i)) max (odd + nums(i) - x)))
      else go(i + 1, ((odd + nums(i)) max (even + nums(i) - x)), even)
    }

    if(nums(0) % 2 == 0) go(1, nums(0) - x, nums(0))
    else go(1, nums(0), nums(0) - x)
  }
}
```