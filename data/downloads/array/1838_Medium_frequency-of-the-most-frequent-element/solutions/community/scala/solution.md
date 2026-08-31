# scala solution

**Author:** lyk4411
**Votes:** 2
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300768/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300768/)

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
  def maxFrequency(nums: Array[Int], k: Int): Int = {
    val numsSorted = nums.sorted
    val n = nums.size
    def f(left: Int, right: Int, sum: Long, ans: Int, flag:Boolean): Int = {
      if(right == n) return ans
      val cur = if(!flag) sum + numsSorted(right) else sum
      if(cur >= numsSorted(right) * (right - left + 1)) f(left, right + 1, cur, ans max (right - left + 1), false)
      else f(left + 1, right, cur - numsSorted(left), ans, true)
    }
    f(0, 0, k.toLong, 0, false)
  }
}
```