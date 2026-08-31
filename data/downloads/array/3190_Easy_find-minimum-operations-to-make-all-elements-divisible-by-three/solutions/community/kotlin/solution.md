# Kotlin solution

**Author:** realdatnguyen
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5664720/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5664720/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Create a integer array list with nums size. The element is minium of `nums[it] % 3 `vs `3 - nums[it] % 3`. We need filter with condition element is different from 0. The result is sum of after filter.

# Code
```kotlin []
class Solution {
    fun minimumOperations(nums: IntArray): Int = IntArray(nums.size) {
        min(nums[it] % 3, 3 - nums[it] % 3)
    } .filter { it != 0 }
        .sum()
}
```