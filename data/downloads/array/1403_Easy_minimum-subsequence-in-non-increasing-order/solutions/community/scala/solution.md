# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/3772147/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/3772147/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minSubsequence(nums: Array[Int]): List[Int] = 
      nums.sorted.reverse.foldLeft((0, List.empty[Int], nums.sum)){case ((currentSum, res, sum), num) =>
        if (currentSum <= sum - currentSum) (currentSum + num, num :: res, sum)
        else (currentSum, res, sum)}._2.reverse
}
```