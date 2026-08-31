# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4725002/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4725002/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def unequalTriplets(nums: Array[Int]): Int = {
      (for {
        i <- 0 until nums.length - 2
        ii <- i + 1 until nums.length - 1
        iii <- ii + 1 until nums.length
        if nums(i) != nums(ii) && nums(i) != nums(iii) && nums(ii) != nums(iii)
      } yield ()).length
    }
}
```