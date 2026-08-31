# O(n) Scala solution

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/5238139/](https://leetcode.com/problems/arithmetic-slices/solutions/5238139/)

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
  def numberOfArithmeticSlices(nums: Array[Int]): Int = {
    if (nums.length < 3) return 0
    
    var ans = 0
    var current = 0
    
    for (i <- 2 until nums.length) {
      if (nums(i) - nums(i - 1) == nums(i - 1) - nums(i - 2)) {
        current += 1
        ans += current
      } else {
        current = 0
      }
    }
    
    ans
  }
}

```