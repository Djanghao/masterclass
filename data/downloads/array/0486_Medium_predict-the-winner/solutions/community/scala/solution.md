# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/3588855/](https://leetcode.com/problems/predict-the-winner/solutions/3588855/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def PredictTheWinner(nums: Array[Int]): Boolean = {
      val n = nums.length
      if (n % 2 == 0) true
      else {
        val dp = Array.fill(n, n)(0)
        for (i <- 0 until n) dp(i)(i) = nums(i)
        for (len <- 2 to n; i <- 0 until n - len + 1) {
          val j = i + len - 1
          dp(i)(j) = math.max(nums(i) - dp(i + 1)(j), nums(j) - dp(i)(j - 1))
        }
        dp(0)(n - 1) >= 0
      }
    }
}
```