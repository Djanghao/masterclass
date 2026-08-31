# scala 3 lines solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/3431354/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/3431354/)

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
    def canChoose(groups: Array[Array[Int]], nums: Array[Int]): Boolean = (groups, nums) match {
        case (groups, _) if (groups.length == 0) => true
        case (groups, nums) if(nums.indexOfSlice(groups(0)) != -1) => canChoose(groups.tail, nums.drop(nums.indexOfSlice(groups(0)) + groups.head.length))
        case _=> false
    }
}
```