# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/3112924/](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/3112924/)

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
    def makeSimilar(nums: Array[Int], target: Array[Int]): Long = {
        val (a1, b1) = nums.partition(_ % 2 == 0)
        val (a2, b2) = target.partition(_ % 2 == 0)
        ((a1.sorted zip a2.sorted).map(n => (n._2.toLong - n._1).abs / 2).sum + (b1.sorted zip b2.sorted).map(n => (n._2.toLong - n._1).abs / 2).sum) / 2
  }
}
```