# i have became good overtime with scala

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/5836586/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/5836586/)

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
    def intersection(nums: Array[Array[Int]]): List[Int] = {
        var alpha = nums(0).toSet
        for (i <- 1 until nums.length) {
            alpha = alpha.intersect(nums(i).toSet)
        }
        return alpha.toList.sorted
        
    }
}
```