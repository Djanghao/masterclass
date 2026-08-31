# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/3587187/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/3587187/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minMoves2(nums: Array[Int]): Int = {
      val sortedNums = nums.sorted
      val median = sortedNums(sortedNums.length / 2)
      sortedNums.map(num => math.abs(num - median)).sum
    }
}
```