# 🏆 Kotlin | ✅ Easy 1 liner solution

**Author:** harsc8
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/5578991/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/5578991/)

---

# Intuition
Use filter to find the occurrences of target in nums.

# Approach
Use filter to filter out the elements in num not equal to target and then compare the returned list's size vs nums.size/2. 

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun isMajorityElement(nums: IntArray, target: Int): Boolean {
        return nums.filter{ it == target }.size > nums.size/2
    }
}
```