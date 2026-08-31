# Binary Search | easy POTD, easy day

**Author:** sanskarpatidar
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/6039145/](https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/6039145/)

---

# Code
```kotlin []
class Solution {
    private fun binary_search(nums: IntArray, upper_limit: Int, lower_limit: Int,
    start: Int): Int{
        var low = start
        var high = nums.size - 1
        while(low<=high){
            var mid = low + ((high-low) shr 1)
            if(nums[mid]>=lower_limit)high = mid-1
            else low = mid+1
        }
        var limit1 = low
        low = start
        high = nums.size - 1
        while(low<=high){
            var mid = low + ((high-low) shr 1)
            if(nums[mid]<=upper_limit)low = mid+1
            else high = mid-1
        }
        var limit2 = high
        return limit2-limit1+1
    }
    fun countFairPairs(nums: IntArray, lower: Int, upper: Int): Long {
        nums.sort()
        var cnt = 0L
        for(i in nums.indices){
            var upper_limit = upper-nums[i]
            var lower_limit = lower-nums[i]
            cnt += binary_search(nums, upper_limit, lower_limit, i+1)
        }
        return cnt
    }
}
```