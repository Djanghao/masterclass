# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/4143768/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/4143768/)

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

    def maxScore(nums: Array[Int]): Int = 
        nums.sorted.reverse.scanLeft(0L)(_+_).count(_ > 0)

    
}
```