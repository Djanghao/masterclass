# Easy Scala One Liner Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/5093062/](https://leetcode.com/problems/third-maximum-number/solutions/5093062/)

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
    def thirdMax(nums: Array[Int]): Int = {
        nums.toSet.toList.sortWith(_ > _ ).lift(2).getOrElse(nums.toSet.toList.sortWith( _ > _ )( 0 ))
    }
}
```