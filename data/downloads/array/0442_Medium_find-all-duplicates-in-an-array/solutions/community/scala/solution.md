# Simple solution using scala groupBy

**Author:** anjanchakraborty
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/6019275/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/6019275/)

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
```scala []
object Solution {
    def findDuplicates(nums: Array[Int]): List[Int] = {
        nums.groupBy(identity).filter(_._2.length > 1).keys.toList
    }
}
```