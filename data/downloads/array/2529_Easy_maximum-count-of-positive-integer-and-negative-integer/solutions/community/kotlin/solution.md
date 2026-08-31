# Two Kotlin solutions for beginners

**Author:** ganesh2shiv
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3030026/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3030026/)

---

Approach 1: Using linear search O(n)
```
class Solution {
    fun maximumCount(nums: IntArray): Int {
        var pos = 0
        var neg = 0
        for (num in nums) {
            if (num < 0) neg++
            if (num > 0) pos++
        }
        return maxOf(neg, pos)
    }
}
```
Approach 2: Using binary search O(log(n))
```
class Solution {
    fun maximumCount(nums: IntArray): Int {
        val n = nums.size
        if (nums[0] > 0 || nums[n-1] < 0) return n

        var neg = binarySearch(nums, 0)
        var pos = n - binarySearch(nums, 1)
    
        return maxOf(neg, pos)
    }

    private fun binarySearch(nums: IntArray, target: Int): Int {
        val n = nums.size
        var left = 0
        var right = n

        while (left < right) {
            val mid = left + (right - left) / 2

            if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return left
    }
}
```