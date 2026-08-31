# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/3608380/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/3608380/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findPairs(nums: Array[Int], k: Int): Int = {
      val numCount = nums.groupBy(identity).view.mapValues(_.length)
      var count = 0
      for ((num, freq) <- numCount) {
        if (k == 0 && freq > 1) count += 1
        else if (k > 0 && numCount.contains(num + k)) count += 1
      }
      count
    }
}
```