# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/4362863/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/4362863/)

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
    def findSubarrays(nums: Array[Int]): Boolean = {
      nums.sliding(2).map(_.sum).toSet.size < nums.length - 1
    }
}
```