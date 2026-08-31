# 1ms Kotlin solution

**Author:** DowZq13pSy
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/6117521/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/6117521/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n)

# Code
```kotlin []
class Solution {
    fun minimumOperations(nums: IntArray): Int {
     val set = hashSetOf<Int>()
     for (i in 0.. nums.size-1){
        if (nums[i]!=0){
            set.add(nums[i])
        }
     }
     return set.size
}
}
```