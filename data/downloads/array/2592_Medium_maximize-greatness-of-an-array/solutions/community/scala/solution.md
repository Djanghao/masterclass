# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3336096/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3336096/)

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
    def maximizeGreatness(nums: Array[Int]): Int = {
        nums.length - nums.groupBy(identity).mapValues(_.size).map(_._2).max
    }
}
```