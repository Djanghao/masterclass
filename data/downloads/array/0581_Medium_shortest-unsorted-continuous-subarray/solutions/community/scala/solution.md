# Scala solutions

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/3625287/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/3625287/)

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
    def findUnsortedSubarray(nums: Array[Int]): Int = {
      val n = nums.length
      var left = n - 1
      var right = 0
      var min = nums(n - 1)
      var max = nums(0)
      for (i <- 1 until n) {
        max = math.max(max, nums(i))
        min = math.min(min, nums(n - i - 1))
        if (nums(i) < max) right = i
        if (nums(n - i - 1) > min) left = n - i - 1
      }
      if (right > left) right - left + 1 else 0
    }
}
```

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findUnsortedSubarray(nums: Array[Int]): Int = {
      val sortedNums = nums.sorted
      val n = nums.length
      var left = 0
      var right = n - 1
      while (left < n && nums(left) == sortedNums(left)) left += 1
      while (right > left && nums(right) == sortedNums(right)) right -= 1
      right - left + 1
    }
}
```