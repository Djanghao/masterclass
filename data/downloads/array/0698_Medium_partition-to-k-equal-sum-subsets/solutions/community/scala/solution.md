# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/3692367/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/3692367/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * 2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
      def canPartitionKSubsets(nums: Array[Int], k: Int): Boolean = {
        val sum = nums.sum
        if (sum % k != 0) false
        else canPartition(nums, Array.fill(nums.length)(false), 0, k, 0, sum / k)
      }

      def canPartition(nums: Array[Int], visited: Array[Boolean], start: Int, k: Int, currentSum: Int, target: Int): Boolean = 
        if (k == 1) true
        else if (currentSum == target) canPartition(nums, visited, 0, k - 1, 0, target)
        else {
          for (i <- start until nums.length) {
            if (!visited(i) && currentSum + nums(i) <= target) {
              visited(i) = true
              if (canPartition(nums, visited, i + 1, k, currentSum + nums(i), target)) return true
              visited(i) = false
            }
          }
          false
        }
}
```