# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/3378707/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/3378707/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maxAscendingSum(nums: Array[Int]): Int = {
        var sum = nums(0)
        var maxSum = nums(0)
        for(i <- 1 until nums.length) {
          if(nums(i) > nums(i-1)) sum += nums(i)
          else {
            maxSum = math.max(maxSum, sum)
            sum = nums(i)
          }
        }
        math.max(maxSum, sum)
    }
}
```