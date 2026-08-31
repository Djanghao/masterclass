# 🏆100 percent🏆 || best solution || binary search || kotlin || easy || readable

**Author:** aryamangodara
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3212428/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3212428/)

---

# Complexity
- Time complexity: O(log n)

- Space complexity: O(1)

# Code
```
class Solution {
    fun singleNonDuplicate(nums: IntArray): Int {
        var left = 0
        var right = nums.lastIndex
        var mid = 0
        while (left < right) {
            mid = (left + right) / 2
            if(mid%2==1){
                mid--
            } 
            if(nums[mid]==nums[mid+1]){
                left = mid + 2
            }else{
                right = mid 
            }
        }
        return nums[left]
    }
}
```