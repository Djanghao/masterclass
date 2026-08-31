# Kotlin: Iterative Binary Search

**Author:** artemasoyan
**Votes:** 6
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/2904783/](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/2904783/)

---

```
class Solution {
    fun search(nums: IntArray, target: Int): Int {
         var l = 0 
         var r = nums.size - 1
         
         while(l <= r) {
             val m = l + (r - l) / 2
             
             if (nums[m] == target) return m

             if (nums[m] <= nums[r]) {
                 if (target > nums[m] && target <= nums[r]) l = m + 1
                 else r = m - 1
             } else {
                 if (target < nums[m] && target >= nums[l]) r = m - 1
                 else l = m + 1
             }
         }
         return -1
    }
}
```