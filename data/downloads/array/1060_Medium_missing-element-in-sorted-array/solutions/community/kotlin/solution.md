# Kotlin | Binary Search | Time: O(log N) | Space: O(1) | With Comments

**Author:** null925
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/1958560/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/1958560/)

---

```
   fun missingElement(nums: IntArray, k: Int): Int {
        var start = 0
        var end = nums.lastIndex
		
        // Get the missing number relative to the specified index
        fun getMissing(index: Int) = nums[index] - nums[0] - index
        
        while(start <= end) {
            val mid = start + (end - start) / 2
			//If missing number relative to this index is greater than k, search the left half
            if(getMissing(mid) >= k) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        // Start is 1 step above the target since we did start <= end  so we need to do -1
        return nums[start - 1] - getMissing(start - 1) + k