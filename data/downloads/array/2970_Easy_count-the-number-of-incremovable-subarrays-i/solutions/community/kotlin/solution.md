# Clean simple and easy to understand brute force (Kotlin)

**Author:** pramodpots
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/6049088/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/6049088/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Drop every subarry and see if array remains sorted.
here main catch is isValid function. (inner function)

1. check every value before our subarry window is sorted.
2. check every value after our subarray window is sorted.
3. check last ele of left array and first index of right subary that they remain sorted.
4. If all these cases don't fail then we have valid array return true

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun incremovableSubarrayCount(nums: IntArray): Int {
        fun isValid(start: Int, end: Int): Boolean {
            for (i in 1..start-1) // check if left half is sorted
                if(nums[i-1] >= nums[i]) return false
            
            for(i in end+1..nums.size-2) // check if right half is sorted
                if(nums[i] >= nums[i+1]) return false
            // check if sorted last index of left sorted & first of right
            var l = start - 1
            var r = end + 1
            if (l >= 0 && r <= nums.size-1 && nums[l] >= nums[r])
                return false

            return true
        }
        
        var ans = 0
        for (i in 0..nums.size-1) {
            for(j in i..nums.size-1) {
                if(isValid(i,j)) ans++
            }
        }
        return ans
    }
}
```