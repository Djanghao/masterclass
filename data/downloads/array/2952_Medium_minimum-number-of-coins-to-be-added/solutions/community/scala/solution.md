# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4380317/](https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4380317/)

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
  def minimumAddedCoins(coins: Array[Int], target: Int): Int = {
    val nums = coins.sorted
    def f(miss: Long, i: Int, res: Int): Int = {
      if (miss > target) res
      else {
        if (i < nums.size && nums(i) <= miss) {
          f(miss + nums(i), i + 1, res)
        } else {
          f(miss + miss, i, res + 1)
        }
      }
    }
    f(1L, 0, 0)
  }
}
```