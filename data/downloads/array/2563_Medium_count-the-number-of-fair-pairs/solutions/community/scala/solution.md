# scala easy solution

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/3236472/](https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/3236472/)

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
    def countFairPairs(nums: Array[Int], lower: Int, upper: Int): Long = {
        val n = nums.sorted
        @scala.annotation.tailrec
        def help(left: Int, right: Int, u: Int, res: Long):Long = {
            if (left >= right) res
            else if (n(left) + n(right) <= u) help(left + 1, right, u, res + right - left)
            else help(left, right - 1, u, res)
        }
        help(0, nums.length - 1, upper, 0L) - help( 0, nums.length - 1, lower - 1, 0L)
    }
}
```