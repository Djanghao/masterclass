# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/3443297/](https://leetcode.com/problems/set-mismatch/solutions/3443297/)

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
    def findErrorNums(nums: Array[Int]): Array[Int] = {
      val n = nums.length
      val set = nums.toSet
      val missing = (1 to n).find(!set.contains(_)).get
      Array(nums.sum - (1 to n).sum + missing, missing)
    }
}
```