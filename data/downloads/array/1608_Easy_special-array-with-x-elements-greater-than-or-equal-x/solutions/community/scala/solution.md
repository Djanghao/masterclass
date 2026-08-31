# Scala || Binary Search

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5221344/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5221344/)

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
  def solve(nums: Array[Int], value: Int): Int = {
    nums.count(_ >= value)
  }

  def specialArray(nums: Array[Int]): Int = {
    var low = 0
    var high = 1000
    
    while (low <= high) {
      val mid = (low + high) / 2
      val comp = solve(nums, mid)
      
      if (comp == mid) {
        return comp
      }
      if (comp > mid) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
    
    -1
  }
}

```