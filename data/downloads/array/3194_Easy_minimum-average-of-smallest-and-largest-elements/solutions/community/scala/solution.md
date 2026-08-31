# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5390862/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5390862/)

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
    def minimumAverage(nums: Array[Int]): Double = {
        (nums.sorted zip nums.sorted.reverse).map(n => (n._1 + n._2) / 2.0).min
    }
}
```